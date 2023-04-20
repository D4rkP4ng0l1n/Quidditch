exports.upploadImage = (req, res) => {

    const express = require("express");
    const fs = require("fs");

    // Récupérer l'image envoyée par le client
    const image = req.body.image;

    // Convertir l'image en format binaire
    const buffer = Buffer.from(image, "base64");

    // Sauvegarder l'image sur le serveur
    fs.writeFile("image.jpg", buffer, (err) => {
        if (err) {
            console.log(err);
            res.status(500).send("Erreur lors de la sauvegarde de l'image");
        } else {
            console.log("L'image a été sauvegardée avec succès");
            res.send("L'image a été sauvegardée avec succès");
        }
    });
}