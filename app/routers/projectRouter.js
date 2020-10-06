const express = require('express');

const cache = require('../cache');

const projectController = require('../controllers/projectController');

const { createProjectSchema, updateProjectSchema } = require('../validations/schema');
const { validateBody } = require('../validations/validate')

const router = express.Router();

router.post('/createProject', validateBody(createProjectSchema), _ => {
        cache.del('*', function (err, number) {
            console.log(`${number} caches have been deleted`);
        })
    },
    projectController.createProject);

router.patch('/updateProject', validateBody(updateProjectSchema), _ => {
        cache.del('*', function (err, number) {
            console.log(`${number} caches have been deleted`);
        })
    },
    projectController.updateProject);

router.get('/projectByUserId/:userId', cache.route(), projectController.findProjectByUserId);
router.get('/searchProject/:search', cache.route(), projectController.searchProject);


module.exports = router;