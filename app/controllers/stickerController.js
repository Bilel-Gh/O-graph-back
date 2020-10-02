const stickerDataMapper = require('../dataMappers/stickerDataMapper');

module.exports = {
    createNewSticker: async function(req, res) {
        try {
            const sticker = await stickerDataMapper.createNewSticker(req.body);
            res.json(sticker);
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
    },

    findStickers: async function (req, res) {
        try{
            const stickers = await stickerDataMapper.findStickers(req.params);
            res.json(stickers);
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
        
    },

    stickerStateUpdate: async function (req, res) {
        try {
            const sticker = await stickerDataMapper.stickerStateUpdate(req.body);
            res.json(sticker);
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
    }
    
}
