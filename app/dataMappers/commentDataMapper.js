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
        SELECT comment.*, "user".role, "user".first_name, "user".last_name, "user".company_name 
        FROM comment 
        JOIN "user" ON "user".id = comment.user_id
        WHERE list_comment_id = $1
        ORDER BY date_time ASC;`,
            [data.commentListId]);
        return result.rows;
    }

};