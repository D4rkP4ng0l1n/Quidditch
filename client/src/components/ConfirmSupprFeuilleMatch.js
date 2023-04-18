import React from 'react';

const ConfirmSupprFeuilleMatch = () => {
    return (
        <article>
            <header>
                <h1>Voulez vous vraiment supprimer cette feuille de match ?</h1>
            </header>
            <div>
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
                <form>
                    <input type="submit" value="Oui"/>
                    <input type="button" value="Non"/>
                </form>
            </div>
        </article>
    );
};

export default ConfirmSupprFeuilleMatch;