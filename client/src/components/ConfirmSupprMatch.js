import React from 'react';

const ConfirmSupprMatch = () => {
    return (
        <article>
            <header className='containerTitre'>
                <h1>Voulez vous vraiment supprimer ce match ?</h1>
            </header>
            <div className='containerTabAndButtons'>
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
                <div>
                    <button>Oui</button>
                    <button>Non</button>
                </div>
            </div>
        </article>
    );
};

export default ConfirmSupprMatch;