const mongoose = require('mongoose');

const joueur = mongoose.Schema({
    nom: String,
    prenom: String,
    numLicence: Number,
    age: Number,
    taille: Number,
    poids: Number,
    postePref: String,
    statut: String,
    photo: String
});

module.exports = mongoose.model('Joueur', joueur);