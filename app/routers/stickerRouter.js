const express = require('express');

const stickerController = require('../controllers/stickerController');

const { verify } = require('../authentification');

const router = express.Router();

router.post('/createnewsticker', verify, stickerController.createNewSticker);
router.get('/findstickers/:imageId', verify, stickerController.findStickers);
router.patch('/stickerstateupdate', verify, stickerController.stickerStateUpdate);

module.exports = router;