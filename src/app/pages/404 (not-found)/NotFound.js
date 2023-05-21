import React from 'react';
import './NotFound.scss';
import {Link, useNavigate} from "react-router-dom";

function NotFound(props) {
    const navigate = useNavigate();

    return (
        <div className={'Not-found-component not-found'}>
            <div className="not-found__body">
                <div className="not-found__title">
                    <p>404 Not found page</p>
                </div>
                <div className="not-found__text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae dolores molestiae ullam! Aut esse fugit quisquam, rem repudiandae ut!</p>
                </div>
                <ul className="not-found__list">
                    <li className="not-found__item">
                        <a onClick={()=>navigate(-1, {replace: true})} className="not-found__link">Go back</a>
                    </li>
                    <li className="not-found__item">
                        <a onClick={()=>navigate('/auth/login')} className="not-found__link">Login</a>
                    </li>
                    <li className="not-found__item">
                        <a onClick={()=>navigate('auth/reg')} className="not-found__link">Registration</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NotFound;