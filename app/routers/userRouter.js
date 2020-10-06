const express = require('express');

const cache = require('../cache');

const userController = require('../controllers/userController');

const { createUserSchema, updateUserSchema } = require('../validations/schema');
const { validateBody } = require('../validations/validate')

const router = express.Router();

/**
 * @route GET /users
 * @return {object} 200 - An array of users info
 * @return {error} default - Unexpected error
 */
router.get('/users', cache.route(), userController.findUsers);
router.get('/usersByRole/:role', cache.route(), userController.findUserByRole);
router.get('/userbyId/:userId', cache.route(), userController.findUserById);
router.get('/usersByProjectId/:projectId', cache.route(), userController.findUserByProjectId);
router.post('/createUser', validateBody(createUserSchema), (_, res, next) => {
        cache.del('*', function (err, number) {
            console.log(`${number} caches have been deleted`);
        })
        next();
    },  
    userController.createUser);

router.patch('/updateUserPassword', validateBody(updateUserSchema),  (_, res, next) => {
        cache.del('*', function (err, number) {
            console.log(`${number} caches have been deleted`);
        })
        next();
    },
    userController.updateUserPassword);

router.patch('/updateUser', validateBody(updateUserSchema),  (_, res, next) => {
        cache.del('*', function (err, number) {
            console.log(`${number} caches have been deleted`);
        })
        next();
    },
    userController.updateUser);

module.exports = router;