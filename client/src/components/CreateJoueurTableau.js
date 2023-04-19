import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateJoueurTableau = () => {
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
                        <th> Photo </th>
                        <th> Nom </th>
                        <th> Prénom </th>
                        <th> Numéro de licence </th>
                        <th> Âge </th>
                        <th> Taille en cm </th>
                        <th> Poids en kg </th>
                        <th> Poste préféré </th>
                        <th> Statut </th>
                    </tr>
                </thead>
                <tbody>
                    {joueurs.map(joueur => (
                        <tr key={joueur._id}>
                            <td> {joueur.photo} </td>
                            <td> {joueur.nom} </td>
                            <td> {joueur.prenom} </td>
                            <td> {joueur.numLicence} </td>
                            <td> {joueur.age} </td>
                            <td> {joueur.taille} </td>
                            <td> {joueur.poids} </td>
                            <td> {joueur.postePref} </td>
                            <td> {joueur.statut} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default CreateJoueurTableau;