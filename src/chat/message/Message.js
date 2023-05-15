import React, {useEffect, useState} from 'react';
import './Message.scss';
import {useDispatch, useSelector} from "react-redux";
import {addManyUserAction} from "../../assets/store/usersReducer";
import {addMessage} from "../../assets/store/messagesReduceer";

function Message() {
    let dispatch = useDispatch();
    let user = useSelector(store => store.usersReducer.users[0]);
    let companion = useSelector(store => store.usersReducer.users[1]);
    let [chat, setChat] = useState({});

    useEffect(() => getChat(), []);

    function getChat() {
        fetch('http://localhost:3001/chats/1', {
            method: "GET"
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                console.log("Can't get chat");
            }
        }).then(jsonChat => {
            if (Object.keys(jsonChat).length === 0) return;
            // Сортируем чат по последним сообщениям
            sortByDateLastMessage(jsonChat.messages);
            setChat(jsonChat);
            // Обновляем данные по сообщениям в хранилище store
            dispatch(addMessage(jsonChat.messages));
        }).catch(ex => console.log(ex));
    }
    function sortByDateLastMessage(messages) {
        messages.forEach(message => {
            let number = Date.parse(message.date)
            message.date = new Date(number);
        });

        messages.sort((a, b) => {
            return b.date - a.date
        });
    }
    function getDate(date) {
        return (date.toLocaleTimeString().slice(0, -3) + " " + date.getFullYear());
    }
    function getFullName(user) {
        return user.name + " " + user.lastName;
    }
    function getPhoto(user) {
        if (user.photo) {
            return <img src={user.photo} alt=""></img>
        } else {
            return <img src={"./img/stock.jpg"} alt=""></img>
        }
    }
    function getMessagesJSX() {
        if (!chat || !chat.messages) return <li></li>
        if (user === undefined || companion === undefined) return <li></li>
        return chat.messages.map(message=>{
            if (message.sender === user.id) {
                return <li key={message.date} className={"chat__item chat__item-me"}>
                    <div className="chat__person">
                        {getPhoto(user)}
                    </div>
                    <div className="chat__message">
                        <div className="chat__message_date">
                            <p>{getDate(message.date)}</p>
                        </div>
                        <div className="chat__person-info">
                            {getFullName(user)}
                        </div>
                        <div className="chat__text">
                            <p>{message.text}</p>
                        </div>
                    </div>
                </li>
            } else {
                return <li key={message.date} className={"chat__item"}>
                    <div className="chat__person">
                        {getPhoto(companion)}
                    </div>
                    <div className="chat__message">
                        <div className="chat__message_date">
                            <p>{getDate(message.date)}</p>
                        </div>
                        <div className="chat__person-info">
                            {getFullName(companion)}
                        </div>
                        <div className="chat__text">
                            <p>{message.text}</p>
                        </div>
                    </div>
                </li>
            }
        });
    }

    return getMessagesJSX();
}

/*function newChat(chat) {
    if (chat === undefined || Object.keys(chat).length === 0) return <li></li>
    if (chat.length === 0) return <li></li>
    return chat.map(item => {
        return item
    }).reverse();
}

/!*function updateChat(user, companion, setChat) {
    getChatInfo(user, companion).then(async chat => {
        if (chat === undefined) return {};
        sortByDateLastMessage(chat.messages);
        let chatMessages = showMessages(user, companion, chat.messages);
        setChat(chatMessages);
    }).catch(ex => console.log(ex));
}*!/

/!*function sortByDateLastMessage(messages) {
    messages.forEach(message => {
        let number = Date.parse(message.date)
        message.date = new Date(number);
    });

    messages.sort((a, b) => {
        return b.date - a.date
    });
}*!/
async function getChatInfo(user, companion) {
    let chatInfo = hasDialog(user, companion);
    // showMessages(user, companion, indexDialog, amI, deep = 5)
    if (!chatInfo) return;
    let result;
    await fetch('http://localhost:3001/chats/1', {
        method: "GET"
    }).then(response => {
        if (response.ok) {
            result = response.json();
        } else {
            console.log("Can't get chat");
        }
    }).catch(ex => console.log(ex));
    return result;
}

function showMessages(user, companion, messages) {
    let prevUser;
    return messages.map(message => {
        let className;
        let nowUser;
        if (message.sender === user.id) {
            className = 'chat__item';
            nowUser = companion;
        } else {
            className = 'chat__item chat__item-me';
            nowUser = user;
        }
        if (prevUser !== nowUser.id) {
            prevUser = nowUser.id
            return (
                <li key={Math.random()} className={className}>
                    <div className="chat__person">
                        {getPhoto(nowUser)}
                    </div>
                    <div className="chat__message">
                        <div className="chat__message_date">
                            <p>{getDate(message.date)}</p>
                        </div>
                        <div className="chat__person-info">
                            {getFullName(nowUser)}
                        </div>
                        <div className="chat__text">
                            <p>{message.text}</p>
                        </div>
                    </div>
                </li>
            )
        } else {
            return (
                <li key={Math.random()} className={className}>
                    <div className="chat__message">
                        <div className="chat__message_date">
                            <p>{getDate(message.date)}</p>
                        </div>
                        <div className="chat__person-info">
                            {getFullName(nowUser)}
                        </div>
                        <div className="chat__text">
                            <p>{message.text}</p>
                        </div>
                    </div>
                </li>
            )
        }
    });
    /!*let chatInfo = hasDialog(user, companion);
    // showMessages(user, companion, indexDialog, amI, deep = 5)
    if (!chatInfo) return;
    fetch('http://localhost:3001/chats/1',{
        method: "GET"
    }).then(response=>{
        return response.json();
    }).then(response=>{
        console.log(response);
    }).catch(ex=>console.log(ex));*!/
    /!*let messages = user.chats[indexDialog].messages;
    return messages.map(message => {
        let className;
        let nowUser;
        if (message.senderId === user.id) {
            className = 'chat__item';
            nowUser = companion;
        } else {
            className = 'chat__item chat__item-me';
            nowUser = user;
        }
        return (
            <div key={Math.random()} className={className}>
                <div className="chat__person">
                    {getPhoto(nowUser)}
                </div>
                <div className="chat__message">
                    <div className="chat__person-info">
                        {getFullName(nowUser)}
                    </div>
                    <div className="chat__text">
                        <p>{message.text}</p>
                    </div>
                </div>
            </div>
        )
    });*!/
}



function hasDialog(user, companion) {
    if (Object.keys(user).length === 0 || Object.keys(companion).length === 0) return false;
    if (user.chats.length === 0 || companion.chats.length === 0) return false;
    if (user.chats.length < companion.chats.length) {
        return user.chats.find(chat => chat.companionId === companion.id);
    } else {
        return companion.chats.find(chat => chat.companionId === user.id);
    }
    /!*if (userOne === null || userTwo === null) return -1;
    if (!hasChats(userOne)) return -1;
    if (!hasChats(userTwo)) return -1;
    for (let index = 0; index < userOne.chats.length; index++) {
        if (userOne.chats[index].companionId === userTwo.id) {
            return index;
        }
    }
    return -1;*!/
}

function hasChats(user) {
    if (Object.keys(user).length <= 0) {
        return false;
    }
    return user.chats.length > 0;
}

function updateCompanion(user, setCompanion) {
    if (user === undefined) return;
    if (Object.keys(user).length <= 0) return;
    setCompanion(user);
}



function updateUser(user, setUserFunc) {
    if (user === undefined) return;
    if (Object.keys(user).length <= 0) return;
    setUserFunc(user);
}*/

export default Message;