const express = require('express');

const projectController = require('../controllers/projectController');

const router = express.Router();

router.post('/createProject', projectController.createProject);
router.post('/updateProject', projectController.updateProject);
router.get('/project', projectController.findProjectByUserId);
router.get('/searchProject', projectController.searchProject);


module.exports = router;