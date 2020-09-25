const userDataMapper = require('../dataMappers/userDataMapper');

module.exports = {


    login: async function (req, res) {

        const email = req.body.email;
        const password = req.body.password;
        //console.log(req.body);

        const users = await userDataMapper.findUsers();
        //console.log(users);

        const user = users.filter((user) => user.email === email);
        console.log(user);

        if(!email) {
            res.json({'message': 'Veuillez saisir un email correct'});
        }

        let userobject;
        user.map((user) => userobject = user);

        if (userobject.password === password) {
            // console.log('ok');
            req.session.user = user;
            delete userobject.password;
            //console.log(userobject);
            res.json(userobject);
            //console.log(req.session);
        } else {
            res.json({'message': 'Le password est incorect'});
        }

    }
    
};