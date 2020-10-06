const express = require('express');

const cache = require('../cache');

const commentController = require('../controllers/commentController');

const { commentSchema }  = require('../validations/schema');
const { validateBody } = require('../validations/validate')

const router = express.Router();


router.post('/newComment', validateBody(commentSchema), _ => {
        cache.del('*', function (err, number) {
            console.log(`${number} caches have been deleted`);
        })
    }, 
    commentController.createComment);
    
router.get('/comment/:commentListId', cache.route(), commentController.findComment);


module.exports = router;