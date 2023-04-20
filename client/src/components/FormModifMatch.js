import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormModifMatch = ({ changerComponentAffiche, matchAModif }) => {
  const [dateMatch, setDateMatch] = useState('');
  const [heureMatch, setHeure] = useState('');
  const [equipeAdverse, setEquipeAdverse] = useState('');
  const [lieu, setLieu] = useState('');
  const [score, setScore] = useState('');
  const [scoreAdverse, setScoreAdverse] = useState('');
  const [erreur, setErreur] = useState('');

  const modifierMatch = (e) => {
    e.preventDefault();

    if (!dateMatch || !heureMatch || !equipeAdverse || !lieu) {
      setErreur('Veuillez remplir tous les champs du formulaire.');
      return;
    }
    setErreur('');

    const annee = new Date(dateMatch).getFullYear();
    const mois = new Date(dateMatch).getMonth();
    const jour = new Date(dateMatch).getDate();

    const heures = heureMatch.split(':')[0];
    const minutes = heureMatch.split(':')[1];

    const dateHeure = new Date(annee, mois, jour, heures, minutes);

    const nouveauMatch = {
      dateEtHeure: dateHeure,
      nomEquipeAdverse: equipeAdverse,
      lieu: lieu,
      score: score,
      scoreAdverse: scoreAdverse,
    };

    axios
      .put('http://localhost:5000/match/' + matchAModif, nouveauMatch)
      .then((response) => {
        console.log('Response:', response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    setDateMatch('');
    setHeure('');
    setEquipeAdverse('');
    setLieu('');
    setScore('');
    setScoreAdverse('');

    changerComponentAffiche('ListeDesMatchs');
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/match/' + matchAModif)
      .then((response) => {
        setDateMatch(new Date(response.data.match.dateEtHeure).toISOString().slice(0, 10));
        setHeure(new Date(response.data.match.dateEtHeure).toLocaleTimeString().slice(0, 5));
        setEquipeAdverse(response.data.match.nomEquipeAdverse);
        setScore(response.data.match.score);
        setScoreAdverse(response.data.match.scoreAdverse);
        setLieu(response.data.match.lieu);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <article>
      <header className='containerTitre'>
        <h1>Modifier un match</h1>
      </header>
      <div className='containerTabAndButtons'>
        <form>
          Date :
          <input type='date' name='dateMatch' value={dateMatch} onChange={(e) => setDateMatch(e.target.value)} />
          Heure :
          <input type='time' name='heure' value={heureMatch} onChange={(e) => setHeure(e.target.value)} />
          Equipe adverse :
          <input
            type='text'
            name='equipeAdverse'
            value={equipeAdverse}
            onChange={(e) => setEquipeAdverse(e.target.value)}
          />
          Lieu :
          <input type='text' name='lieu' value={lieu} onChange={(e) => setLieu(e.target.value)} />
          Score de l'équipe <input type='number' name='score' value={score} onChange={(e) => setScore(e.target.value)}/>
          Score de l'équipe adverse <input type='number' name='scoreAdverse' value={scoreAdverse} onChange={(e) => setScoreAdverse(e.target.value)}/>
        </form>
        <div>
          <button onClick={modifierMatch}>Valider</button>
          <button onClick={() => changerComponentAffiche('ListeDesMatchs')}>Annuler</button>
          <p>{erreur}</p>
        </div>
      </div>
    </article>
  );
};

export default FormModifMatch;
