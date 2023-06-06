import {useState} from 'react';
import './Authorization.scss';
import {Link, Outlet} from "react-router-dom";

function Authorization(props) {
    let [activeTab, setActiveTab] = useState('login');

    return (
        <div className={'Authorization-component authorization'}>
            <div className="authorization__body">
                <div className="authorization__logo">
                    <img src="../img/my-avatar.jpg" alt="" className="authorization__logo_img"/>
                </div>
                <div className="authorization__window">
                    <ul className="authorization__tabs">
                        <li onClick={() => setActiveTab('login')}
                            className={'authorization-tabs__item' + ((activeTab === 'login') ? ' _active' : '')}
                        >
                            <Link to={'login'} className="authorization-tabs__link">Login</Link>
                        </li>
                        <li onClick={() => setActiveTab('reg')}
                            className={"authorization-tabs__item" + ((activeTab === 'reg') ? ' _active' : '')}
                        >
                            <Link to={'reg'} className="authorization-tabs__link">Registration</Link>
                        </li>
                    </ul>
                    <Outlet/>
                </div>
            </div>
            <div className="authorization__background">
                <img src="../img/background-form.jpg" alt="" className="authorization__background_img"/>
            </div>
        </div>
    );
}

export default Authorization;