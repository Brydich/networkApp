let defaultState = {
    messages: []
}

const ADD_MESSAGE = "ADD_MESSAGE";
const ADD_MANY_MESSAGES = "ADD_MANY_MESSAGES";
const REMOVE_MESSAGE = "REMOVE_MESSAGE";

export function messagesReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return {...state, messages: [...state.messages, ...action.payload]}
        case ADD_MANY_MESSAGES:
            return;
        case REMOVE_MESSAGE:
            return
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