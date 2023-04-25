import React from 'react';
import MenuNavigationHeader from '../components/MenuNavigationHeader';
import AccueilMainContent from '../components/AccueilMainContent';

const AccueilConnecte = () => {
    if(localStorage.getItem('session') === '') {
        window.location.href = '/'
    }
    return (
        <div>
            <header>
                <MenuNavigationHeader />
            </header>
            <main>
                <AccueilMainContent />
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default AccueilConnecte;