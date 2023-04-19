import React from 'react';
import CreateJoueurTableau from './CreateJoueurTableau';

const TableauJoueurs = ({ joueur }) => {
    return (
        <article className='centrerTableau'>
            <header>
                <h1> Liste des joueurs </h1>
                <button className='ajouterJoueur'> Ajouter un joueur </button>
            </header>
            <CreateJoueurTableau />
        </article>
    );
};

export default TableauJoueurs;