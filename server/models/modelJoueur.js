const mongoose = require('mongoose');

const joueur = mongoose.Schema({
    nom: String,
    prenom: String,
    numLicence: Number,
    dateDeNaissance: String,
    taille: Number,
    poids: Number,
    postePref: String,
    statut: String,
    photo: String
});

module.exports = mongoose.model('Joueur', joueur);