const mongoose = require('mongoose');

const MatchSchema = mongoose.Schema({
    dateEtHeure : Date,
    nomEquipeAdverse : String,
    lieu : String,
    score : Number,
    scoreAdverse : Number
});

const model = mongoose.model("Matchs", MatchSchema);

module.exports = model;