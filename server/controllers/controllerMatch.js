const Match = require('../models/modelMatch');

// PARTIE POST 

exports.createMatch = (req, res) => {
    const match = new Match(req.body);
    match.save()
        .then((match) => {
            return res.status(201).json({ match });
        }).catch((error) => {
            return res.status(400).json({ error });
        });
}

// PARTIE GET

exports.getAllMatchs = (req, res) => {
    Match.find()
        .then((match) => {
            return res.status(200).json({ match });
        }).catch((error) => {
            return res.status(400).json({ error });
        });
};

exports.getOneMatch = (req, res) => {
    const id = req.params.id;
    Match.findOne({ _id: id })
        .then((match) => {
            return res.status(200).json({ match });
        }).catch((error) => {
            return res.status(400).json({ error });
        });
};

// PARTIE DELETE

exports.delOneMatch = (req, res) => {
    const id = req.params.id;
    Match.deleteOne({ _id: id })
        .then((match) => {
            return res.status(200).json({ match });
        }).catch((error) => {
            return res.status(400).json({ error });
        });
}

// PARTIE PUT

exports.updateOneMatch = (req, res) => {
    const id = req.params.id;
    const updates = req.body;
    Match.findOneAndUpdate({ _id: id }, updates)
        .then((match) => {
            if (!match) {
                return res.status(404).json({ error: 'Match not found' });
            }
            return res.status(200).json({ match });
        }).catch((error) => {
            return res.status(400).json({ error });
        });
};