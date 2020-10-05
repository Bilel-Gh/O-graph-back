const express = require('express');

const imageListController = require('../controllers/imageListController')

const { newImageListSchema } = require('../validations/schema');
const { validateBody } = require('../validations/validate');

const router = express.Router();

router.post('/newImageList', validateBody(newImageListSchema), imageListController.createImageList);
router.get('/imageListByFeedbackId/:feedbackId', imageListController.findImageListByFeedbackId);

module.exports = router;