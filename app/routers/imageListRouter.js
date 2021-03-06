const express = require('express');

const cache = require('../cache');

const imageListController = require('../controllers/imageListController');

const { verify } = require('../authentification');

const { newImageListSchema } = require('../validations/schema');
const { validateBody } = require('../validations/validate');

const router = express.Router();

router.post('/newImageList', validateBody(newImageListSchema), verify, (_, res, next) => {
        cache.del('*', function (err, number) {
            console.log(`${number} caches have been deleted`);
        })
        next();
    },
    imageListController.createImageList);
    
router.get('/imageListByFeedbackId/:feedbackId', verify, cache.route(), imageListController.findImageListByFeedbackId);

module.exports = router;