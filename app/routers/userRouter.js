const express = require('express');

const userController = require('../controllers/userController');

const cache = require('../cache');

const { userSchema } = require('../validations/schema');
const { validateBody } = require('../validations/validate')

const router = express.Router();

router.get('/users', cache.route(), userController.findUsers);
router.get('/usersByRole/:role', userController.findUserByRole);
router.get('/userbyId/:userId', userController.findUserById);
router.get('/usersByProjectId/:projectId', userController.findUserByProjectId);
router.post('/createUser', validateBody(userSchema),userController.createUser);
router.patch('/updateUser', userController.updateUser);

module.exports = router;