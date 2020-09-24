const projectDataMapper = require('../dataMappers/projectDataMapper');

module.exports = {

    findProjectByUserId: async function(req, res) {
        try{
            console.log(req.params.id);
            const project = await projectDataMapper.findProjectByUserId(req.params.id);
            res.json(project);
        } catch(error) {
            console.trace(error);
            response.status(500).json(error);
        }
    }



}