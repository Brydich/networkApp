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
    useEffect(() => {
        //updateUsers(users);
    }, [users]);
    updateUsers(users);
    return (
        <div className={"App-component"}>
            <Navigation/>
            <Chat/>
        </div>
    )
}

function updateUsers(users) {
    if (users.length < 1) return;
    console.log(users[0].chats[0].messages);
    users[0].chats[0].messages.forEach(message => {
        console.log(message.date);
    });
    //users.sort(sortByDate);

    sortByDate(users[0], users[1]);
    users[0].chats[0].messages.forEach(message => {
        console.log(message.date.getFullYear());
    });
    //users.sort(sortByDate);

    /*console.log(users);
    console.log(typeof users[0]?.chats[0]?.messages[0].date);
    let parseDate = Date.parse(users[0]?.chats[0]?.messages[0].date);
    let date = new Date(parseDate);
    console.log(date.getMonth());
    console.log(typeof date);*/
    //.chats.messages.date
    //users.sort(sortByDate);
}

function sortByDate(userOne, userTwo) {
    let indexOfChat = hasDialog(userOne, userTwo);
    if (indexOfChat < 0) {
        return false;
    }
    userOne.chats[indexOfChat].messages.forEach(message => {
        let number = Date.parse(message.date)
        message.date = new Date(number);
    });
    userOne.chats[indexOfChat].messages.sort((a, b) => b.date - a.date);
}

function hasDialog(userOne, userTwo) {
    if (!hasChats(userOne)) return false;
    if (!hasChats(userTwo)) return false;
    for (let i = 0; i < userOne.chats.length; i++) {
        if (userOne.chats[i].companion === userTwo.name) {
            return i;
        }
    }
    return -1;
}

function hasChats(user) {
    return user.chats.length > 0;
}

function firstLoadApp(setUsersFunc) {
    let url = 'http://localhost:3001/db';
    getUsers(url).then(response => {
        setUsersFunc(response.users);
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
            console.log("Unsuccessful");
        }
    }).then((response) => {
        users = response;
    }).catch(ex => {
        console.log(ex)
    });
    return users;
}

/*function showUsers (users) {
    console.log(users);
}

function getUsers(url, amount = 10) {
    let users;
    return getDB(url).then(resolve => {
        users = resolve.users;
        return users;
    }).catch(ex=>{console.log(ex)});
}

function getDB(url) {
    let result;
    return fetch(url, {
        method: "GET"
    }).then(resolve=>{
        if(resolve.ok) {
            result = resolve.json();
        } else {
            result = resolve.status;
            console.log("Mistake! DataBase wasn't received. Status = " + result);
        }
        return result;
    }).catch(ex=>{console.log(ex)});
}*/

export default App;