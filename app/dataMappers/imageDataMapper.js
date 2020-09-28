const client = require('./client');

module.exports = {

    insertImage: async function(data) {

        await client.query(`
        INSERT INTO image (image_url, list_image_id, default_height, default_width)
        VALUES ('$1', '$2', '$3', '$4');`, [data.image_url, data.list_image_id, data.default_height, data.default_width]);
    },


    findImageByListImageId: async function(listImageID) {

        const result  = await client.query(`SELECT * FROM image WHERE list_image_id = $1;`, [listImageID]);
        return result.rows;
    }


}