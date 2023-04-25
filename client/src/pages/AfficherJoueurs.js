import React from 'react';
import MenuNavigationHeader from '../components/MenuNavigationHeader';
import ContentJoueur from '../components/ContentJoueur';

const AfficherJoueurs = () => {
    if(localStorage.getItem('session') === '') {
        window.location.href = '/'
    }
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