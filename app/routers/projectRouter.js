const express = require('express');

const cache = require('../cache');

const projectController = require('../controllers/projectController');

const { createProjectSchema, updateProjectSchema } = require('../validations/schema');
const { validateBody } = require('../validations/validate')

const router = express.Router();

router.post('/createProject', validateBody(createProjectSchema), (_, res, next) => {
        cache.del('*', function (err, number) {
            console.log(`${number} caches have been deleted`);
        })
        next();
    },
    projectController.createProject);

router.patch('/updateProject', validateBody(updateProjectSchema), (_,res, next) => {
        cache.del('*', function (err, number) {
            console.log(`${number} caches have been deleted`);
        })
        next();
    },
    projectController.updateProject);

router.get('/projectByUserId/:userId', cache.route(), projectController.findProjectByUserId);
router.get('/searchProject/:search', cache.route(), projectController.searchProject);


module.exports = router;