import React from 'react';
import MenuNavigationHeader from '../components/MenuNavigationHeader';
import TableauJoueurs from '../components/TableauJoueurs';

const AfficherJoueurs = () => {
    return (
        <div>
            <header>
                <MenuNavigationHeader />
            </header>
            <main>
                <TableauJoueurs />
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default AfficherJoueurs;