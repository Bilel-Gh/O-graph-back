const imageListDataMapper = require ('../dataMappers/imageListDataMapper');

module.exports = {

    createImageList: async function(req, res) {
        try {
            await imageListDataMapper.createImageList(req.body);
            res.status(201).send('La liste d\'image a bien été créé');
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
    },



    findImageListByFeedbackId: async function(req, res) {
        try {
            const imageList = await imageListDataMapper.findImageListByFeedbackId(req.body);
            res.json(imageList);
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
    }


}