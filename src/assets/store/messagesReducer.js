let defaultState = {
    messages: []
}

const ADD_MESSAGE = "ADD_MESSAGE";
const ADD_MANY_MESSAGES = "ADD_MANY_MESSAGES";
const UPDATE_MESSAGES = "UPDATE_MESSAGES";
const REMOVE_MESSAGES = "REMOVE_MESSAGES";

export function messagesReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return {...state, messages: [action.payload, ...state.messages]}
        case ADD_MANY_MESSAGES:
            return {...state, messages: [...state.messages, ...action.payload]}
        case UPDATE_MESSAGES:
            return {...state, messages: [...action.payload]}
        case REMOVE_MESSAGES:
            return {...state, messages: []}
        default:
            return state;
    }
}

export function addMessage(payload) {
    return {
        type: ADD_MESSAGE,
        payload: payload
    }
}
export function addManyMessages(payload) {
    return {
        type: ADD_MANY_MESSAGES,
        payload: payload
    }
}
export function updateMessages(payload) {
    return {
        type: UPDATE_MESSAGES,
        payload: payload
    }
}
export function removeMessages(payload) {
    return {
        type: REMOVE_MESSAGES,
        payload: payload
    }
}