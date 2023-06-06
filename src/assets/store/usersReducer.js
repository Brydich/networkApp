let defaultState = {
    users: []
}

const ADD_USER = "ADD_USERS";
const ADD_MANY_USERS = "ADD_MANY_USERS";
const REMOVE_USER = "REMOVE_USER";

// let action = {type: "ADD_USER", payload:{}}
export function usersReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_USER:
            return {...state, users: [...state.users, action.payload]}
        case ADD_MANY_USERS:
            return {...state, users: [...state.users, ...action.payload]}
        default:
            return state;
        /*case ADD_USER:
            return {...state, users: [...state.users, action.payload]}
        case REMOVE_USER:
            return {...state, users: state.users.filter(user => !(user === action.payload))}*/
    }
}
export function addManyUsers(payload) {
    return {
        type: ADD_MANY_USERS,
        payload: payload
    }
}
// dispatch(removeUserAction('MEEEEE'));
export function addUser(payload) {
    return {
        type: ADD_USER,
        payload: payload
    }
}

// dispatch(removeUserAction('MEEEEE'));
export function removeUser(payload) {
    return {
        type: REMOVE_USER,
        payload: payload
    }
}