import './Chat.scss';
import Message from "./message/Message";
import Textarea from "./textarea/Textarea";
import {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentCompanion} from "../../../assets/store/currentCompanionReducer";
import {removeMessages, updateMessages} from "../../../assets/store/messagesReducer";

function Chat() {
    let user = useSelector(store => store.currentUser);
    let companion = useSelector(store => store.currentCompanion);
    let messages = useSelector(store => store.messagesReducer.messages);
    let dispatch = useDispatch();

    useEffect(() => {
        if (Object.keys(companion).length === 0) {
            getCompanion();
        }
    }, []);

    useMemo(function updateChat() {
        if (!user || !companion) {return;}
        console.log(user, companion);
        let chatInfo = hasChat(user, companion);
        if (chatInfo) {
            console.log("Get chat...");
            getChat(chatInfo.chatId);
        } else {
            console.log('Chat is clear');
            dispatch(removeMessages());
        }
        /*if (user?.chats?.length > 0 && companion?.chats?.length > 0) {
            let chatInfo = hasChat(user, companion);
            if (chatInfo) {
                console.log("Get chat...");
                getChat(chatInfo.chatId);
            } else {
                console.log('Chat is clear');
            }
        }*/
    }, [user, companion])
    function hasChat(user, companion) {
        if (!user['chats'] || !companion['chats']) {return false;}
        return user.chats.find(item => {
            return item.companionId === companion.id
        });
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
    function getChat(chatId) {
        fetch('http://localhost:3001/chats/' + chatId, {
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
            dispatch(updateMessages(jsonChat.messages));
        }).catch(ex => console.log(ex));
    }
    function getCompanion() {
        fetch('http://localhost:3001/users/1', {
            method: "GET"
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                console.log("Can't get chat");
            }
        }).then(res => {
            if (Object.keys(res).length === 0) return;
            // Обновляем данные по сообщениям в хранилище store
            dispatch(setCurrentCompanion(res));
        }).catch(ex => console.log(ex));
    }

    return (
        <div className={"Chat-component chat"}>
            <div className="chat__container">
                <div className="chat__communication">
                    <ul className="chat__list">
                        <Message user={user} companion={companion} messages={messages}/>
                    </ul>
                </div>
                <Textarea user={user} companion={companion} messages={messages}/>
            </div>
        </div>
    );
}

export default Chat;