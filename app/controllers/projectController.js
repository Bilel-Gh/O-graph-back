const projectDataMapper = require('../dataMappers/projectDataMapper');

module.exports = {

    findProjectByUserId: async function(req, res) {
        try{
            const project = await projectDataMapper.findProjectByUserId(req.params.id);
            res.json(project);
        } catch(error) {
            console.trace(error);
            response.status(500).json(error);
        }
    },


    searchProject: async function(req, res) {
        try {
            const search = await projectDataMapper.searchProject(req.body.searchString.toLowerCase());
            res.json(search);
        } catch(error) {
            console.trace(error);
            response.status(500).json(error);
        }
    }



}