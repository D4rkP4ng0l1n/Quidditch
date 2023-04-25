const Participation = require('../models/modelParticipation');

// PARTIE POST

exports.addParticipations = (req, res) => {
    const joueurs = req.body;
    const idMatch = req.params.id;
    const participations = [];

    for (let joueur of joueurs) {
        const participation = new Participation({ idJoueur: joueur.idJoueur, idMatch: idMatch, poste: joueur.poste, note: 0, commentaire: '' });
        participations.push(participation);
    }

    Participation.insertMany(participations)
        .then((result) => {
            return res.status(201).json({ result });
        })
        .catch((error) => {
            return res.status(400).json({ error });
        });
};

// PARTIE GET

exports.getAllParticipations = (req, res) => {
    Participation.find()
        .then((participation) => {
            return res.status(200).json({ participation });
        }).catch((error) => {
            return res.status(400).json({ error });
        });
};

exports.getAllParticipationsForOnePlayer = (req, res) => {
    const id = req.params.idJoueur;
    Participation.find({ idJoueur: id })
        .then((participation) => {
            return res.status(200).json({ participation });
        }).catch((error) => {
            return res.status(400).json({ error });
        });
};

exports.getAllParticipationsForOneMatch = (req, res) => {
    const id = req.params.idMatch;
    Participation.find({ idMatch: id })
        .then((participation) => {
            return res.status(200).json({ participation });
        }).catch((error) => {
            return res.status(400).json({ error });
        });
};