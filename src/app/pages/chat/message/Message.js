import React, {useEffect, useMemo, useState} from 'react';
import './Message.scss';
import {useDispatch, useSelector} from "react-redux";
import {addManyMessages, addMessage, updateMessages} from "../../../../assets/store/messagesReducer";
import {setCurrentCompanion} from "../../../../assets/store/currentCompanionReducer";

function Message(props) {
    let user = props.user;
    let companion = props.companion;
    let messages = props.messages;

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
        if (!user || !companion || !messages) return <li></li>
        return messages.map(message => {
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
    function getEmptyMessagesJSX() {
        return <li className={'chat-empty'}>
            <div className="chat-empty__title">
                <p>Chat is empty</p>
                <p>Send a message first!</p>
            </div>
        </li>
    }

    if (messages.length === 0) {return getEmptyMessagesJSX();}
    else {return getMessagesJSX();}
}

export default Message;
/*export default React.memo(Message,(prevProps, nextProps)=>{
    console.log(prevProps);
    console.log(nextProps);
    if (prevProps.messages.length !== nextProps.messages) {
        console.log('Here');
        return false;
    }
    if (Object.keys(prevProps.user).length !== Object.keys(nextProps.user).length) {
        console.log('Here');
        return false;
    }
    if (Object.keys(prevProps.companion).length !== Object.keys(nextProps.companion).length) {
        console.log('Here');
        return false;
    }
    if ('id' in prevProps.user) {
        console.log('Here');
        if (prevProps.user.id !== nextProps.user.id) {
            console.log('Here');
            return false;
        }
    } else {
        if (prevProps.user !== nextProps.user) {
            console.log('Here');
            return false;
        }
    }
    if ('id' in prevProps.companion) {
        if (prevProps.companion.id !== nextProps.companion.id) {
            console.log('Here');
            return false;
        }
    } else {
        if (prevProps.companion !== nextProps.companion) {
            console.log('Here');
            return false;
        }
    }
    return true;
});*/
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