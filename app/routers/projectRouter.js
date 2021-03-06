const express = require('express');

const cache = require('../cache');

const projectController = require('../controllers/projectController');

const { verify } = require('../authentification');

const { createProjectSchema, updateProjectSchema } = require('../validations/schema');
const { validateBody } = require('../validations/validate')

const router = express.Router();

router.post('/createProject', validateBody(createProjectSchema), verify, (_, res, next) => {
        cache.del('*', function (err, number) {
            console.log(`${number} caches have been deleted`);
        })
        next();
    },
    projectController.createProject);

router.patch('/updateProject', validateBody(updateProjectSchema), verify, (_,res, next) => {
        cache.del('*', function (err, number) {
            console.log(`${number} caches have been deleted`);
        })
        next();
    },
    projectController.updateProject);

router.get('/projectByUserId/:userId', verify, 
    function (req, res, next) {
        // set cache name
        res.express_redis_cache_name = 'projectByUserId-' + req.params.userId;
        next();
    }, 
    cache.route(),projectController.findProjectByUserId);

router.get('/searchProject/:search', verify, 
    function (req, res, next) {
        // set cache name
        res.express_redis_cache_name = 'searchProject-' + req.params.search;
        next();
    },
    cache.route(), projectController.searchProject);


module.exports = router;