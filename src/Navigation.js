import React from 'react';

function Navigation(props) {
    return (
        <nav className={"navigation-component navigation"}>
            <ul className={"navigation__list"}>
                <li className="navigation__item">
                    <a href="./" className="navigation__link">Users</a>
                    <a href="./" className="navigation__link">Chat</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;