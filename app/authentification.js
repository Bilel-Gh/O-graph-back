const jwt = require('jsonwebtoken')
const client = require('../app/dataMappers/client');


module.exports = {

        login: async function(req, res) {

        const email = req.body.email;
        const password = req.body.password;

        const user = await client.query(`SELECT * FROM "user" WHERE email = $1 AND password = $2;`, [email, password])

        let userArray = [];

        for(var property in user.rows[0]) {
            userArray.push(property + "=" + user.rows[0][property]);
        }

        if(!user) {
            res.status(401).send('L\'email ou le password sont incorrects');
        } else {

            let payload = {email: email}
            
            let accessToken = jwt.sign(payload,
                process.env.ACCESS_TOKEN_SECRET, {

                    algorithm: "HS256",

                    expiresIn: process.env.ACCESS_TOKEN_LIFE
                })

            let refreshToken = jwt.sign(payload,
                process.env.REFRESH_TOKEN_SECRET, {

                    algorithm: "HS256",

                    expiresIn: process.env.REFRESH_TOKEN_LIFE
                })

                let usertoken = {
                    "email": userArray[email],
                    "password": userArray[password]
                }

                usertoken.refreshToken = refreshToken


                res.cookie("jwt", accessToken, {secure: true})
                res.send()
        }
    },

    refresh: function (req, res){

        let accessToken = req.cookies.jwt

        if (!accessToken){
            return res.status(403).send()
        }

        let payload
        try{
            payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        }
        catch(e){
            return res.status(401).send()
        }

        //retrieve the refresh token from the users array
        let refreshToken = users[payload.username].refreshToken

        //verify the refresh token
        try{
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
        }
        catch(e){
            return res.status(401).send()
        }

        let newToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, 
        {
            algorithm: "HS256",
            expiresIn: process.env.ACCESS_TOKEN_LIFE
        })

        res.cookie("jwt", newToken, {secure: true, httpOnly: true})
        res.send()
    }

}