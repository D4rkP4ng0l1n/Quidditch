const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const RouteJoueur = require('./router/routerJoueur');
const RouteUppload = require('./router/routerUppload.js');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://jules:ratio@bdquidditch.vrmghbt.mongodb.net/quidditch', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connexion success');
}).catch((error) => {
    console.log(error);
});

app.use(cors());

app.use(bodyParser.json());
app.use('/joueur', RouteJoueur);

app.use('/upload', RouteUppload)

module.exports = app;