import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuNavigationHeader = () => {
    return (
        <div>
            <NavLink to="/">
            </NavLink>
            <div className="navigation">
                <ul>
                    <NavLink to="/joueurs">
                        <li> Joueurs </li>
                    </NavLink>
                    <NavLink to="/matchs">
                        <li> Matchs </li>
                    </NavLink>
                    <NavLink to="/statistiques">
                        <li> Statistiques </li>
                    </NavLink>
                    <button onClick={() => window.location.href = '/login'}> Login </button>
                </ul>
            </div>
        </div>
    );
};

export default MenuNavigationHeader;