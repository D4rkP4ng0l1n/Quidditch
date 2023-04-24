const express = require('express');
const router = express.Router();
const UploadCtrl = require('../controllers/controllerUpload');

router.post('/', UploadCtrl.uploadImage);

router.delete('/:nom', UploadCtrl.deleteImg);


module.exports = router;