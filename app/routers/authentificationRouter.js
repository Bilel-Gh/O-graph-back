const {login, refresh} = require('../authentification');

const express = require('express');

const router = express.Router();


router.post('/login', login);
router.post('/refresh', refresh);




module.exports = router;