import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConfirmSupprFeuilleMatch = ({ changerComponentAffiche, idMatch }) => {
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

    const supprimerFeuilleDeMatch = () => {
        axios.delete('http://localhost:5000/participation/match/' + idMatch)
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
                <h1>Voulez vous vraiment supprimer cette feuille de match ?</h1>
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
                        {participations.map(participation => {
                            const joueurCourant = joueurs.find((joueur) => joueur._id === participation.idJoueur);

                            return (
                                <tr key={participation.id}>
                                    <td> {joueurCourant ? <img className='photo' src={require(`../../public/assets/images/joueurs/uploads/${joueurCourant.photo}`)} alt={joueurCourant.photo} /> : null} </td>
                                    <td> {joueurCourant ? joueurCourant.taille : null} </td>
                                    <td> {joueurCourant ? joueurCourant.poids : null} </td>
                                    <td> {joueurCourant ? joueurCourant.postePref : null} </td>
                                    <td> {participation.poste} </td>
                                    <td> {participation.commentaire} </td>
                                    <td> {participation.note} </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div>
                    <button onClick={supprimerFeuilleDeMatch}>Oui</button>
                    <button onClick={() => changerComponentAffiche('ListeDesMatchs')}>Non</button>
                </div>
            </div>
        </article>
    );
};

export default ConfirmSupprFeuilleMatch;