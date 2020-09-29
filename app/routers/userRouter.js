const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/users', userController.findUsers);
router.get('/usersByRole', userController.findUserByRole);
router.get('/userbyId', userController.findUserById);
router.get('/usersByProjectId', userController.findUserByProjectId);



module.exports = router;