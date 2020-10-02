const express = require('express');

const imageListController = require('../controllers/imageListController');

const router = express.Router();

router.post('/newImageList', imageListController.createImageList);
router.get('/imageListByFeedbackId/:feedbackId', imageListController.findImageListByFeedbackId);

module.exports = router;