import {createStore, combineReducers} from "redux";
import {messagesReducer} from "./messagesReduceer";
import {usersReducer} from "./usersReducer";
import {composeWithDevTools} from "redux-devtools-extension";


const rootReducer = combineReducers({
    usersReducer: usersReducer,
    messagesReducer: messagesReducer
})
export let store;
store = createStore(rootReducer, composeWithDevTools());