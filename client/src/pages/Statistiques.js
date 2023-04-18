import React from 'react';
import MenuNavigationHeader from '../components/MenuNavigationHeader';
import StatistiquesGloables from '../components/StatistiquesGloables';
import TableauJoueurs from '../components/TableauJoueurs';

const Statistiques = () => {
    return (
        <div>
            <header>
                <MenuNavigationHeader />
            </header>
            <main>
                <StatistiquesGloables />
                <TableauJoueurs />
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default Statistiques;