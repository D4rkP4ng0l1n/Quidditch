const mongoose = require('mongoose');

const MatchSchema = mongoose.Schema({
    dateEtHeure : Date,
    nomEquipeAdverse : String,
    lieu : String,
    score : Number,
    scoreAdverse : Number
});

module.exports = mongoose.model("Matchs", MatchSchema);