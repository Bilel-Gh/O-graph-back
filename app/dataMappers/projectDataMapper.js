const client = require('./client');

module.exports = {

    createProject: async function(data) {
        const result = await client.query(`
            INSERT INTO project ("name", statut) 
            VALUES ($1, $2) RETURNING *;`, [data.name, data.statut]);
        return result.rows[0];
    },

    updateProject: async function(data) {
        const result = await client.query(`
            UPDATE project SET name = $1, statut = $2 WHERE id = $3 RETURNING *
        ;`, [data.name, data.statut, data.project_id]);
        return result.rows[0];
    },

    // Récupération du/des projet d'un utilisateur
    findProjectByUserId: async function(data){

        const result = await client.query(`
            SELECT * FROM project JOIN user_has_project 
                ON user_has_project.project_id = project.id 
                WHERE user_has_project.user_id = $1`, [data.userId]);
        return result.rows;
    },

    // Récupération du/des projet en fonction d'une recherche
    searchProject: async function(search){

        const result = await client.query(`
            SELECT project.*
            FROM project
            JOIN user_has_project ON user_has_project.project_id = project.id
            JOIN "user" ON user_has_project.user_id = "user".id
            WHERE LOWER(first_name) LIKE $1
            OR LOWER(last_name) LIKE $1
            OR LOWER(company_name) LIKE $1
            OR LOWER(project.name) LIKE $1;`, ['%' + search + '%']);
        return result.rows;
    }

};