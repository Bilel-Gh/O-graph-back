const express = require('express');
// const {verify} = require('../authentification');

const commentListController = require('../controllers/commentListController');

const router = express.Router();


router.post('/newCommentList', commentListController.createCommentList);
router.get('/commentListByStickerId/:stickerId', commentListController.findCommentList);

module.exports = router;