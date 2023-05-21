import React, {useEffect} from 'react';
import './Pages.scss';
import {Outlet, useNavigate} from "react-router-dom";
import Navigation from "./navigation/Navigation";

function Pages(props) {
        const navigate = useNavigate();
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        console.log("User", user);
        if (!user) {navigate('/auth');}
        else {navigate('chat')}
    }, [])

    return (
        <div className={'Pages-component wrapper'}>
            <Navigation/>
            <Outlet/>
        </div>
    );
}

export default Pages;