const stickerDataMapper = require('../dataMappers/stickerDataMapper');

module.exports = {
    createNewSticker: async function(req, res) {
        try {
            await stickerDataMapper.createNewSticker(req.body);
            res.status(201).send('Le sticker a bien été créé');
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
    },

    findStickers: async function (req, res) {
        try{
            const stickers = await stickerDataMapper.findStickers(req.body);
            res.json(stickers);
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
        
    },

    stickerStateUpdate: async function (req, res) {
        try {
            await stickerDataMapper.stickerStateUpdate(req.body);
            res.status(201).send('Le sticker a bien été modifié');
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
    }
    
}
