const mongoose = require('mongoose');

const ParticipationSchema = mongoose.Schema({
    idJoueur : String,
    idMatch : String,
    poste : String,
    note : Number,
    commentaire : String
});

module.exports = mongoose.model("Participations", ParticipationSchema);