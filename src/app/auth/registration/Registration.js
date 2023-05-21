import React, {useState} from 'react';
import './Registration.scss';
import {NavLink, useNavigate} from "react-router-dom";

function Registration(props) {
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const navigate = useNavigate();

    function onSubmit(event) {
        event.preventDefault();
        let newUser = {
            name: firstName,
            lastName: lastName,
            email: email,
            password: password,
            photo: './img/stock.jpg',
            chats: []
        }

        let url = 'http://localhost:3001/users';
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then(res=>{
            localStorage.setItem('user', JSON.stringify(newUser));
            navigate('/chat');
        }).catch(ex=>console.log(ex));

    }

    return (
        <form
            className={'Registration-component registration-form'}
            onSubmit={onSubmit}
        >
            <ul className="registration-form__fields registration-fields">
                <li className="registration-fields__item registration-fields__fullName">
                    <div className="registration-fields__fullName_item">
                        <div className="registration-fields__item_title">
                            <p>First name</p>
                        </div>
                        <input
                            type="text"
                            className="registration-fields__item_input"
                            placeholder={'First name'}
                            onChange={(event)=>setFirstName(event.target.value)}
                        />
                    </div>
                    <div className="registration-fields__fullName_item">
                        <div className="registration-fields__item_title">
                            <p>Last name</p>
                        </div>
                        <input
                            type="text"
                            className="registration-fields__item_input"
                            placeholder={'last name'}
                            onChange={(event)=>setLastName(event.target.value)}
                        />
                    </div>
                </li>
                <li className="registration-fields__item">
                    <div className="registration-fields__item_title">
                        <p>E-mail</p>
                    </div>
                    <input
                        type="text"
                        className="registration-fields__item_input"
                        placeholder={'E-mail'}
                        onChange={(event)=>setEmail(event.target.value)}
                    />
                </li>
                <li className="registration-fields__item">
                    <div className="registration-fields__item_title">
                        <p>Password</p>
                    </div>
                    <input
                        type="password"
                        className="registration-fields__item_input"
                        placeholder={'Password'}
                        onChange={(event)=>setPassword(event.target.value)}
                    />
                </li>
            </ul>
            <div className="registration-form__button">
                <button className="registration-form_btn">Registration</button>
            </div>
        </form>
    );
}

export default Registration;