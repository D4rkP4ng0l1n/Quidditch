import React from 'react';
import MenuNavigationHeader from '../components/MenuNavigationHeader';
import StatistiquesGloables from '../components/StatistiquesGloables';
import TableauStatistiques from '../components/TableauStatistiques';

const Statistiques = () => {
    if(localStorage.getItem('session') === null) {
        window.location.href = '/'
    }
    return (
        <div>
            <header>
                <MenuNavigationHeader />
            </header>
            <main>
                <StatistiquesGloables />
                <TableauStatistiques />
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default Statistiques;