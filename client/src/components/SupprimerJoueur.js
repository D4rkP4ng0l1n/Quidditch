import React from 'react';
import TableauJoueurs from './TableauJoueurs';

const SupprimerJoueur = () => {
    return (
        <div>
            <h1> Voulez-vous vraiment supprimer ce joueur ? </h1>
            {/* Mettre le tableau avec le joueur correspondant */}
            <button> Oui </button>
            <button> Non </button>
        </div>
    );
};

export default SupprimerJoueur;