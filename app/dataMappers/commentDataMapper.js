const client = require('./client');

module.exports = {

    createComment: async function(text, listCommentId, userId){
        await client.query(`
            INSERT INTO comment ('text', 'list_comment_id', 'user_id')
            VALUES ($1, $2, $3);`, [text, listCommentId, userId]);
    },

    findComment: async function(listCommentId){
        const result = await client.query(`
            SELECT * FROM comment WHERE list_comment_id = $1;`,
            [listCommentId]);
        return result.rows;
    }

};