const express = require('express');

const feedbackController = require('../controllers/feedbackController');

const router = express.Router();

router.post('/newFeedback', feedbackController.newFeedback);
router.patch('/updateFeedback', feedbackController.updateFeedback);
router.get('/feedbackByProjectId', feedbackController.findFeedbackByprojectId);

module.exports = router;