import React from 'react';

const ConfirmSupprFeuilleMatch = () => {
    return (
        <article>
            <header className='containerTitre'>
                <h1>Voulez vous vraiment supprimer cette feuille de match ?</h1>
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
                    <button>Oui</button>
                    <button>Non</button>
                </div>
            </div>
        </article>
    );
};

export default ConfirmSupprFeuilleMatch;