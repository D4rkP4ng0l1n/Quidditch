import React from 'react';
import MenuNavigationHeader from '../components/MenuNavigationHeader';
import ContentJoueur from '../components/ContentJoueur';

const AfficherJoueurs = () => {

    return (
        <div>
            <header>
                <MenuNavigationHeader />
            </header>
            <main>
                <ContentJoueur />
            </main>
        </div>
    );
};

export default AfficherJoueurs;