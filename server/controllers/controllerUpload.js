const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../client/public/assets/images/joueurs', 'uploads'),
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

exports.uploadImage = (req, res) => {

    try {
        // 'image' is the name of our file input field in the HTML form

        let upload = multer({ storage: storage }).single('image');

        upload(req, res, function (err) {
            // req.file contains information of uploaded file
            // req.body contains information of text fields
            console.log(req.file);
            console.log(req.body);
            if (!req.file) {
                return res.send('Please select an image to upload');
            }
            else if (err instanceof multer.MulterError) {
                return res.send(err);
            }
            else if (err) {
                return res.send(err);
            }

        });
    } catch (err) { console.log(err) }
}

exports.deleteImg = (req, res) => {
    const nom = req.params.nom;
    const filePath = '../../client/public/assets/images/joueurs/uploads/' + nom;

    fs.unlink(filePath, (err) => {
        if (err) {
            return res.status(400).json({ err });
        }

        return res.status(200).send('Le fichier a été supprimé');
    });
}