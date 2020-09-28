const client = require('./client');

module.exports = {

    createImageList: async function(data) {

        await client.query(`
        INSERT INTO image_list (feedback_id, name)
        VALUES ('$1', '$2');`, [data.feedback_id, data.name]);
    },


    findImageListByFeedbackId: async function(feedbackId) {

        const result = await client.query(`SELECT * FROM image_list WHERE feedback_id = $1;`, [feedbackId]);
        return result.rows;
    }





}