const express = require('express');
require('dotenv').config();

const imageController = require('../controllers/imageController');

const multer = require('../multer');

const router = express.Router();

router.post('/newImage', imageController.insertImage);
router.post('/uploadimage', multer.single('file'), function(req, res, next) {
    console.log(req.file);
    if(!req.file) {
      res.status(500);
      return next();
    }
    res.json({ image_url: `localhost:${process.env.PORT}/public/images/` + req.file.filename });
});
router.get('/imageByListImageId/:listImageId', imageController.findImageByListImageId);

module.exports = router;