const imageDataMapper = require ('../dataMappers/imageDataMapper');


module.exports = {
    insertImage: async function (req, res) {
        try {
            const image = await imageDataMapper.insertImage(req.body);
            res.json(image);
        } catch(error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

    findImageByListImageId: async function (req, res) {
        try {
            const images = await imageDataMapper.findImageByListImageId(req.params);
            res.json(images);
        } catch(error) {
            console.trace(error);
            res.status(500).json(error);
        }
    }
}