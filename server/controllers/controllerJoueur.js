const Joueur = require('../models/modelJoueur');



// PARTIE POST 

exports.createJoueur = (req, res) => {
    const joueur = new Joueur(req.body);
    joueur.save()
        .then((joueur) => {
            return res.status(201).json({ joueur });
        }).catch((error) => {
            return res.status(400).json({ error });
        });
}



// PARTIE PUT

exports.updateOneJoueur = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    Joueur.findOneAndUpdate(id, body)
        .then((joueur) => {
            return res.status(200).json({ joueur });
        }).catch((error) => {
            return res.status(400).json({ error });
        });
};



// PARTIE GET

exports.getAllJoueurs = (req, res) => {
    Joueur.find()
        .then((joueur) => {
            return res.status(200).json({ joueur });
        }).catch((error) => {
            return res.status(400).json({ error });
        });
};

exports.getOneJoueur = (req, res) => {
    const id = req.params.id;
    Joueur.findOne({ _id: id })
        .then((joueur) => {
            return res.status(200).json({ joueur });
        }).catch((error) => {
            return res.status(400).json({ error });
        });
};



// PARTIE DELETE

exports.deleteOneJoueur = (req, res) => {
    const id = req.params.id;
    Joueur.findByIdAndDelete(id)
        .then((joueur) => {
            return res.status(200).json({ joueur });
        }).catch((error) => {
            return res.status(400).json({ error });
        });
};