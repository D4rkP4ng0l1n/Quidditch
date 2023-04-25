const express = require('express');
const router = express.Router();
const ParticipationCtrl = require('../controllers/controllerParticipation');

router.post('/:id', ParticipationCtrl.addParticipations);
router.get('/', ParticipationCtrl.getAllParticipations);
router.get('/joueur/:idJoueur', ParticipationCtrl.getAllParticipationsForOnePlayer);
router.get('/match/:idMatch', ParticipationCtrl.getAllParticipationsForOneMatch);

module.exports = router;