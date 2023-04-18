import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccueilConnecte from './pages/AccueilConnecte';
import AfficherJoueurs from './pages/AfficherJoueurs';
import Statistiques from './pages/Statistiques';
import AfficherMatchs from './pages/AfficherMatchs';
import PageConnexion from './pages/PageConnexion';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AccueilConnecte />} />
        <Route path='/joueurs' element={<AfficherJoueurs />} />
        <Route path='/matchs' element={<AfficherMatchs />} />
        <Route path='/statistiques' element={<Statistiques />} />
        <Route path='/login' element={<PageConnexion />} />
        <Route path='*' element={<AccueilConnecte />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;