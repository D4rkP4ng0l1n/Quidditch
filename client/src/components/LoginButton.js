import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginButton = () => {
    return (
        <div className='headerNavigation'>
            <h1> Gestus 2000 </h1>
            <NavLink to="/login">
                    <button className='loginButton' onClick={localStorage.setItem('session', '')}> Se connecter </button>
            </NavLink>
        </div>
    );
};

export default LoginButton;