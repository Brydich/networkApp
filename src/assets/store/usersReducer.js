let defaultState = {
    users: [
        {
            name: 'someone',
            age: 15
        },
        {
            name: 'somebody',
            age: 19
        },
        {
            name: 'anyone',
            age: 47
        }
    ]
}

const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";

// let action = {type: "ADD_USER", payload:{}}
export function usersReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_USER:
            return {...state, users: [...state.users, action.payload]}
        case REMOVE_USER:
            return {...state, users: state.users.filter(user => !(user === action.payload))}
        default:
            return state;
    }
}
export function addUserAction(payload) {
    return {
        type: ADD_USER,
        payload: payload
    }
}
export function removeUserAction(payload) {
    return {
        type: REMOVE_USER,
        payload: payload
    }
}