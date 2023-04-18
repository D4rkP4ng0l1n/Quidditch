const express = require('express');
const mongoose = require('mongoose');
const ModelMatch = require('./models/modelMatch');
const app = express()

app.get("/api", (req, res) => {
    res.json({ "ratios": ["ratio", "r a t i o", "rat six eau"] })
})

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://jules:ratio@bdquidditch.vrmghbt.mongodb.net/test');
        console.log("Connecté à la BD mongo")

        /* Test insertion match
        const result = await ModelMatch.insertMany([
            {
                dateEtHeure : new Date(),
                nomEquipeAdverse : "Fnatic",
                lieu : "Albi",
                score : 0,
                scoreAdverse : 0
            }
        ])
        console.log(result)
        */
    } catch(error) {
        console.error(error);
    }
}

connect();

app.listen(5000, () => console.log("Server started on port 5000"))