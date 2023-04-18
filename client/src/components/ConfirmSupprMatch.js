import React from 'react';

const ConfirmSupprMatch = () => {
    return (
        <article>
            <header>
                <h1>Voulez vous vraiment supprimer ce match ?</h1>
            </header>
            <div>
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
                <form>
                    <input type="submit" value="Oui"/>
                    <input type="button" value="Non"/>
                </form>
            </div>
        </article>
    );
};

export default ConfirmSupprMatch;