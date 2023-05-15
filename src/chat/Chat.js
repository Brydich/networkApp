import React, {useEffect, useState} from 'react';
import './Chat.scss';
import Message from "./message/Message";
import Textarea from "./textarea/Textarea";

function Chat(props) {
    let [user, setUser] = useState(props.users[0]);
    let [companion, setCompanion] = useState(props.users[1]);
    // Попробовать вызвать useEffect с параметрами отдельно для пользователя и собеседника
    useEffect(() => {
        if (!user || !(user === props.users[0])) {
            updateUser(props.users, setUser);
        }
        if (!companion || !(companion === props.users[1])) {
            updateCompanion(props.users, setCompanion);
        }
    }, [props]);
    return (
        <div className={"Chat-component chat"}>
            <div className="chat__container">
                <div className="chat__communication">
                    <ul className="chat__list">
                        <Message user={user} companion={companion}/>
                    </ul>
                </div>
                <Textarea user={user} companion={companion}/>
                {/*<div className="chat__message-area">
                    <textarea name="" className={"chat-textarea"} placeholder={"Message"}></textarea>
                    <button className="chat__message-area_button">Send message</button>
                </div>*/}
            </div>
        </div>
    );
}

function updateCompanion(users, setCompanion) {
    if (users === undefined) return;
    if (users.length < 1) return;
    setCompanion(users[1]);
}
function updateUser(users, setUserFunc) {
    if (users === undefined) return;
    if (users.length < 1) return;
    setUserFunc(users[0]);
}

export default Chat;