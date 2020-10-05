const express = require('express');

const feedbackController = require('../controllers/feedbackController');

const { newFeedbackSchema } = require('../validations/schema');
const { validateBody } = require('../validations/validate');

const router = express.Router();

router.post('/newFeedback', validateBody(newFeedbackSchema), feedbackController.newFeedback);
router.patch('/updateFeedback', feedbackController.updateFeedback);
router.get('/feedbackByProjectId/:projectId', feedbackController.findFeedbackByprojectId);

module.exports = router;