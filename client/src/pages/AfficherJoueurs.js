import React from 'react';
import MenuNavigationHeader from '../components/MenuNavigationHeader';
import TableauJoueurs from '../components/TableauJoueurs';
import SupprimerJoueur from '../components/SupprimerJoueur';
import CreateJoueurTableau from '../components/CreateJoueurTableau';

const AfficherJoueurs = () => {
    return (
        <div>
            <header>
                <MenuNavigationHeader />
            </header>
            <main>
                <TableauJoueurs />
                {/* <FormAjouterJoueur /> */}
                {/* <SupprimerJoueur /> */}
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default AfficherJoueurs;