const express = require('express');
const router = express.Router();
const MatchCtrl = require('../controllers/controllerMatch');

router.post('/', MatchCtrl.createMatch);

router.get('/:id', MatchCtrl.getOneMatch);
router.get('/', MatchCtrl.getAllMatchs);

module.exports = router;