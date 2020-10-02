const client = require('./client');

module.exports = {

    // Créer un commentaire
    createComment: async function(data){
        const result = await client.query(`
            INSERT INTO comment ("text", "list_comment_id", "user_id")
            VALUES ($1, $2, $3) RETURNING *;`, [data.text, data.list_comment_id, data.user_id]);
            return result.rows[0];
    },

    // Afficher les commentaires d'une liste de commentaires
    findComment: async function(data){
        const result = await client.query(`
        SELECT comment.*, "user".role 
        FROM comment 
        JOIN "user" ON "user".id = comment.user_id
        WHERE list_comment_id = $1;`,
            [data.commentListId]);
        return result.rows;
    }

};