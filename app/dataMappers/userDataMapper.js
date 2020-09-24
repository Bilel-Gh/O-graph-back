const client = require('./client');

module.exports = {

    // Récupération des utilisateurs en fonction de leurs rôle
    findUserByRole: async function(role) {

        const result = await client.query('SELECT * FROM user WHERE role = $1', [role]);
        return result.rows;
    },

    // Récupération des utilisateur par leurs id
    findUserById: async function(id) {

        const result = await client.query('SELECT * FROM user WHERE id = $1', [id]);
        return result.rows;
    },

    // Récupération des utilisateur par leurs projets
    findUserByProjectId: async function(id){

        const result = await client.query(`
            SELECT * FROM "user" JOIN user_has_project 
                ON user_has_project.user_id = "user".id 
                WHERE user_has_project.project_id = $1`, [id]);
        return result.rows;
    },


};
