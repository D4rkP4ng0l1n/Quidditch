import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConfirmSupprMatch = ({changerComponentAffiche, matchASuppr}) => {
    
    const [match, setMatch] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/match/' + matchASuppr)
            .then(response => {
                setMatch(response.data.match);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <article>
            <header className='containerTitre'>
                <h1>Voulez vous vraiment supprimer ce match ?</h1>
            </header>
            <div className='containerTabAndButtons'>
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Heure</th>
                            <th>Equipe adverse</th>
                            <th>Lieu</th>
                            <th>Score (Domicile - Adversaire)</th>
                        </tr>
                        {
                            <tr key={match._id}>
                                <td> {new Date(match.dateEtHeure).toDateString()} </td>
                                <td> {new Date(match.dateEtHeure).toTimeString().slice(0, 5)} </td>
                                <td> {match.nomEquipeAdverse} </td>
                                <td> {match.lieu} </td>
                                <td> {match.score} - {match.scoreAdverse} </td>
                            </tr>
                        }
                    </tbody>
                </table>
                <div>
                    <button>Oui</button>
                    <button onClick={() => changerComponentAffiche('ListeDesMatchs')}>Non</button>
                </div>
            </div>
        </article>
    );
};

export default ConfirmSupprMatch;