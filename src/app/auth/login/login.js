import React, {useState} from 'react';
import './Login.scss'
import {NavLink, useNavigate} from "react-router-dom";

function Login(props) {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const navigate = useNavigate();

    function onSubmit(event) {
        event.preventDefault();

        let url = 'http://localhost:3001/users?email=' + email + '&password=' + password;
        fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res=>{
            return res.json();
        }).then(res=>{
            if (res.length === 0) {
                console.log("Not correct login or e-mail");
            } else {
                console.log("user", res[0]);
                localStorage.setItem('user', JSON.stringify(res));
                navigate('/chat');
            }
        }).catch(ex=>console.log(ex));

    }

    return (
        <form className={'Login-component login-form'} onSubmit={onSubmit}>
            <ul className="login-form__fields login-fields">
                <li className="login-fields__item">
                    <div className="login-fields__item_title">
                        <p>E-mail</p>
                    </div>
                    <input type="text"
                           className="login-fields__item_input"
                           placeholder={'E-mail'}
                           onChange={(event)=>setEmail(event.target.value)}
                    />
                </li>
                <li className="login-fields__item">
                    <div className="login-fields__item_title">
                        <p>Password</p>
                    </div>
                    <input type="password"
                           className="login-fields__item_input"
                           placeholder={'Password'}
                           onChange={(event)=>setPassword(event.target.value)}
                    />
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