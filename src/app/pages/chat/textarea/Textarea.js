import React, {useState} from 'react';
import './Textarea.scss';
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../../../../assets/store/messagesReducer";
import {setCurrentUser} from "../../../../assets/store/currentUserReducer";
import {setCurrentCompanion} from "../../../../assets/store/currentCompanionReducer";

const Textarea = (props) => {
    /*let user = useSelector(store => store.currentUser);
    let companion = useSelector(store => store.currentCompanion);
    let messages = useSelector(store=>store.messagesReducer.messages);*/
    let user = props.user;
    let companion = props.companion;
    let messages = props.messages;
    let [message, setMessage] = useState('');
    let dispatch = useDispatch();

    function handleChange(event) {
        setMessage(event.target.value);
        console.log(event.target.value);
    }

    function hasChat(user, companion) {
        return user.chats.find(item => {
            return item.companionId === companion.id
        });
    }

    function SendMessage() {
        let newMessage = {
            "sender": user.id,
            "receiver": companion.id,
            "text": message,
            "date": new Date()
        }
        let clone = messages.slice(0);
        clone.unshift(newMessage);
        let chatInfo = hasChat(user, companion);
        if (!chatInfo) {
            clone = {
                "userOneId": user.id,
                "userTwoId": companion.id,
                "messages": clone
            }
            let chatId;
            fetch("http://localhost:3001/chats/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(clone)
            }).then(resolve => {
                dispatch(addMessage(newMessage));
                return resolve.json();
            }).then(jsonChat => {
                console.log(jsonChat);
                let updateUser = {
                    ...user,
                    chats: [{
                        "companionId": companion.id,
                        "chatId": jsonChat.id
                    }]
                }
                console.log(updateUser);
                fetch("http://localhost:3001/users/" + user.id, {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updateUser)
                }).then(resolve => {
                    console.log(updateUser);
                    dispatch(setCurrentUser(updateUser));
                    return resolve.json();
                }).then(jsonChat => {
                    console.log(jsonChat);
                }).catch(ex => console.log(ex));



                let updateCompanion = {
                    ...companion,
                    chats: [{
                        "companionId": user.id,
                        "chatId": jsonChat.id
                    }]
                }
                fetch("http://localhost:3001/users/" + companion.id, {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updateCompanion)
                }).then(resolve => {
                    dispatch(setCurrentCompanion(updateCompanion));
                    return resolve.json();
                }).then(jsonChat => {
                    console.log(jsonChat);
                }).catch(ex => console.log(ex));




            }).catch(ex => console.log(ex));

        } else {
            messages.unshift({
                "sender": user.id,
                "receiver": companion.id,
                "text": message,
                "date": new Date()
            });
            fetch("http://localhost:3001/chats/" + chatInfo.chatId, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({messages: clone})
            }).then(resolve => {
                dispatch(addMessage(newMessage));
                return resolve.json();
            }).then(jsonChat => {
                console.log(jsonChat);
            }).catch(ex => console.log(ex));
        }
        /*messages.unshift({
            "sender": user.id,
            "receiver": companion.id,
            "text": message,
            "date": new Date()
        });*/


        /*fetch("http://localhost:3001/chats/" + chatInfo.chatId, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({messages: clone})
        }).then(resolve => {
            /!*dispatch(addMessage(messages[0].text));*!/
            dispatch(addMessage(newMessage));
            return resolve.json();
        }).then(jsonChat=>{
            /!*console.log(jsonChat);*!/
        }).catch(ex => console.log(ex));*/
    }

    return (
        <div className={"Textarea-component chat__message-area"}>
            <textarea
                name=""
                className={"chat-textarea"}
                placeholder={"Message"}
                value={message}
                onChange={handleChange}
            >
            </textarea>
            <button
                className="chat__message-area_button"
                onClick={SendMessage}
            >Send message
            </button>
        </div>
    );
};

/*async function sendMessage(message, user, companion, event) {
    let chat;
    await fetch("http://localhost:3001/chats/1", {
        method: "GET"
    }).then(response => {
        return response.json();
    }).then(response => {
        chat = response;
    }).catch(ex => console.log(ex));

    chat.messages.push({
        "sender": 1,
        "receiver": 2,
        "text": message,
        "date": new Date()
    });

    await fetch("http://localhost:3001/chats/1", {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(chat)
    }).then(resolve => {
        return resolve.json();
    }).catch(ex => console.log(ex));

    /!*let url = 'http://localhost:3001/users/1';
    user.chats[0].messages.push({
        "senderId": user.id,
        "receiverId": 2,
        "text": message,
        date: new Date()
    });
    console.log(user);
    await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: JSON.stringify(user)
    }).then(res => {
        return res.json()
    }).then(data => {
        console.log(data);
    }).catch(ex => console.log(ex))

    await fetch(url, {
        method: "GET"
    }).then(response=>{
        return response.json();
    }).then(resolve=>{
        console.log(JSON.parse(JSON.stringify(resolve)));
    })*!/
}*/

export default Textarea;