import React from 'react';
import axios from 'axios';

const SupprimerJoueur = ({ handleSuppJoueurChange, joueur }) => {

    const supprimerJoueur = () => {
        const id = joueur.joueur._id.toString();
        const nomImg = joueur.joueur.photo;
        axios.delete('http://localhost:5000/joueur/' + id)
            .then(() => {
                axios.delete('http://localhost:5000/upload/' + nomImg)
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    }

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
        <div>
            <h1> Voulez-vous vraiment supprimer ce joueur ? </h1>
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
                        <tr key={joueur.joueur._id}>
                            <td> <img className='photo' src={require(`../../public/assets/images/joueurs/uploads/${joueur.joueur.photo}`)} alt={joueur.joueur.photo} /> </td>
                            <td> {joueur.joueur.nom} </td>
                            <td> {joueur.joueur.prenom} </td>
                            <td> {joueur.joueur.numLicence} </td>
                            <td> {calculateAge(joueur.joueur.dateDeNaissance)} </td>
                            <td> {joueur.joueur.taille} </td>
                            <td> {joueur.joueur.poids} </td>
                            <td> {joueur.joueur.postePref} </td>
                            <td> {joueur.joueur.statut} </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <button onClick={() => { supprimerJoueur(); handleSuppJoueurChange(false); }}> Oui </button>
            <button onClick={() => handleSuppJoueurChange(false)}> Non </button>
        </div>
    );
};

export default SupprimerJoueur;