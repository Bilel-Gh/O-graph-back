const commentListDataMapper = require ('../dataMappers/commentListDataMapper');

module.exports = {

    createCommentList: async function(req, res) {
        const result = await commentListDataMapper.createCommentList(req.body);
        //return result.rows;
        res.status(201).send('commentList created');
    },

    findCommentList: async function(req, res) {
        const commentList = await commentListDataMapper.findCommentList(req.body);
        res.json(commentList);
    }


}