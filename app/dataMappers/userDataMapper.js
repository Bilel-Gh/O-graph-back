const client = require('./client');

module.exports = {

    findUsers: async function() {

        const result = await client.query('SELECT * FROM "user";');
        return result.rows;
    },

    // Récupération des utilisateurs en fonction de leurs rôle
    findUserByRole: async function(data) {

        const result = await client.query('SELECT * FROM user_without_password WHERE role = $1;', [data.role]);
        return result.rows;
    },

    // Récupération des utilisateur par leurs id
    findUserById: async function(data) {

        const result = await client.query('SELECT * FROM user_without_password WHERE id = $1;', [data.id]);
        return result.rows[0];
    },

    // Récupération des utilisateur par leurs projets
    findUserByProjectId: async function(data){

        const result = await client.query(`
            SELECT * FROM user_without_password JOIN user_has_project 
                ON user_has_project.user_id = user_without_password.user_id 
                WHERE user_has_project.project_id = $1;`, [data.project_id]);
        return result.rows;
    },


};
