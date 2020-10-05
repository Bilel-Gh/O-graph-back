const express = require('express');

const projectController = require('../controllers/projectController');

const { createProjectSchema } = require('../validations/schema');
const { validateBody } = require('../validations/validate')

const router = express.Router();

router.post('/createProject', validateBody(createProjectSchema), projectController.createProject);
router.patch('/updateProject', projectController.updateProject);
router.get('/projectByUserId/:userId', projectController.findProjectByUserId);
router.get('/searchProject/:search', projectController.searchProject);


module.exports = router;