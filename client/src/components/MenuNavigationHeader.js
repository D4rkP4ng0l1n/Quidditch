import React from 'react';
import { NavLink } from 'react-router-dom';


const MenuNavigationHeader = () => {

    return (
        <div>
            <div className='headerNavigation'>
                <h1> Gestus 2000 </h1>
                <NavLink to="/">
                    <button className='loginButton' onClick={localStorage.setItem('session', '')}> Se deconnecter </button>
                </NavLink>
            </div>
            <div className="navigation">
                <ul>
                    <NavLink to="/home">
                        <li> Accueil </li>
                    </NavLink>
                    <NavLink to="/joueurs">
                        <li> Joueurs </li>
                    </NavLink>
                    <NavLink to="/matchs">
                        <li> Matchs </li>
                    </NavLink>
                    <NavLink to="/statistiques">
                        <li> Statistiques </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default MenuNavigationHeader;