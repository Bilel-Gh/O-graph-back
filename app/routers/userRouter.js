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
 * @security JWT
 */
router.get('/users', cache.route('users'), userController.findUsers);

/**
 * @route GET /usersByRole/{role}
 * @param {string} role - user's role
 * @return {object} 200 - An array of users info
 * @return {error} default - Unexpected error
 * @security JWT
 */
router.get('/usersByRole/:role',function (req, res, next) {
        // set cache name
        res.express_redis_cache_name = 'userByRole-' + req.params.role;
        next();
    }, 
    cache.route(), userController.findUserByRole);

router.get('/userbyId/:userId', function (req, res, next) {
        // set cache name
        res.express_redis_cache_name = 'userById-' + req.params.userId;
        next();
    }, 
    cache.route(), userController.findUserById);

router.get('/usersByProjectId/:projectId', function (req, res, next) {
        // set cache name
        res.express_redis_cache_name = 'userByProjectId-' + req.params.projectId;
        next();
    }, 
    cache.route(), userController.findUserByProjectId);

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