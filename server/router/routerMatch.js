const express = require('express');
const router = express.Router();
const MatchCtrl = require('../controllers/controllerMatch');

router.post('/', MatchCtrl.createMatch);

router.get('/:id', MatchCtrl.getOneMatch);
router.get('/', MatchCtrl.getAllMatchs);

router.delete('/:id', MatchCtrl.delOneMatch);

router.put('/:id', MatchCtrl.updateOneMatch);

module.exports = router;