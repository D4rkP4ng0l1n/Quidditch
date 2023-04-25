import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ModifFeuilleMatch = ({ changerComponentAffiche, idMatch }) => {
    const [participations, setParticipations] = useState([]);
    const [joueurs, setJoueurs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/participation/match/' + idMatch)
            .then(response => {
                setParticipations(response.data.participation);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/joueur/')
            .then(response => {
                setJoueurs(response.data.joueur);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleChange = (index, e) => {
        let newValue = e.target.value;
        if (e.target.value === '') {
            newValue = 0;
        }
        const updatedParticipations = [...participations];
        updatedParticipations[index].note = Number(newValue);
        setParticipations(updatedParticipations);
        console.log(participations[index].note);
    };

    const handleChangeCommentaire = (index, e) => {
        let newValue = e.target.value;
        const updatedParticipations = [...participations];
        updatedParticipations[index].commentaire = newValue;
        setParticipations(updatedParticipations);
        console.log(participations[index].commentaire);
    };

    const modificationPage = () => {
        const formattedParticipations = participations.map(participation => {
            return {
                _id: participation._id,
                idJoueur: participation.idJoueur,
                idMatch: participation.idMatch,
                poste: participation.poste,
                note: participation.note,
                commentaire: participation.commentaire,
                __v: participation.__v
            };
        });

        axios.put('http://localhost:5000/participation/match/' + idMatch, { participation: formattedParticipations })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });

        changerComponentAffiche('ListeDesMatchs');
    };

    return (
        <article>
            <header className='containerTitre'>
                <h1>Modification de la feuille de match</h1>
            </header>
            <div className='containerTabAndButtons'>
                <table>
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Taille</th>
                            <th>Poids</th>
                            <th>Poste préféré</th>
                            <th>Titulaire ou remplaçant</th>
                            <th>Commentaire</th>
                            <th>Note</th>
                        </tr>
                    </thead>
                    <tbody>
            {participations.map((participation, index) => {
                const joueurCourant = joueurs.find((joueur) => joueur._id === participation.idJoueur);
                const valeur = participation.note;

                return (
                    <tr key={participation.id}>
                        <td> {joueurCourant ? <img className='photo' src={require(`../../public/assets/images/joueurs/uploads/${joueurCourant.photo}`)} alt={joueurCourant.photo} /> : null} </td>
                        <td> {joueurCourant ? joueurCourant.taille : null} </td>
                        <td> {joueurCourant ? joueurCourant.poids : null} </td>
                        <td> {joueurCourant ? joueurCourant.postePref : null} </td>
                        <td> {participation.poste} </td>
                        <td> <textarea onChange={(e) => handleChangeCommentaire(index, e)} value={participation.commentaire}></textarea> </td>
                        <td> <input type='number' min='0' max='5' value={valeur} onChange={(e) => handleChange(index, e)}></input> </td>
                    </tr>
                )
            })}
        </tbody>

                </table>
                <div>
                    <button onClick={modificationPage}>Valider</button>
                    <button onClick={() => changerComponentAffiche('ListeDesMatchs')}>Annuler</button>
                </div>
            </div>
        </article>
    );
};

export default ModifFeuilleMatch;