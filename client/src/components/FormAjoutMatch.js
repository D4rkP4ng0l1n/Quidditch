import React, { useState } from 'react';
import axios from 'axios';

const FormAjoutMatch = ({ changerComponentAffiche }) => {
  const [dateMatch, setDateMatch] = useState('');
  const [heureMatch, setHeure] = useState('');
  const [equipeAdverse, setEquipeAdverse] = useState('');
  const [lieu, setLieu] = useState('');
  const [erreur, setErreur] = useState('');

  const confirmerAjout = (e) => {
    e.preventDefault();

    if (!dateMatch || !heureMatch || !equipeAdverse || !lieu) {
        setErreur('Veuillez remplir tous les champs du formulaire.');
        return;
    }
    setErreur('');

    const date = new Date(dateMatch);
    const heure = new Date(`1970-01-01T${heureMatch}:00.000Z`);

    const annee = date.getFullYear();
    const mois = date.getMonth();
    const jour = date.getDate();

    const heures = heure.getHours();
    const minutes = heure.getMinutes();

    const dateHeure = new Date(annee, mois, jour, heures, minutes);

    const nouveauMatch = {
        dateEtHeure : dateHeure,
        nomEquipeAdverse : equipeAdverse,
        lieu : lieu,
        score : 0,
        scoreAdverse : 0
    }

    axios.post('http://localhost:5000/match/', nouveauMatch)
        .then(response => {
            console.log('Response:', response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });

    setDateMatch('');
    setHeure('');
    setEquipeAdverse('');
    setLieu('');

    changerComponentAffiche('ListeDesMatchs');
  };

  return (
    <article>
      <header className="containerTitre">
        <h1>Ajouter un match</h1>
      </header>
      <div className="containerTabAndButtons">
        <form>
          Date :{' '}
          <input
            type="date"
            name="dateMatch"
            value={dateMatch}
            onChange={(e) => setDateMatch(e.target.value)}
          />
          Heure :{' '}
          <input
            type="time"
            name="heure"
            value={heureMatch}
            onChange={(e) => setHeure(e.target.value)}
          />
          Equipe adverse :{' '}
          <input
            type="text"
            name="equipeAdverse"
            value={equipeAdverse}
            onChange={(e) => setEquipeAdverse(e.target.value)}
          />
          Lieu :{' '}
          <input
            type="text"
            name="lieu"
            value={lieu}
            onChange={(e) => setLieu(e.target.value)}
          />
        </form>
        <div>
            <button onClick={confirmerAjout}>Valider</button>
            <button onClick={() => changerComponentAffiche('ListeDesMatchs')}>Annuler</button>
            <p>{erreur}</p>
        </div>
      </div>
    </article>
  );
};

export default FormAjoutMatch;
