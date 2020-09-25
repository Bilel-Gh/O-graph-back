const client = require('./client');

module.exports = {

    // Récupération du/des projet d'un utilisateur
    findProjectByUserId: async function(id){

        const result = await client.query(`
            SELECT * FROM project JOIN user_has_project 
                ON user_has_project.project_id = project.id 
                WHERE user_has_project.user_id = $1`, [id]);
        return result.rows;
    },

    // Récupération du/des projet en fonction d'une recherche
    searchProject: async function(searchString){

        const result = await client.query(`
            SELECT project.*
            FROM project
            JOIN user_has_project ON user_has_project.project_id = project.id
            JOIN "user" ON user_has_project.user_id = "user".id
            WHERE LOWER(first_name) LIKE $1
            OR LOWER(last_name) LIKE $1
            OR LOWER(company_name) LIKE $1
            OR LOWER(project.name) LIKE $1;`, ['%' + searchString + '%']);
        return result.rows;
    }

};