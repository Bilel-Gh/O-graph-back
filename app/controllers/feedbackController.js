const feedbackDataMapper = require ('../dataMappers/feedbackDataMapper');

module.exports = {

    newFeedback: async function(req, res) {

        try {
            const feedback = await feedbackDataMapper.newFeedback(req.body);
            res.json(feedback);
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
            res.json(feedback);
        } catch(error){
            console.trace(error);
            res.status(500).json(error);
        }
    }






}