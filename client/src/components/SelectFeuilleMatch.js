import React from 'react';

const SelectFeuilleMatch = () => {
    return (
        <article>
            <header>
                <h1>Sélection des joueurs de la feuille de match</h1>
            </header>
            <div>
                <form>
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
                    <p>7 Joueurs Titulaires requis pour valider</p>
                    <input type="submit" value="Valider" />
		            <input type="button" value="Annuler" onclick=""/>
                </form>
            </div>
        </article>
    );
};

export default SelectFeuilleMatch;