const express = require('express');
const commentController = require('../controllers/commentController');

const { commentSchema }  = require('../validations/schema');
const { validateBody } = require('../validations/validate')

const router = express.Router();


router.post('/newComment', validateBody(commentSchema), commentController.createComment);
router.get('/comment/:commentListId', commentController.findComment);


module.exports = router;