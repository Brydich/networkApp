let defaultState = {}

const SET_CURRENT_USER = "SET_CURRENT_USER";
const DELETE_CURRENT_USER = "DELETE_CURRENT_USER";

export function currentUserReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {...action.payload}
        case DELETE_CURRENT_USER:
            return {}
        default:
            return state;
    }
}

export function setCurrentUser(payload) {
    return {
        type: SET_CURRENT_USER,
        payload: payload
    }
}
export function deleteCurrentUser(payload) {
    return {
        type: DELETE_CURRENT_USER,
        payload: payload
    }
}