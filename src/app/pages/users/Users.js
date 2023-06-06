import {useEffect} from 'react';
import './Users.scss';
import {useDispatch, useSelector} from "react-redux";
import {addManyUsers} from "../../../assets/store/usersReducer";
import {setCurrentCompanion} from "../../../assets/store/currentCompanionReducer";
import {useNavigate} from "react-router-dom";

function Users(props) {
    let users = useSelector(store => store.usersReducer.users);
    let currentUser = useSelector(store => store.currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (users.length === 0) {getUsers();}
    }, []);

    function getUsers() {
        fetch('http://localhost:3001/users', {
            method: "GET"
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                console.log("Can't get chat");
            }
        }).then(res => {
            console.log(res);
            if (res.length === 0) return;
            // Обновляем данные по сообщениям в хранилище store
            dispatch(addManyUsers(res));
        }).catch(ex => console.log(ex));
    }
    function sendMessageHandler(event) {
        let name = Number(event.target.name);
        let companion = users.find(user=>user.id === name);
        dispatch(setCurrentCompanion(companion));
        navigate('../chat');
    }

    function getUsersJSX() {
        if (users.length === 0) return <div></div>
        return <ul className={'users-list'}>
            {users.map(user=>{
                if (user.id === currentUser.id) { return }
                return <li key={user.id} className={'users-list__item user-item'}>
                    <div className="user-item__image">
                        <img src={user.photo} alt=""/>
                    </div>
                    <div className="user-item__info">
                        <div className="user-item__description">
                            <div className="user-item__description_fullName">
                                <p>{user.name} {user.lastName}</p>
                            </div>
                            <div className="user-item__description_email">
                                <p>{user.email}</p>
                            </div>
                        </div>
                        <div className="user-item__button">
                            <button name={user.id} onClick={sendMessageHandler} className="user-item_btn">Send message</button>
                        </div>
                    </div>
                </li>
            })}
        </ul>
    }

    return getUsersJSX()
}

export default Users;