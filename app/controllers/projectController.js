const projectDataMapper = require('../dataMappers/projectDataMapper');

module.exports = {

    createProject: async function (req, res) {
        try{
            console.log(req.body);
            const project = await projectDataMapper.createProject(req.body);
            res.json(project);
        } catch(error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

    updateProject: async function (req, res) {
        try{
            const project = await projectDataMapper.updateProject(req.body);
            res.json(project);
        } catch(error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

    findProjectByUserId: async function(req, res) {
        try{
            const project = await projectDataMapper.findProjectByUserId(req.body);
            res.json(project);
        } catch(error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },


    searchProject: async function(req, res) {
        try {
            const search = await projectDataMapper.searchProject(req.body.searchString.toLowerCase());
            res.json(search);
        } catch(error) {
            console.trace(error);
            res.status(500).json(error);
        }
    }



}