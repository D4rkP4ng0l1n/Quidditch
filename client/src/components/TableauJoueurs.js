import React from 'react';

const TableauJoueurs = () => {
    return (
        <article className='tableauJoueurs'>
            <header>
                <h1> Liste des joueurs </h1>
                <button className='ajouterJoueur'> Ajouter un joueur </button>
            </header>
            <main>
                <section>
                    <table>
                        <tbody>
                            <tr>
                                <th> Photo </th>
                                <th> Nom </th>
                                <th> Prenom </th>
                                <th> Numéro de licence </th>
                                <th> Age </th>
                                <th> Taille en cm </th>
                                <th> Poids en kg </th>
                                <th> Poste préféré </th>
                                <th> Statut </th>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </article>
    );
};

export default TableauJoueurs;