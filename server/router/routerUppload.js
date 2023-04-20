const express = require('express');
const router = express.Router();
const UpploadCtrl = require('../controllers/controllerUppload');

router.post('/', UpploadCtrl.upploadImage);

router.delete('/')

module.exports = router;