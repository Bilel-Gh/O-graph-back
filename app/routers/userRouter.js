const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.post('/login', userController.login);


router.get('/users', userController.findUsers);
router.post('/usersByRole', userController.findUserByRole);
router.post('/userbyId', userController.findUserById);
router.post('/usersByProjectId', userController.findUserByProjectId);



module.exports = router;