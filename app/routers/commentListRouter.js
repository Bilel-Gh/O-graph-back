const express = require('express');
const {verify} = require('../middleware');

const commentListController = require('../controllers/commentListController');

const router = express.Router();


router.post('/newCommentList', verify, commentListController.createCommentList);
router.post('/commentListByStickerId', verify, commentListController.findCommentList);

module.exports = router;