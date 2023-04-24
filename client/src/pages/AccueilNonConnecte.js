import React from 'react';
import AccueilMainContent from '../components/AccueilMainContent';
import LoginButton from '../components/LoginButton';

const AccueilConnecte = () => {
    return (
        <div>
            <header>
                <LoginButton />
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