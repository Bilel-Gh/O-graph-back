const client = require('./client');

module.exports = {

    findProjectByUserId: async function(id){

        const result = await client.query(`
            SELECT * FROM project JOIN user_has_project 
                ON user_has_project.project_id = project.id 
                WHERE user_has_project.user_id = $1`, [id]);
        return result.rows;
    },



};