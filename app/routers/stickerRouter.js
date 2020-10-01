const express = require('express');

const stickerController = require('../controllers/stickerController');

const router = express.Router();

router.post('/createnewsticker', stickerController.createNewSticker);
router.get('/findstickers', stickerController.findStickers);
router.patch('/stickerstateupdate', stickerController.stickerStateUpdate);

module.exports = router;