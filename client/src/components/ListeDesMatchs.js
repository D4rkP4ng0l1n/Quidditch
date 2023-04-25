import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListeDesMatchs = ({ changerComponentAffiche }) => {
    const [matchs, setMatchs] = useState([]);
    const [participations, setParticipations] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/match/')
            .then(response => {
                setMatchs(response.data.match);
            })
            .catch(error => {
                console.log(error);
            });
    }, [matchs]);

    useEffect(() => {
        axios.get('http://localhost:5000/participation/')
            .then(response => {
                setParticipations(response.data.participation);
            })
            .catch(error => {
                console.log(error);
            });
    }, [participations]);

    return (
        <article className='centrerContent'>
            <header>
                <h1>Liste des matchs</h1>
            </header>
            <div>
                <button onClick={() => changerComponentAffiche('FormAjoutMatch')}>Ajouter un match</button>
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
                        {matchs.map(match => {
                            let feuilleExiste = false;
                            participations.forEach(participation => {
                                if(participation.idMatch === match._id) {
                                    feuilleExiste = true;
                                }
                            });

                            return (
                                <tr key={match._id}>
                                    <td> {new Date(match.dateEtHeure).toDateString()} </td>
                                    <td> {new Date(match.dateEtHeure).toTimeString().slice(0, 5)} </td>
                                    <td> {match.nomEquipeAdverse} </td>
                                    <td> {match.lieu} </td>
                                    <td> {match.score} - {match.scoreAdverse} </td>
                                    <td><a onClick={() => changerComponentAffiche('FormModifMatch', match._id)}>Modifier</a></td>
                                    <td><a onClick={() => changerComponentAffiche('ConfirmSupprMatch', match._id)}>Supprimer</a></td>
                                    {feuilleExiste ? (
                                        <>
                                            <td><a onClick={() => changerComponentAffiche('ModifFeuilleMatch', match._id)}>Modifier la feuille de match</a></td>
                                            <td><a onClick={() => changerComponentAffiche('ConfirmSupprFeuilleMatch', match._id)}>Supprimer la feuille de match</a></td>
                                        </>
                                    ) : (
                                        <td><a onClick={() => changerComponentAffiche('SelectFeuilleMatch', match._id)}>Feuille de match</a></td>
                                    )}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </article>
    );
};

export default ListeDesMatchs;
