import React, { useState } from 'react';
import FormAjouterJoueur from './FormAjouterJoueur';
import CreateJoueurTableau from './CreateJoueurTableau';
import SupprimerJoueur from './SupprimerJoueur';

const ContentJoueur = () => {

    const [showForm, setShowForm] = useState(false);
    const [suppJoueur, setSuppJoueur] = useState(false);
    const [modifJoueur, setModifJoueur] = useState(false);

    const [joueur, setJoueur] = useState();


    const handleShowFormChange = (value) => {
        setShowForm(value);
    };

    const handleSuppJoueurChange = (value, joueur) => {
        setSuppJoueur(value);
        setJoueur(joueur);
    };

    const handleModifJoueurChange = (value, joueur) => {
        setModifJoueur(value);
        setJoueur(joueur);
    };

    return (
        <article className='centrerContent'>
            {!showForm && !suppJoueur && !modifJoueur && (
                <header className='ajouterJoueur'>
                    <h1> Liste des joueurs </h1>
                    <button onClick={() => { setShowForm(true); }}> Ajouter un joueur </button>
                </header>
            )}
            {!showForm && !suppJoueur && !modifJoueur && <CreateJoueurTableau handleSuppJoueurChange={handleSuppJoueurChange} handleModifJoueurChange={handleModifJoueurChange} />}
            {showForm && !suppJoueur && !modifJoueur && <FormAjouterJoueur handleShowFormChange={handleShowFormChange} />}
            {!showForm && suppJoueur && !modifJoueur && <SupprimerJoueur handleSuppJoueurChange={handleSuppJoueurChange} joueur={joueur} />}
            {!showForm && !suppJoueur && modifJoueur && <FormAjouterJoueur handleModifJoueurChange={handleModifJoueurChange} joueur={joueur} />}
        </article >
    );
};

export default ContentJoueur;