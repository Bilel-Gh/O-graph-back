const express = require('express');

const projectController = require('../controllers/projectController');

const { createProjectSchema, updateProjectSchema } = require('../validations/schema');
const { validateBody } = require('../validations/validate')

const router = express.Router();

router.post('/createProject', validateBody(createProjectSchema), projectController.createProject);
router.patch('/updateProject', validateBody(updateProjectSchema), projectController.updateProject);
router.get('/projectByUserId/:userId', projectController.findProjectByUserId);
router.get('/searchProject/:search', projectController.searchProject);


module.exports = router;