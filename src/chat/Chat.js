import React from 'react';
import './Chat.scss';

function Chat(props) {
    return (
        <div className={"Chat-component chat"}>
            <div className="chat__container">
                <ul className="chat__list">
                    <li className="chat__item">
                        <div className="chat__person">
                            <img src="" alt=""/>
                        </div>
                        <div className="chat__message">
                            <div className="chat__person-info">
                                <p>Lorem ipsum dolor</p>
                            </div>
                            <div className="chat__text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequatur esse facere quo? Animi commodi ipsum molestias, nam perferendis quaerat!</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="chat__message-area">
                    <textarea name="" className={"chat-textarea"}></textarea>
                </div>
            </div>
        </div>
    );
}

export default Chat;