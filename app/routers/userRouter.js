const express = require('express');

const cache = require('../cache');

const { verify } = require('../authentification');

const userController = require('../controllers/userController');

const { createUserSchema, updateUserSchema } = require('../validations/schema');
const { validateBody } = require('../validations/validate')

const router = express.Router();

router.get('/users', verify, cache.route('users'), userController.findUsers);

router.get('/usersByRole/:role', verify, function (req, res, next) {
        // set cache name
        res.express_redis_cache_name = 'userByRole-' + req.params.role;
        next();
    }, 
    cache.route(), userController.findUserByRole);

router.get('/userbyId/:userId', verify, function (req, res, next) {
        // set cache name
        res.express_redis_cache_name = 'userById-' + req.params.userId;
        next();
    }, 
    cache.route(),userController.findUserById);

router.get('/usersByProjectId/:projectId',  verify, function (req, res, next) {
        // set cache name
        res.express_redis_cache_name = 'userByProjectId-' + req.params.projectId;
        next();
    }, 
    cache.route(),userController.findUserByProjectId);

router.post('/createUser', validateBody(createUserSchema), verify, (_, res, next) => {
        cache.del('*', function (err, number) {
            console.log(`${number} caches have been deleted`);
        })
        next();
    },  
    userController.createUser);

router.patch('/updateUserPassword', validateBody(updateUserSchema), verify, (_, res, next) => {
        cache.del('*', function (err, number) {
            console.log(`${number} caches have been deleted`);
        })
        next();
    },
    userController.updateUserPassword);

router.patch('/updateUser', validateBody(updateUserSchema), verify, (_, res, next) => {
        cache.del('*', function (err, number) {
            console.log(`${number} caches have been deleted`);
        })
        next();
    },
    userController.updateUser);

module.exports = router;