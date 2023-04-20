const express = require('express');
const router = express.Router();
const JoueurCtrl = require('../controllers/controllerJoueur');

router.post('/', JoueurCtrl.createJoueur);

router.get('/:id', JoueurCtrl.getOneJoueur);
router.get('/', JoueurCtrl.getAllJoueurs);

router.put('/:id', JoueurCtrl.updateOneJoueur);

router.delete('/:id', JoueurCtrl.deleteOneJoueur);

module.exports = router;