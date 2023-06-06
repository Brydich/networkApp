import {useEffect} from 'react';
import './PrivatePages.scss';
import {Outlet, useNavigate} from "react-router-dom";
import Navigation from "./navigation/Navigation";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUser} from "../../assets/store/currentUserReducer";

function PrivatePages(props) {
    const navigate = useNavigate();
    //let user = useSelector(store => store.currentUser);
    let dispatch = useDispatch();

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            navigate('/auth/login');
        } else {
            dispatch(setCurrentUser(user));
            navigate('chat');
        }
    }, []);


    return (
        <div className={'PrivatePages-component wrapper'}>
            <Navigation/>
            <Outlet/>
        </div>
    );
}

export default PrivatePages;