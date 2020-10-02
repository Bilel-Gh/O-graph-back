const express = require('express');

const projectController = require('../controllers/projectController');

const router = express.Router();

router.post('/createProject', projectController.createProject);
router.patch('/updateProject', projectController.updateProject);
router.get('/projectByUserId/:userId', projectController.findProjectByUserId);
router.get('/searchProject/:search', projectController.searchProject);


module.exports = router;