const client = require('./client');

module.exports = {

    // Création d'une nouvelle pastille sur une image
    createNewSticker: async function(data){

        const result = await client.query(`
        INSERT INTO sticker ("image_id", "position_x", "position_y")
        VALUES ($1, $2, $3);`, [data.image_id, data.position_x, data.position_y]);
        return result.rows;
    },
    // Récupération des stickers d'une image
    findStickers: async function(data){

        const result = await client.query(`
        SELECT * FROM sticker WHERE image_id = $1;`, [data.image_id]);
        return result.rows;
    },

    // Changer l'état d'un sticker (Visible : true/false)
    stickerStateUpdate: async function(data){

        await client.query(`UPDATE sticker SET visible = $1 WHERE id = $2;`, [data.visible, data.id]);
    }








};