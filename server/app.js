const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const RouteJoueur = require('./router/routerJoueur');

const app = express();

mongoose.connect('mongodb+srv://jules:ratio@bdquidditch.vrmghbt.mongodb.net/quidditch', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connexion success');
}).catch((error) => {
    console.log(error);
});

app.use(bodyParser.json());
app.use('/api/joueur/', RouteJoueur);

module.exports = app;