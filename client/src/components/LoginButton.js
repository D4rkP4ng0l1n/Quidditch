import React from 'react';

const LoginButton = () => {
    return (
        <div className='headerNavigation'>
            <h1> Gestus 2000 </h1>
            <button className='loginButton' onClick={() => window.location.href = '/login'}> Se connecter </button>
        </div>
    );
};

export default LoginButton;