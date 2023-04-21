const express = require('express');
const router = express.Router();
const UploadCtrl = require('../controllers/controllerUpload');

router.post('/', UploadCtrl.uploadImage);


module.exports = router;