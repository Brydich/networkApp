import React, {useState} from 'react';
import './Textarea.scss';

const Textarea = (props) => {
    let [message, setMessage] = useState('');
    return (
        <div className={"Textarea-component chat__message-area"}>
            <textarea
                name=""
                className={"chat-textarea"}
                placeholder={"Message"}
                value={message}
                onChange={(event) => {
                    handleChange(setMessage, event)
                }}
            >
            </textarea>
            <button
                className="chat__message-area_button"
                onClick={(event) => {
                    sendMessage(message, props.user, props.companion, event)
                        .then(resolve => {
                                setMessage(message);
                            }
                        ).catch(ex => console.log(ex))
                }}
            >Send message
            </button>
        </div>
    );
};

function handleChange(setMessage, event) {
    setMessage(event.target.value);
    console.log(event.target.value);
}

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