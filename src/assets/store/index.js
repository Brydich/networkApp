import {createStore, combineReducers} from "redux";
import {messagesReducer} from "./messagesReducer";
import {usersReducer} from "./usersReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {currentUserReducer} from "./currentUserReducer";
import {currentCompanionReducer} from "./currentCompanionReducer";


const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    currentCompanion: currentCompanionReducer,
    usersReducer: usersReducer,
    messagesReducer: messagesReducer
})
export let store;
store = createStore(rootReducer, composeWithDevTools());