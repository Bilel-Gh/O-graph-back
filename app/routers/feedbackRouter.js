const express = require('express');

const cache = require('../cache');

const feedbackController = require('../controllers/feedbackController');

const { newFeedbackSchema } = require('../validations/schema');
const { validateBody } = require('../validations/validate');

const router = express.Router();

router.post('/newFeedback', validateBody(newFeedbackSchema), (_, res, next) => {
        cache.del('*', function (err, number) {
            console.log(`${number} caches have been deleted`);
        })
        next();
    },
    feedbackController.newFeedback);

router.patch('/updateFeedback', (_, res, next) => {
        cache.del('*', function (err, number) {
            console.log(`${number} caches have been deleted`);
        })
        next();
    },
    feedbackController.updateFeedback);

router.get('/feedbackByProjectId/:projectId', cache.route(), feedbackController.findFeedbackByprojectId);

module.exports = router;