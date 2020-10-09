const express = require('express');

const cache = require('../cache');

const { verify } = require('../authentification')

const userController = require('../controllers/userController');

const { createUserSchema, updateUserSchema } = require('../validations/schema');
const { validateBody } = require('../validations/validate')

const router = express.Router();

router.get('/users', cache.route('users'), verify, userController.findUsers);

router.get('/usersByRole/:role',function (req, res, next) {
        // set cache name
        res.express_redis_cache_name = 'userByRole-' + req.params.role;
        next();
    }, 
    cache.route(), verify, userController.findUserByRole);

router.get('/userbyId/:userId', function (req, res, next) {
        // set cache name
        res.express_redis_cache_name = 'userById-' + req.params.userId;
        next();
    }, 
    cache.route(), verify, userController.findUserById);

router.get('/usersByProjectId/:projectId', function (req, res, next) {
        // set cache name
        res.express_redis_cache_name = 'userByProjectId-' + req.params.projectId;
        next();
    }, 
    cache.route(), verify, userController.findUserByProjectId);

router.post('/createUser', validateBody(createUserSchema), (_, res, next) => {
        cache.del('*', function (err, number) {
            console.log(`${number} caches have been deleted`);
        })
        next();
    },  
    verify, userController.createUser);

router.patch('/updateUserPassword', validateBody(updateUserSchema),  (_, res, next) => {
        cache.del('*', function (err, number) {
            console.log(`${number} caches have been deleted`);
        })
        next();
    },
    verify, userController.updateUserPassword);

router.patch('/updateUser', validateBody(updateUserSchema),  (_, res, next) => {
        cache.del('*', function (err, number) {
            console.log(`${number} caches have been deleted`);
        })
        next();
    },
    verify, userController.updateUser);

module.exports = router;