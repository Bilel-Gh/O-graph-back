const client = require('./client');

module.exports = {

    newFeedback: async function(data) {

        await client.query(`
        INSERT INTO feedback (project_id, user_id, name, return_date)
        VALUES ($1, $2, $3, $4);`, [data.project_id, data.user_id, data.name, data.return_date]);
    },

    findFeedbackByprojectId: async function(data) {

        const result = await client.query(`SELECT * FROM feedback WHERE project_id = $1;`, [data.project_id]);
        return result.rows;
    },

    updateFeedback: async function(data) {

        await client.query(`
        UPDATE feedback
        SET return_date = $1
        WHERE id = $2;`, [data.return_date, data.id]);
    }




}