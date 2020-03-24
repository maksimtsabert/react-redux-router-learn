export const LOAD_USERS = 'LOAD_USERS'
export const LOAD_USER_DETAILS = 'LOAD_USER_DETAILS'
export const UPDATE_USER_DETAILS = 'UPDATE_USER_DETAILS'
export const ADD_USER = 'ADD_USER'

export function loadUsers(users) {
    return { type: LOAD_USERS, payload: users };
}

export function updateUser(user) {
    return { type: UPDATE_USER_DETAILS, payload: user }
}

export function loadUserDetails(user) {
    return { type: LOAD_USER_DETAILS, payload: user }
}

export function addUSer(user) {
    return { type: ADD_USER, payload: user }
}
