const express = require('express');
// const {verify} = require('../authentification');

const cache = require('../cache');

const commentListController = require('../controllers/commentListController');

const { verify } = require('../authentification');

const { newCommentListSchema } = require('../validations/schema');
const { validateBody } = require('../validations/validate')

const router = express.Router();


router.post('/newCommentList', validateBody(newCommentListSchema), verify, (_, res, next) => {
        cache.del('*', function (err, number) {
            console.log(`${number} caches have been deleted`);
        })
        next();
    },
    commentListController.createCommentList);
    
router.get('/commentListByStickerId/:stickerId', verify, cache.route(), commentListController.findCommentList);

module.exports = router;