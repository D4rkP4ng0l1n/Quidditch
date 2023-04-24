import React from 'react';

const FormLogin = () => {
    return (
        <form className='authentification'>
            Identifiant <input type="text" className='formInput' />
            Mot de passe <input type="password" className='formInput' />
            <input type="submit" value="Login" />
            <input type="button" value="Retour" />
        </form>
    );
};

export default FormLogin;