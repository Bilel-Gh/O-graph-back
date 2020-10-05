const {login, refresh} = require('../authentification');

const { loginSchema } = require('../validations/schema');
const { validateBody } = require('../validations/validate')

const express = require('express');

const router = express.Router();


router.post('/login', validateBody(loginSchema),login);
router.post('/refresh', refresh);




module.exports = router;