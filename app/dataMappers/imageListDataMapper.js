const client = require('./client');

module.exports = {

    createImageList: async function(data) {

        const result = await client.query(`
        INSERT INTO image_list (feedback_id, name)
        VALUES ($1, $2) RETURNING *;`, [data.feedback_id, data.name]);
        return result.rows[0];
    },


    findImageListByFeedbackId: async function(feedbackId) {

        const result = await client.query(`SELECT * FROM image_list WHERE feedback_id = $1;`, [feedbackId]);
        return result.rows;
    }





}