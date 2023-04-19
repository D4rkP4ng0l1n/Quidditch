import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListeDesMatchs = () => {
    const [matchs, setMatchs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/match/')
            .then(response => {
                setMatchs(response.data.match);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <article className='centrerTableau'>
            <header>
                <h1>Liste des matchs</h1>
            </header>
            <div>
                <button>Ajouter un match</button>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Heure</th>
                            <th>Equipe adverse</th>
                            <th>Lieu</th>
                            <th>Score (Domicile - Adversaire)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {matchs.map(match => (
                            <tr key={match._id}>
                                <td> {match.dateEtHeure} </td>
                                <td> {match.nomEquipeAdverse} </td>
                                <td> {match.lieu} </td>
                                <td> {match.score} </td>
                                <td> {match.scoreAdverse} </td>
                                <td><a href=''>Modifier</a></td>
                                <td><a href=''>Supprimer</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </article>
    );
};

export default ListeDesMatchs;
