const jwt = require('jsonwebtoken');
const client = require('../app/dataMappers/client');


module.exports = {

        login: async function(req, res) {

        const email = req.body.email;
        const password = req.body.password;

        const user = await client.query(`SELECT * FROM "user" WHERE email = $1 AND password = $2;`, [email, password])

            console.log('refresh', process.env.REFRESH_TOKEN_LIFE);
            console.log('token', process.env.ACCESS_TOKEN_LIFE);

        if(!user) {
            res.status(401).send('L\'email ou le password sont incorrects');
        } else {

            let payload = {
                            id : user.rows[0].id,
                            email: user.rows[0].email,
                            role : user.rows[0].role
                        }

            
            let accessToken = await jwt.sign(payload,
                process.env.ACCESS_TOKEN_SECRET, {

                    algorithm: "HS256",

                    expiresIn: process.env.ACCESS_TOKEN_LIFE
                })

            let refreshToken = await jwt.sign(payload,
                process.env.REFRESH_TOKEN_SECRET, {

                    algorithm: "HS256",

                    expiresIn: process.env.REFRESH_TOKEN_LIFE
                })

                let usertoken = {
                    "id": user.rows[0].id,
                    "email": user.rows[0].email,
                    "role": user.rows[0].role
                }

                usertoken.refreshToken = refreshToken


                res.header('authtoken', accessToken).send();
        }
    },

    refresh: function(req, res){

        let accessToken = req.headers.authtoken;

        console.log(accessToken);

        if (!accessToken){
            return res.status(403).send()
        }

        let payload
        
        try{
            payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

            console.log('Payload : ', payload);
        }
        catch(e){
            console.log('ici 1er');
            return res.status(401).send()
        }

        let userRefreshToken = {
            "id": payload.id,
            "email": payload.email,
            "role": payload.role,
        }

        console.log('userRefershToken : ', userRefreshToken);
        //retrieve the refresh token from the users array

        let refreshToken;
        
        refreshToken.userRefreshToken = userRefreshToken;

        console.log('refreshtoken', refreshToken);

        

        //verify the refresh token
        try{
            console.log('on est ici');
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
        }
        catch(e){
            console.log('2eme');
            return res.status(401).send()
        }

        let newToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, 
        {
            algorithm: "HS256",
            expiresIn: process.env.ACCESS_TOKEN_LIFE
        })

        res.header('authtoken', newToken).send()
    }

}