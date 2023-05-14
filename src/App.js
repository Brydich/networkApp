import React, {useEffect, useState} from "react";
import Chat from "./chat/Chat";
import Navigation from "./navigation/Navigation";
import './assets/styles/null.scss'
import './App.scss'

function App(props) {
    let [users, setUsers] = React.useState([]);
    useEffect(() => {
        firstLoadApp(setUsers);
    }, []);
    return (
        <div className={"App-component"}>
            <Navigation/>
            <Chat users={users}/>
        </div>
    )
}

/*function sortByDateLastMessage(users) {
    users.map(user => {
        if (!hasChats(user)) return user;
        user.chats.forEach(chat => {
            // Parse date from string to object Date
            chat.messages.forEach(message => {
                let number = Date.parse(message.date)
                message.date = new Date(number);
            });
            // Sort messages by next rule (later at the end, early at the beginning)
            chat.messages.sort((a, b) => {
                return b.date - a.date
            });
        });
        // Sort chats by next rule (later at the end, early at the beginning)
        user.chats.sort((a, b) => {
            return b.messages[0].date - a.messages[0].date;
        });
    });
    return users;
}*/

// Return index of chat if users have dialog

// Return true if user has any chat
function hasChats(user) {
    if(Object.keys(user).length === 0) return false;
    if(user.chats === undefined) return false;
    return user.chats.length > 0;
}

function firstLoadApp(setUsersFunc) {
    getUsers('http://localhost:3001/users').then(response => {
        //let users = sortByDateLastMessage(response.users);
        setUsersFunc(response);
    }).catch(ex => {
        console.log(ex)
    });
}

async function getUsers(url) {
    let users;
    await fetch(url).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            // Выбросить ошибку!
            console.log("Can't get users from database");
        }
    }).then((response) => {
        users = response;
    }).catch(ex => {
        console.log(ex)
    });
    return users;
}

export default App;