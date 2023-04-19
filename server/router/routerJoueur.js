const express = require('express');
const router = express.Router();
const JoueurCtrl = require('../controllers/controllerJoueur');

router.post('/', JoueurCtrl.createJoueur);

router.get('/:id', JoueurCtrl.getOneJoueur);
router.get('/', JoueurCtrl.getAllJoueurs);

module.exports = router;