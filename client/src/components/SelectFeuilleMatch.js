import React from 'react';

const SelectFeuilleMatch = () => {
    return (
        <article>
            <header className='containerTitre'>
                <h1>Sélection des joueurs de la feuille de match</h1>
            </header>
            <div className='containerTabAndButtons'>
                <table>
                    <tbody>
                        <tr>
                            <th>Photo</th>
                            <th>Taille</th>
                            <th>Poids</th>
                            <th>Poste préféré</th>
                            <th>Titulaire ou remplaçant</th>
                            <th>Sélectionner</th>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <p>7 Joueurs Titulaires requis pour valider</p>
                    <button>Valider</button>
                    <button>Annuler</button>
                </div>
            </div>
        </article>
    );
};

export default SelectFeuilleMatch;