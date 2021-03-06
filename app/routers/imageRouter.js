const express = require('express');
require('dotenv').config();

const imageController = require('../controllers/imageController');

const { verify } = require('../authentification');

const multer = require('../multer');

const router = express.Router();

router.post('/newImage', imageController.insertImage);
router.post('/uploadimage', multer.single('file'), function(req, res, next) {
    console.log(req.file);
    if(!req.file) {
      res.status(500);
      return next();
    }
    res.json({ image_url: `http://localhost:3001/public/images/` + req.file.filename });
});
router.get('/imageByListImageId/:listImageId', verify, imageController.findImageByListImageId);

module.exports = router;