import React from 'react';
import { NavLink } from 'react-router-dom';


const MenuNavigationHeader = () => {
    return (
        <div>
            <div className='headerNavigation'>
                <h1> Gestus 2000 </h1>
                <button className='loginButton' onClick={() => window.location.href = '/login'}> Login </button>
            </div>
            <div className="navigation">
                <ul>
                    <NavLink to="/">
                        <li> Acueil </li>
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