import React from "react";
import Chat from "./chat/Chat";
import Navigation from "./navigation/Navigation";
import './assets/null.scss'
import './App.scss'

function App(props) {
    return (
        <div className={"App-component"}>
            <Navigation />
            <Chat/>
        </div>
    )
}

export default App;