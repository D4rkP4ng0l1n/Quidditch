import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateJoueurTableau = ({ handleSuppJoueurChange, handleModifJoueurChange }) => {
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

    function calculateAge(dateOfBirth) {
        const today = new Date();
        const birthDate = new Date(dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

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
                            <td> <img className='photo' src={'../../public/assets/images/joueurs/uploads' + joueur.photo} alt={joueur.photo} /> </td>
                            <td> {joueur.nom} </td>
                            <td> {joueur.prenom} </td>
                            <td> {joueur.numLicence} </td>
                            <td> {calculateAge(joueur.dateDeNaissance)} </td>
                            <td> {joueur.taille} </td>
                            <td> {joueur.poids} </td>
                            <td> {joueur.postePref} </td>
                            <td> {joueur.statut} </td>
                            <td> <a href="#" onClick={() => handleModifJoueurChange(true, { joueur })}> Modifier </a></td>
                            <td> <a href="#" onClick={() => handleSuppJoueurChange(true, { joueur })}> Supprimer </a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default CreateJoueurTableau;