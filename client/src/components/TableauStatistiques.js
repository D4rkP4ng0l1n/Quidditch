import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TableauStatistiques = () => {

    const [joueurs, setJoueurs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/joueur/')
            .then(response => {
                setJoueurs(response.data.joueur);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <section>
            <table>
                <thead>
                    <tr>
                        <th> Joueur </th>
                        <th> Statut </th>
                        <th> Poste préféré </th>
                        <th> Nombre total de sélection en tant que titulaire </th>
                        <th> Nombre total de sélection en tant que remplacant </th>
                        <th> Moyenne des evaluations </th>
                        <th> Pourcentage de matchs gagne </th>
                    </tr>
                </thead>
                <tbody>
                    {joueurs.map(joueur => (
                        <tr key={joueur._id}>
                            <td> {joueur.nom} {joueur.prenom} </td>
                            <td> {joueur.postePref} </td>
                            <td> {joueur.statut} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default TableauStatistiques;