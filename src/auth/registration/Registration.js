import React from 'react';
import './Registration.scss';
import {NavLink} from "react-router-dom";

function Registration(props) {
    return (
        <form className={'Registration-component registration-form'}>
            <ul className="registration-form__fields registration-fields">
                <li className="registration-fields__item registration-fields__fullName">
                    <div className="registration-fields__fullName_item">
                        <div className="registration-fields__item_title">
                            <p>First name</p>
                        </div>
                        <input type="text" className="registration-fields__item_input" placeholder={'First name'}/>
                    </div>
                    <div className="registration-fields__fullName_item">
                        <div className="registration-fields__item_title">
                            <p>Last name</p>
                        </div>
                        <input type="text" className="registration-fields__item_input" placeholder={'last name'}/>
                    </div>
                </li>
                <li className="registration-fields__item">
                    <div className="registration-fields__item_title">
                        <p>E-mail</p>
                    </div>
                    <input type="text" className="registration-fields__item_input" placeholder={'E-mail'}/>
                </li>
                <li className="registration-fields__item">
                    <div className="registration-fields__item_title">
                        <p>Password</p>
                    </div>
                    <input type="password" className="registration-fields__item_input" placeholder={'Password'}/>
                </li>
            </ul>
            <div className="registration-form__button">
                <button className="registration-form_btn">Registration</button>
            </div>
        </form>
        /*<form className={'Registration-component registration-form'}>
            <ul className="registration-form__header registration-tabs">
                <li className="registration-tabs__item _active">
                    <NavLink to={'../login'} className="registration-tabs__link">Login</NavLink>
                </li>
                <li className="registration-tabs__item ">
                    <NavLink to={'../reg'} className="registration-tabs__link">Registration</NavLink>
                </li>
            </ul>*/
        /*</form>*/
    );
}

export default Registration;