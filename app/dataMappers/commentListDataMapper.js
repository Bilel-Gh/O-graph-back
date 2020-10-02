const client = require('./client');

module.exports = {

    createCommentList: async function(data){

       const result = await client.query(`INSERT INTO comment_list ("sticker_id", "name")
                            VALUES ($1, $2) RETURNING *;`, [data.sticker_id, data.name]);
        return result.rows[0];
    },


    findCommentList: async function(data){

        const result = await client.query(`SELECT * FROM comment_list WHERE sticker_id = $1;`, [data.stickerId]);
        return result.rows;
    }

};