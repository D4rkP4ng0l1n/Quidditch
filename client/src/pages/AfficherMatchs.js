import React from 'react';
import MenuNavigationHeader from '../components/MenuNavigationHeader';
import ListeDesMatchs from '../components/ListeDesMatchs'
import FormAjoutMatch from '../components/FormAjoutMatch';
import FormModifMatch from '../components/FormModifMatch';
import ConfirmSupprMatch from '../components/ConfirmSupprMatch';
import SelectFeuilleMatch from '../components/SelectFeuilleMatch';
import ModifFeuilleMatch from '../components/ModifFeuilleMatch';
import ConfirmSupprFeuilleMatch from '../components/ConfirmSupprFeuilleMatch';

const AfficherMatchs = () => {
    return (
        <div>
            <header>
                <MenuNavigationHeader />
            </header>
            <main>
                {/* <ListeDesMatchs /> */}
                <FormAjoutMatch />
                {/* <FormModifMatch /> */}
                {/* <ConfirmSupprMatch /> */}
                {/* <SelectFeuilleMatch /> */}
                {/* <ModifFeuilleMatch /> */}
                {/* <ConfirmSupprFeuilleMatch /> */}
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default AfficherMatchs;