const commentDataMapper = require('../dataMappers/commentDataMapper');

module.exports = {
    
    createComment: async function(req, res){
        try {
            await commentDataMapper.createComment(req.body);
            res.status(201).send('Le commentaire a bien été créé');
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
    },

    findComment: async function(req, res){
        try {
            const comments = await commentDataMapper.findComment(req.body);
            res.json(comments);
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
    }
}