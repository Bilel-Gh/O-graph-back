const express = require('express');

const cache = require('../cache');

const userController = require('../controllers/userController');

const { createUserSchema, updateUserSchema } = require('../validations/schema');
const { validateBody } = require('../validations/validate')

const router = express.Router();

router.get('/users', cache.route(), userController.findUsers);
router.get('/usersByRole/:role', cache.route(), userController.findUserByRole);
router.get('/userbyId/:userId', cache.route(), userController.findUserById);
router.get('/usersByProjectId/:projectId', cache.route(), userController.findUserByProjectId);
router.post('/createUser', validateBody(createUserSchema), _ => {
        cache.del('*', function (err, number) {
            console.log(`${number} caches have been deleted`);
        })
    }, 
    
    userController.createUser);

router.patch('/updateUser', validateBody(updateUserSchema),  _ => {
        cache.del('*', function (err, number) {
            console.log(`${number} caches have been deleted`);
        })
    },
    
    userController.updateUser);

module.exports = router;