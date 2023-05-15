import React, {useEffect, useState} from "react";
import Chat from "./chat/Chat";
import Navigation from "./navigation/Navigation";
import './assets/styles/null.scss'
import './App.scss'
import {useDispatch, useSelector} from "react-redux";
import {addManyUserAction} from "./assets/store/usersReducer";

function App() {
    // Находим диспетчера (позволяет изменять состояние)
    let dispatch = useDispatch();
    // Получаем состояние при помощи хука useSelector(), которая принимает актуальное состояние
    //let redUsers = useSelector(store => store.usersReducer.users);

    //let [users, setUsers] = React.useState([]);

    // Компонент вызывается один раз после первого рендера
    useEffect(() => firstLoadApp(), []);
    function firstLoadApp() {
        let url = 'http://localhost:3001/users';
        fetch(url).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                // Выбросить ошибку!
                console.log("Can't get users from database");
            }
        }).then((jsonUsers) => {
            if (jsonUsers.length > 0) {
                console.log(jsonUsers);
                //setUsers(jsonUsers);
                dispatch(addManyUserAction(jsonUsers))
            }
            else {
                console.log("Don't have any user");
                //setUsers({})
            }
        }).catch(ex => {
            console.log(ex)
        });
    }

    return (
        <div className={"App-component"}>
            <Navigation/>
            <Chat />
        </div>
    )
}

export default App;