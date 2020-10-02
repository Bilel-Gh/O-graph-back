const commentListDataMapper = require ('../dataMappers/commentListDataMapper');

module.exports = {

    createCommentList: async function(req, res) {
        try {
            const result = await commentListDataMapper.createCommentList(req.body);
            res.json(result);
        } catch(error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

    findCommentList: async function(req, res) {
        try {
            const commentList = await commentListDataMapper.findCommentList(req.params);
            res.json(commentList);
        } catch(error) {
            console.trace(error);
            res.status(500).json(error);
        }
    }


}