let defaultState = {}

const SET_CURRENT_COMPANION = "SET_CURRENT_COMPANION";
const DELETE_CURRENT_COMPANION = "DELETE_CURRENT_COMPANION";

export function currentCompanionReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CURRENT_COMPANION:
            return {...action.payload}
        case DELETE_CURRENT_COMPANION:
            return {}
        default:
            return state;
    }
}

export function setCurrentCompanion(payload) {
    return {
        type: SET_CURRENT_COMPANION,
        payload: payload
    }
}
export function deleteCurrentCompanion(payload) {
    return {
        type: DELETE_CURRENT_COMPANION,
        payload: payload
    }
}