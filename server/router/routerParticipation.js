const express = require('express');
const router = express.Router();
const ParticipationCtrl = require('../controllers/controllerParticipation');

router.post('/:id', ParticipationCtrl.addParticipations);

module.exports = router;