import React, { useState } from 'react';

const FormLogin = () => {
    const utilisateurs = [{
        login: "Shrek",
        mdp: "ratio"
    }];
    const [identifiant, setIdentifiant] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const [messageErreur, setMessageErreur] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const utilisateurTrouve = utilisateurs.find(utilisateur => utilisateur.login === identifiant && utilisateur.mdp === motDePasse);
        if (utilisateurTrouve) {
            setMessageErreur('');
            localStorage.setItem("session", "connecte");
            window.location.href = '/home';
        } else {
            setMessageErreur('Identifiant ou mot de passe incorrect.');
        }
    }

    return (
        <form className='authentification' onSubmit={handleSubmit}>
            Identifiant <input type="text" className='formInput' value={identifiant} onChange={(e) => setIdentifiant(e.target.value)} />
            Mot de passe <input type="password" className='formInput' value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)} />
            <input type="submit" value="Login" />
            <input type="button" value="Retour" onClick={() => window.location.href = '/'} />
            {messageErreur && <p>{messageErreur}</p>}
        </form>
    );
};

export default FormLogin;
