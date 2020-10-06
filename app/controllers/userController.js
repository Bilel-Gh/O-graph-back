const userDataMapper = require('../dataMappers/userDataMapper');

module.exports = {

    findUsers: async function(_, res) {
        try {
            const users = await userDataMapper.findUsers();
            res.json(users);
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
    },


    findUserByRole: async function(req, res) {
        try {
            const users = await userDataMapper.findUserByRole(req.params);
            res.json(users);
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
    },


    findUserById: async function(req, res) {
        try {
            const user = await userDataMapper.findUserById(req.params);
            res.json(user);
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
    },

    findUserByProjectId: async function(req, res) {
        try {
            const users = await userDataMapper.findUserByProjectId(req.params);
            res.json(users);
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
    },


    createUser: async function(req, res) {
        try {
            const user = await userDataMapper.createUser(req.body);
            res.json(user);
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
    },

    updateUserPassword: async function(req, res) {
        try {
            const user = await userDataMapper.updateUser(req.body);
            res.json(user);
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
    },

    updateUser: async function(req, res) {
        try {
            const user = await userDataMapper.updateUser(req.body);
            res.json(user);
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
    }
    
};