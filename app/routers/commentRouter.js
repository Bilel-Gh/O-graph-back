const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();


router.post('/newComment', commentController.createComment);
router.post('/comment', commentController.findComment);


module.exports = router;