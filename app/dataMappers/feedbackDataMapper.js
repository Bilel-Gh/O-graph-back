const client = require('./client');

module.exports = {

    newFeedback: async function(data) {

        const result = await client.query(`
        INSERT INTO feedback (project_id, user_id, name, return_date)
        VALUES ($1, $2, $3, $4) RETURNING *;`, [data.project_id, data.user_id, data.name, data.return_date]);
        return result.rows[0];
    },

    findFeedbackByprojectId: async function(data) {

        const result = await client.query(`SELECT * FROM feedback WHERE project_id = $1;`, [data.projectId]);
        return result.rows;
    },

    updateFeedback: async function(data) {

        const result = await client.query(`
        UPDATE feedback
        SET return_date = $1
        WHERE id = $2 RETURNING *;`, [data.return_date, data.id]);
        return result.rows[0];
    }




}