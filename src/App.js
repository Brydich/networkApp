import React from "react";
import Chat from "./chat/chat";
import Navigation from "./Navigation";
import './app.scss'

function App(props) {
    return (
        <div className={"App-component"}>
            <Navigation />
            <Chat/>
        </div>
    )
}

export default App;