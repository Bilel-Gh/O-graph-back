const client = require('./client');

module.exports = {

    // Création d'une nouvelle pastille sur une image
    createNewSticker: async function(imageId, positionX, positionY){

        const result = await client.query(`
        INSERT INTO sticker ("image_id", "position_x", "position_y")
        VALUES ($1, $2, $3);`, [imageId, positionX, positionY]);
        return result.rows;
    },
    // Récupération des stickers d'une image
    findStickers: async function(imageId){

        const result = await client.query(`
        SELECT * FROM sticker WHERE image_id = $1;`, [imageId]);
        return result.rows;
    },

    // Changer l'état d'un sticker (Visible : true/false)
    stickerStateUpdate: async function(state, stickerId){

        await client.query(`UPDATE sticker SET visible = $1 WHERE id = $2;`, [state, stickerId]);
    }








};