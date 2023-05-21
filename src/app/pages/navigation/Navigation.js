import React from 'react';
import './Navigation.scss';
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <nav className={"Navigation-component navigation"}>
            <ul className={"navigation__list"}>
                <li className="navigation__item">
                    <Link to="/users" className="navigation__link">Users</Link>
                </li>
                <li className="navigation__item">
                    <Link to="chat" className="navigation__link">Chat</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;