const imageDataMapper = require ('../dataMappers/imageDataMapper');


module.exports = {
    insertImage: async function (req, res) {
        try {
            await imageDataMapper.insertImage(req.body);
            res.status(201).send('Image inserted');
        } catch(error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

    findImageByListImageId: async function (req, res) {
        try {
            const images = await imageDataMapper.findImageByListImageId(req.body);
            res.json(images);
        } catch(error) {
            console.trace(error);
            res.status(500).json(error);
        }
    }
}