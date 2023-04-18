import React from 'react';

const ModifFeuilleMatch = () => {
    return (
        <article>
            <header>
                <h1>Modification de la feuille de match</h1>
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
                                <th>Commentaire</th>
                                <th>Note</th>
                            </tr>
                        </tbody>
                    </table>
                    <input type="submit" value="Valider" />
		            <input type="button" value="Annuler" onclick=""/>
                </form>
            </div>
        </article>
    );
};

export default ModifFeuilleMatch;