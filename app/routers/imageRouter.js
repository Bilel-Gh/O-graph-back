const express = require('express');

const imageController = require('../controllers/imageController');

const multer = require('../multer');

const router = express.Router();

router.post('/newimage', imageController.insertImage);
router.post('/uploadimage', multer.single('file'), function(req, res, next) {
    console.log(req.file);
    if(!req.file) {
      res.status(500);
      return next();
    }
    res.json({ image_url: 'localhost:3000/public/images/' + req.file.filename });
});
router.get('/imageByListImageId', imageController.findImageByListImageId);

module.exports = router;