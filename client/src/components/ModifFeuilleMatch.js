import React from 'react';

const ModifFeuilleMatch = () => {
    return (
        <article>
            <header className='containerTitre'>
                <h1>Modification de la feuille de match</h1>
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
                            <th>Commentaire</th>
                            <th>Note</th>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button>Valider</button>
                    <button>Annuler</button>
                </div>
            </div>
        </article>
    );
};

export default ModifFeuilleMatch;