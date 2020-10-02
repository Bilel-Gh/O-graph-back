const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/users', userController.findUsers);
router.get('/usersByRole/:role', userController.findUserByRole);
router.get('/userbyId/:userId', userController.findUserById);
router.get('/usersByProjectId/:projectId', userController.findUserByProjectId);
router.post('/createUser', userController.createUser);
router.patch('/updateUser', userController.updateUser);



module.exports = router;