const express = require('express');
// const {verify} = require('../authentification');

const commentListController = require('../controllers/commentListController');

const { newCommentListSchema } = require('../validations/schema');
const { validateBody } = require('../validations/validate')

const router = express.Router();


router.post('/newCommentList', validateBody(newCommentListSchema),commentListController.createCommentList);
router.get('/commentListByStickerId/:stickerId', commentListController.findCommentList);

module.exports = router;