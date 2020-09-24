const commentDataMapper = require('../dataMappers/commentDataMapper');

module.exports = {
    
    createComment: async function(request, response){
        try {
            await commentDataMapper.createComment(request.body);
            response.status(200).json({"message": "Le commentaire a bien été créé"});
        } catch(error){
            console.trace(error);
            response.status(500).json(error);
        }
    },

    findComment: async function(request, response){
        try {
            const comments = await commentDataMapper.findComment(request.params.id);
            response.json(comments);
        } catch(error){
            console.trace(error);
            response.status(500).json(error);
        }
    }
}