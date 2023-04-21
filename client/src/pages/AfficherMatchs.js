import React, { useState } from 'react';
import MenuNavigationHeader from '../components/MenuNavigationHeader';
import ListeDesMatchs from '../components/ListeDesMatchs'
import FormAjoutMatch from '../components/FormAjoutMatch';
import FormModifMatch from '../components/FormModifMatch';
import ConfirmSupprMatch from '../components/ConfirmSupprMatch';
import SelectFeuilleMatch from '../components/SelectFeuilleMatch';
import ModifFeuilleMatch from '../components/ModifFeuilleMatch';
import ConfirmSupprFeuilleMatch from '../components/ConfirmSupprFeuilleMatch';

const AfficherMatchs = () => {
    const [componentAffiche, setComponentAffiche] = useState('ListeDesMatchs');
    const [idMatch, setIdMatch] = useState('');

    const changerComponentAffiche = (component, id = "") => {
        setComponentAffiche(component);
        setIdMatch(id);
    };

    return (
        <div>
            <header>
                <MenuNavigationHeader />
            </header>
            <main>
                {componentAffiche === 'ListeDesMatchs' && <ListeDesMatchs changerComponentAffiche={changerComponentAffiche} />}
                {componentAffiche === 'FormAjoutMatch' && <FormAjoutMatch changerComponentAffiche={changerComponentAffiche} />}
                {componentAffiche === 'FormModifMatch' && <FormModifMatch changerComponentAffiche={changerComponentAffiche} matchAModif={idMatch} />}
                {componentAffiche === 'ConfirmSupprMatch' && <ConfirmSupprMatch changerComponentAffiche={changerComponentAffiche} matchASuppr={idMatch} />}
                {componentAffiche === 'SelectFeuilleMatch' && <SelectFeuilleMatch />}
                {componentAffiche === 'ModifFeuilleMatch' && <ModifFeuilleMatch />}
                {componentAffiche === 'ConfirmSupprFeuilleMatch' && <ConfirmSupprFeuilleMatch />}
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default AfficherMatchs;
