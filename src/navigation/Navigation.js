import React from 'react';
import './Navigation.scss';

function Navigation(props) {
    return (
        <nav className={"Navigation-component navigation"}>
            <ul className={"navigation__list"}>
                <li className="navigation__item">
                    <a href="../index" className="navigation__link">Users</a>
                </li>
                <li className="navigation__item">
                    <a href="../index" className="navigation__link">Chat</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;