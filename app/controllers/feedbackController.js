const feedbackDataMapper = require ('../dataMappers/feedbackDataMapper');

module.exports = {

    newFeedback: async function(req, res) {

        try {
            await feedbackDataMapper.newFeedback(req.body);
            res.status(201).send('Le feedback a bien été créé');
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
    },

    findFeedbackByprojectId: async function(req, res) {

        try {
            const feedback = await feedbackDataMapper.findFeedbackByprojectId(req.body);
            res.json(feedback);
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
    },

    updateFeedback: async function(req, res) {
        try {
            const feedback = await feedbackDataMapper.updateFeedback(req.body);
            res.status(200).send('Le feedback a bien été modifié');
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
    }






}