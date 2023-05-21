import React, {useState} from 'react';
import './Textarea.scss';
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../../../../assets/store/messagesReduceer";

const Textarea = () => {
    let dispatch = useDispatch();
    let [message, setMessage] = useState('');
    let messages = useSelector(store=>store.messagesReducer.messages);

    function handleChange(event) {
        setMessage(event.target.value);
        console.log(event.target.value);
    }
    function SendMessage() {
        messages.unshift({
            "sender": 1,
            "receiver": 2,
            "text": message,
            "date": new Date()
        });

        fetch("http://localhost:3001/chats/1", {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({messages})
        }).then(resolve => {
            dispatch(addMessage(messages[0].text));
            return resolve.json();
        }).then(jsonChat=>{
            console.log(jsonChat)
        }).catch(ex => console.log(ex));
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

async function sendMessage(message, user, companion, event) {
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

    /*let url = 'http://localhost:3001/users/1';
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
    })*/
}

export default Textarea;