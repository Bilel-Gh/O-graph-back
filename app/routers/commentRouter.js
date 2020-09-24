const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();


router.post('/comment/new', commentController.createComment);
router.get('/comment/:id', commentController.findComment);


module.exports = router;