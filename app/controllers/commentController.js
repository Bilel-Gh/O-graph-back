const commentDataMapper = require('../dataMappers/commentDataMapper');

module.exports = {
    
    createComment: async function(req, res){
        try {
            const comment = await commentDataMapper.createComment(req.body);
            res.json(comment);
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
    },

    findComment: async function(req, res){
        try {
            const comments = await commentDataMapper.findComment(req.params);
            res.json(comments);
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
    }
}