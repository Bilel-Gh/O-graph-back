const express = require('express');

const projectController = require('../controllers/projectController');

const router = express.Router();


router.get('/project/:id', projectController.findProjectByUserId);


module.exports = router;