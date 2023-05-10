import React from 'react';
import './Chat.scss';

function Chat(props) {
    return (
        <div className={"Chat-component chat"}>
            <div className="chat__container">
                <div className="chat__communication">
                    <ul className="chat__list">
                        <li className="chat__item">
                            <div className="chat__person">
                                <img src={"./img/person-image.png"} alt=""/>
                            </div>
                            <div className="chat__message">
                                <div className="chat__person-info">
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div className="chat__text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequatur
                                        esse
                                        facere quo? Animi commodi ipsum molestias, nam perferendis quaerat!</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequatur
                                        esse
                                        facere quo? Animi commodi ipsum molestias, nam perferendis quaerat!</p>
                                </div>
                            </div>
                        </li>
                        <li className="chat__item">
                            <div className="chat__person">
                                <img src={"./img/person-image.png"} alt=""/>
                            </div>
                            <div className="chat__message">
                                <div className="chat__person-info">
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div className="chat__text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequatur
                                        esse
                                        facere quo? Animi commodi ipsum molestias, nam perferendis quaerat!</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequatur
                                        esse
                                        facere quo? Animi commodi ipsum molestias, nam perferendis quaerat!</p>
                                </div>
                            </div>
                        </li>
                        <li className="chat__item">
                            <div className="chat__person">
                                <img src={"./img/person-image.png"} alt=""/>
                            </div>
                            <div className="chat__message">
                                <div className="chat__person-info">
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div className="chat__text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequatur
                                        esse
                                        facere quo? Animi commodi ipsum molestias, nam perferendis quaerat!</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequatur
                                        esse
                                        facere quo? Animi commodi ipsum molestias, nam perferendis quaerat!</p>
                                </div>
                            </div>
                        </li>
                        <li className="chat__item">
                            <div className="chat__person">
                                <img src={"./img/person-image.png"} alt=""/>
                            </div>
                            <div className="chat__message">
                                <div className="chat__person-info">
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div className="chat__text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequatur
                                        esse
                                        facere quo? Animi commodi ipsum molestias, nam perferendis quaerat!</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequatur
                                        esse
                                        facere quo? Animi commodi ipsum molestias, nam perferendis quaerat!</p>
                                </div>
                            </div>
                        </li>
                        <li className="chat__item chat__item-me">
                            <div className="chat__person">
                                <img src={"./img/person-image.png"} alt=""/>
                            </div>
                            <div className="chat__message">
                                <div className="chat__text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequatur
                                        esse
                                        facere quo? Animi commodi ipsum molestias, nam perferendis quaerat!</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequatur
                                        esse
                                        facere quo? Animi commodi ipsum molestias, nam perferendis quaerat!</p>
                                </div>
                            </div>
                        </li>
                        <li className="chat__item chat__item-me">
                            <div className="chat__person">
                                <img src={"./img/person-image.png"} alt=""/>
                            </div>
                            <div className="chat__message">
                                <div className="chat__text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequatur
                                        esse
                                        facere quo? Animi commodi ipsum molestias, nam perferendis quaerat!</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequatur
                                        esse
                                        facere quo? Animi commodi ipsum molestias, nam perferendis quaerat!</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="chat__message-area">
                    <textarea name="" className={"chat-textarea"} placeholder={"Message"}></textarea>
                    <button className="chat__message-area_button">Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Chat;