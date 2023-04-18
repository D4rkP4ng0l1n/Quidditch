import React from 'react';

const ListeDesMatchs = () => {
    return (
        <article className='centrerTableau'>
            <header>
                <h1>Liste des matchs</h1>
            </header>
            <div>
                <button>Ajouter un match</button>
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Heure</th>
                            <th>Equipe adverse</th>
                            <th>Lieu</th>
                            <th>Score (Domicile - Adversaire)</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    );
};

export default ListeDesMatchs;