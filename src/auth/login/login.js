import React from 'react';
import './Login.scss'
import {NavLink} from "react-router-dom";

function Login(props) {
    return (
        <form className={'Login-component login-form'}>
            <ul className="login-form__fields login-fields">
                <li className="login-fields__item">
                    <div className="login-fields__item_title">
                        <p>E-mail</p>
                    </div>
                    <input type="text" className="login-fields__item_input" placeholder={'E-mail'}/>
                </li>
                <li className="login-fields__item">
                    <div className="login-fields__item_title">
                        <p>Password</p>
                    </div>
                    <input type="password" className="login-fields__item_input" placeholder={'Password'}/>
                </li>
            </ul>
            <div className="login-form__button">
                <button className="login-form_btn">Sign in</button>
            </div>
        </form>
)
    ;
}

export default Login;