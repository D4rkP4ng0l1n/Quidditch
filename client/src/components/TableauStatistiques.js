import React from 'react';

const TableauStatistiques = () => {
    return (
        <section>
            <table>
                <tbody>
                    <tr>
                        <th> Joueur </th>
                        <th> Statut </th>
                        <th> Poste préféré </th>
                        <th> Nombre total de sélection en tant que titulaire </th>
                        <th> Nombre total de sélection en tant que remplacant </th>
                        <th> Moyenne des evaluations </th>
                        <th> Pourcentage de matchs gagne </th>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default TableauStatistiques;