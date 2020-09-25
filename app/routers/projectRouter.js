const express = require('express');

const projectController = require('../controllers/projectController');

const router = express.Router();


router.get('/project/:id', projectController.findProjectByUserId);
router.get('/searchProject', projectController.searchProject);


module.exports = router;