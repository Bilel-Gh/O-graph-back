const client = require('./client');

module.exports = {

    createCommentList: async function(data){

        await client.query(`INSERT INTO comment_list ("sticker_id", "name")
                            VALUES ($1, $2);`, [data.sticker_id, data.name]);
    },


    findCommentList: async function(data){

        const result = await client.query(`SELECT * FROM comment_list WHERE sticker_id = $1;`, [data.sticker_id]);
        return result.rows;
    }

};