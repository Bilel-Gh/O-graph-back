const client = require('./client');

module.exports = {

    // Créer un commentaire
    createComment: async function(data){
        await client.query(`
            INSERT INTO comment ("text", "list_comment_id", "user_id")
            VALUES ($1, $2, $3);`, [data.text, data.list_comment_id, data.user_id]);
    },

    // Afficher les commentaires d'une liste de commentaires
    findComment: async function(data){
        const result = await client.query(`
        SELECT comment.*, "user".role 
        FROM comment 
        JOIN "user" ON "user".id = comment.user_id
        WHERE list_comment_id = $1;`,
            [data.list_comment_id]);
        return result.rows;
    }

};