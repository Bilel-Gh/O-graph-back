const jwt = require('jsonwebtoken');
const client = require('../app/dataMappers/client');
const bcrypt = require('bcrypt');

const jwtKey = process.env.ACCESS_TOKEN_SECRET
const jwtExpirySeconds = 300

module.exports = {

    login: async function(req, res) {

        const email = req.body.email;
        const password = req.body.password;

        const user = await client.query(`SELECT * FROM "user" WHERE email = $1;`, [email]);

        const hashUserPassword = user.rows[0].password;

        if(!user) {
            res.status(401).send('L\'email est incorrects');
        } else {

            bcrypt.compare(password, hashUserPassword, async function(err, result) {
                if(result !==true) {
                    res.status(403).send('Il y a un problème avec le mot de passe');
                } else {

                    let payload = {
                        id : user.rows[0].id,
                        email: user.rows[0].email,
                        role : user.rows[0].role
                    }

        
                    let token = await jwt.sign(payload, jwtKey, {

                            algorithm: "HS256",

                            expiresIn: jwtExpirySeconds
                    })

                        res.header({"authtoken": token, "role": user.rows[0].role,"maxAge": jwtExpirySeconds * 1000, "Access-Control-Expose-Headers": "*"});
                        res.send();
                }
            });
        }
    },

    verify: function(req, res, next){
        let token = req.headers.authtoken;

        //if there is no token stored in cookies, the request is unauthorized
        if (!token){
            return res.status(401).end();
        }

        let payload;

        try{
            //use the jwt.verify method to verify the access token
            //throws an error if the token has expired or has a invalid signature
            payload = jwt.verify(token, jwtKey);
            next();
        }
        catch(e){
            //if an error occured return request unauthorized error
            return res.status(401).end();
        };
    },

    refresh: function(req, res){

        const token = req.headers.authtoken;

        if (!token){
            return res.status(401).end();
        }

        let payload;
        
        try{
            payload = jwt.verify(token, jwtKey);

        }
        catch(e){
            console.log(e);
            return res.status(401).end();
        };


        const newToken = jwt.sign({"id": payload.id, "role": payload.role, "email": payload.email}, jwtKey, {

            algorithm: "HS256",
            expiresIn: jwtExpirySeconds
        });

        res.header({"authtoken": newToken,  "maxAge": jwtExpirySeconds * 1000 });
        res.end();
    }

}