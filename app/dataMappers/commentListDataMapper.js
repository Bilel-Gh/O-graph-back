const client = require('./client');

module.exports = {

    createCommentList: async function(stickerId, listName){

        await client.query(`INSERT INTO comment_list ("sticker_id", "name")
                            VALUES ($1, $2);`, [stickerId, listName]);
    },


    findCommentList: async function(stickerId){

        const result = await client.query(`SELECT * FROM comment_list WHERE sticker_id = $1;`, [stickerId]);
        return result.rows;
    }

};