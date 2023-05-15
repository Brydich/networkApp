let defaultState = {
    messages: []
}
export function messagesReducer(state = defaultState, action) {
    switch (action.type) {
        case "":
            return
        case " ":
            return;
        default:
            return state;
    }
}