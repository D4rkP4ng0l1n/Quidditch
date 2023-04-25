import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SelectFeuilleMatch = ({ changerComponentAffiche, idMatch }) => {

  const [joueurs, setJoueurs] = useState([]);
  const [idJoueursChecked, setIdJoueursChecked] = useState([]);
  const [idJoueursTitulaires, setIdJoueursTitulaires] = useState([]);
  const [erreur, setErreur] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/joueur/')
      .then(response => {
        setJoueurs(response.data.joueur);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setIdJoueursTitulaires(joueurs.map(joueur => joueur._id));
  }, [joueurs]);

  const handleCheck = (e, idJoueur) => {
    if (e.target.checked) {
      setIdJoueursChecked(idJoueursChecked.concat(idJoueur));
    } else {
      setIdJoueursChecked(idJoueursChecked.filter(id => id !== idJoueur));
    }
  };

  const handleTitulaire = (e, idJoueur) => {
    if (e.target.value === 'remplacant') {
      setIdJoueursTitulaires(idJoueursTitulaires.filter(id => id !== idJoueur));
    } else if (e.target.value === 'titulaire') {
      setIdJoueursTitulaires(idJoueursTitulaires.concat(idJoueur));
    }
  };

  const checkNbTitulaire = () => {
    let nbTitulaires = 0;
    for (let idJoueurChecked of idJoueursChecked) {
      if (idJoueursTitulaires.includes(idJoueurChecked)) {
        nbTitulaires++;
      }
    }
    return nbTitulaires !== 7;
  };

  const creerListeJoueursAAjouter = () => {
    let nouveauxJoueurs = [];
    for (let idJoueurChecked of idJoueursChecked) {
      let etatJoueur = 'remplacant';
      if (idJoueursTitulaires.includes(idJoueurChecked)) {
        etatJoueur = 'titulaire';
      }
      const joueur = {
        idJoueur: idJoueurChecked,
        poste: etatJoueur
      };
      nouveauxJoueurs.push(joueur);
    }
    return Promise.resolve(nouveauxJoueurs);
  };

  const creerFeuilleDeMatch = async (e) => {
    e.preventDefault();

    if (checkNbTitulaire()) {
      setErreur('Veuillez sélectionner 7 joueurs titulaires');
      return;
    }
    setErreur('');

    const joueursAAjouter = await creerListeJoueursAAjouter();

    axios
      .post('http://localhost:5000/participation/' + idMatch, joueursAAjouter)
      .then((response) => {
        console.log('Response:', response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    setIdJoueursChecked('');
    setIdJoueursTitulaires('');
    setJoueurs('');

    changerComponentAffiche('ListeDesMatchs');
  };




  return (
    <article>
      <header className='containerTitre'>
        <h1>Sélection des joueurs de la feuille de match</h1>
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
              <th>Sélectionner</th>
            </tr>
          </thead>
          <tbody>
            {joueurs.map(joueur => (
              <tr key={joueur._id}>
                <td> <img className='photo' src={require(`../../public/assets/images/joueurs/uploads/${joueur.photo}`)} alt={joueur.photo} /> </td>
                <td> {joueur.taille} </td>
                <td> {joueur.poids} </td>
                <td> {joueur.postePref} </td>
                <td>
                  <select onChange={(e) => handleTitulaire(e, joueur._id)}>
                    <option value='titulaire'>Titulaire</option>
                    <option value='remplacant'>Remplaçant</option>
                  </select>
                </td>
                <td><input type='checkbox' onChange={(e) => handleCheck(e, joueur._id)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <p>7 Joueurs Titulaires requis pour valider</p>
          <button onClick={creerFeuilleDeMatch}>Valider</button>
          <button onClick={() => changerComponentAffiche('ListeDesMatchs')}>Annuler</button>
          <p>{erreur}</p>
        </div>
      </div>
    </article>
  );
};

export default SelectFeuilleMatch;
