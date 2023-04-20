import React, { useState } from 'react';
import axios from 'axios';

const FormAjouterJoueur = ({ handleShowFormChange }) => {

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [numLicence, setNumLicence] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [taille, setTaille] = useState('');
    const [poids, setPoids] = useState('');
    const [postePref, setPostePref] = useState('');
    const [statut, setStatut] = useState('');
    const [photo, setPhoto] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (nom && prenom && numLicence && dateNaissance && taille && poids && postePref !== '' && statut !== '') {
            const nouveauJoueur = {
                nom: nom,
                prenom: prenom,
                numLicence: numLicence,
                dateDeNaissance: '' + dateNaissance,
                taille: taille,
                poids: poids,
                postePref: postePref,
                statut: statut,
                photo: photoUrl
            }
            axios.post('http://localhost:5000/joueur', nouveauJoueur)
                .then((res) => {
                    const image = document.getElementById('image').src;
                    const data = { image };
                    fetch("http://localhost:5000/upload", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    })
                        .then((response) => {
                            console.log(response);
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                    console.log(res);
                    handleShowFormChange(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            console.log('Veuillez remplir tous les champs du formulaire.');
        }
    };

    return (
        <article>
            <header>
                <h1>Ajouter un joueur</h1>
            </header>
            <section>
                <form onSubmit={handleSubmit}>
                    Nom <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
                    Prenom <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                    Numero de licence <input type="text" value={numLicence} onChange={(e) => setNumLicence(e.target.value)} />
                    Date de naissance <input type="date" value={dateNaissance} onChange={(e) => setDateNaissance(e.target.value)} />
                    Taille en cm <input type="number" value={taille} onChange={(e) => setTaille(e.target.value)} />
                    Poids en kg <input type="number" value={poids} onChange={(e) => setPoids(e.target.value)} />
                    Poste prefere
                    <select value={postePref} onChange={(e) => setPostePref(e.target.value)}>
                        <option value=""> -- Choisir un poste -- </option>
                        <option value="Attrapeur"> Attrapeur </option>
                        <option value="Poursuiveur"> Poursuiveur </option>
                        <option value="Gardien"> Gardien </option>
                        <option value="Batteur"> Batteur </option>
                    </select>
                    Statut
                    <select value={statut} onChange={(e) => setStatut(e.target.value)}>
                        <option value=""> -- Choisir un statut -- </option>
                        <option value="Actif"> Actif </option>
                        <option value="Blesse"> Blesse </option>
                        <option value="Suspendu"> Suspendu </option>
                        <option value="Absent"> Absent </option>
                    </select>
                    Photo <input type="file" onChange={((e) => {
                        setPhoto(e.target.files[0].name);
                        setPhotoUrl(URL.createObjectURL(e.target.files[0]));
                    })} />
                    {photoUrl && <img id='image' className='photo' src={photoUrl} alt='Upploaded Image' />}
                    <input type="submit" value="Valider" />
                    <input type="button" value="Annuler" onClick={() => handleShowFormChange(false)} />
                </form>
            </section>
        </article>
    );
};

export default FormAjouterJoueur;