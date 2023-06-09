import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TableauStatistiques = () => {

    const [joueurs, setJoueurs] = useState([]);
    const [nbMatchs, setNbMatchs] = useState([]);
    const [infosParticipations, setInfosParticipations] = useState({});


    useEffect(() => {
        // Fonction qui récupère le nombre de sélections pour un joueur donné
        const fetchInfosParticipations = async (joueur) => {
            const response = await axios.get('http://localhost:5000/participation/joueur/' + joueur._id);
            const participations = response.data.participation;

            let nbSelectionTitulaire = 0;
            let nbSelectionRemplacant = 0;

            let evaluations = 0;
            let nbEvaluations = 0;

            let nbMatchWin = 0;
            let nbMatchJoue = 0;

            const matchPromises = participations.map((participation) => {
                return axios.get('http://localhost:5000/match/' + participation.idMatch)
                    .then((response) => {
                        const data = response.data.match;
                        if (data.score > data.scoreAdverse) {
                            nbMatchWin++;
                        }
                        nbMatchJoue++;
                    });
            });

            await Promise.all(matchPromises);

            participations.forEach((participation) => {
                if (participation.poste === 'titulaire') {
                    nbSelectionTitulaire += 1;
                } else {
                    nbSelectionRemplacant += 1;
                }
                evaluations += participation.note;
                nbEvaluations++;
            });

            const moyEval = evaluations / nbEvaluations;

            return {
                nbSelectionTitulaire,
                nbSelectionRemplacant,
                moyEval,
                nbMatchWin,
                nbMatchJoue
            };
        };

        // Fonction pour récupérer les données de tous les joueurs en parallèle
        const fetchData = async () => {
            try {
                const [joueurResponse, matchResponse] = await Promise.all([
                    axios.get('http://localhost:5000/joueur/'),
                    axios.get('http://localhost:5000/match/'),
                ]);

                const joueurs = joueurResponse.data.joueur;
                const nbMatchs = matchResponse.data.match.length;

                // Parcours de tous les joueurs pour récupérer leur nombre de sélections
                const infosParticipationsPromises = joueurs.map((joueur) => fetchInfosParticipations(joueur));
                const infosParticipations = await Promise.all(infosParticipationsPromises);

                // Mise à jour des states
                setJoueurs(joueurs);
                setNbMatchs(nbMatchs);

                const newInfosParticipations = {};
                joueurs.forEach((joueur, index) => {
                    newInfosParticipations[joueur._id] = infosParticipations[index];
                });
                setInfosParticipations(newInfosParticipations);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
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
                        <th> Nombre total de sélection en tant que remplaçant </th>
                        <th> Moyenne des évaluations </th>
                        <th> Pourcentage de matchs gagnés </th>
                    </tr>
                </thead>
                <tbody>
                    {joueurs.map(joueur => (
                        <tr key={joueur._id}>
                            <td> {joueur.nom} {joueur.prenom} </td>
                            <td> {joueur.statut} </td>
                            <td> {joueur.postePref} </td>
                            <td> {infosParticipations[joueur._id]?.nbSelectionTitulaire || 0} </td>
                            <td> {infosParticipations[joueur._id]?.nbSelectionRemplacant || 0} </td>
                            <td> {infosParticipations[joueur._id]?.moyEval || '/'} </td>
                            <td>
                                {
                                    infosParticipations[joueur._id]?.nbMatchJoue !== 0 ?
                                        ((infosParticipations[joueur._id].nbMatchWin / infosParticipations[joueur._id].nbMatchJoue) * 100).toFixed(2) + " %"
                                        : "0 %"
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default TableauStatistiques;