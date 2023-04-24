import React, { useState, useEffect } from 'react';
import axios from 'axios';


const FormAjouterJoueur = ({ handleShowFormChange, handleModifJoueurChange, joueur }) => {

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [numLicence, setNumLicence] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [taille, setTaille] = useState('');
    const [poids, setPoids] = useState('');
    const [postePref, setPostePref] = useState('');
    const [statut, setStatut] = useState('');

    const [imageInfo, setImageInfo] = useState({
        file: [],
        fileName: null,
        filepreview: null
    });

    const handleInputChange = (event) => {
        setImageInfo({
            ...imageInfo,
            file: event.target.files[0],
            fileName: event.target.files[0].name,
            filepreview: URL.createObjectURL(event.target.files[0])
        });
    }

    useEffect(() => {
        if (joueur) {
            setNom(joueur.joueur.nom);
            setPrenom(joueur.joueur.prenom);
            setNumLicence(joueur.joueur.numLicence);
            setDateNaissance(joueur.joueur.dateDeNaissance);
            setTaille(joueur.joueur.taille);
            setPoids(joueur.joueur.poids);
            setPostePref(joueur.joueur.postePref);
            setStatut(joueur.joueur.statut);
            setImageInfo({
                ...imageInfo,
                fileName: joueur.joueur.photo,
                filepreview: '../../public/assets/images/joueurs/' + joueur.joueur.photo,
            })
        }
    }, [joueur]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nom && prenom && numLicence && dateNaissance && taille && poids && postePref !== '' && statut !== '') {

            console.log("Nom: ", nom);
            console.log("Prenom: ", prenom);
            console.log("Numero de licence: ", numLicence);
            console.log("Date de naissance: ", dateNaissance);
            console.log("Taille: ", taille);
            console.log("Poids: ", poids);
            console.log("Poste prefere: ", postePref);
            console.log("Statut: ", statut);
            console.log("Photo: ", imageInfo.fileName);

            const formdata = new FormData();
            formdata.append('image', imageInfo.file);

            axios.post("http://localhost:5000/upload", formdata, {
                header: { "Content-Type": "multipart/form-data" }
            })

            const nouveauJoueur = {
                nom: nom,
                prenom: prenom,
                numLicence: numLicence,
                dateDeNaissance: '' + dateNaissance,
                taille: taille,
                poids: poids,
                postePref: postePref,
                statut: statut,
                photo: '' + imageInfo.fileName
            }

            if (!handleModifJoueurChange) {
                axios.post('http://localhost:5000/joueur', nouveauJoueur)
                    .then((res) => { console.log(res) })
                    .catch((error) => { console.log(error) });
                handleShowFormChange(false);
            } else {
                const id = joueur.joueur._id.toString();
                axios.put('http://localhost:5000/joueur/' + id, nouveauJoueur)
                    .then((res) => { console.log(res) })
                    .catch((error) => { console.log(error) });
                handleModifJoueurChange(false);
            }
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
                    Photo <input type="file" onChange={handleInputChange} />
                    {
                        imageInfo.filepreview !== null ?
                            <img className='photo' src={imageInfo.filepreview} alt='UploadImage' />
                            : null
                    }
                    <input type="submit" value="Valider" />
                    <input type="button" value="Annuler" onClick={() => {
                        if (!handleModifJoueurChange) {
                            handleShowFormChange(false);
                        } else {
                            handleModifJoueurChange(false);
                        }
                    }} />
                </form>
            </section>
        </article>
    );
};

export default FormAjouterJoueur;