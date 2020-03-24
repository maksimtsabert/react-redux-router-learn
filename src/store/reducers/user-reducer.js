import { LOAD_USERS, UPDATE_USER_DETAILS, ADD_USER } from '../actions/user-actions'

export function usersReducer(state = [], action) {
    switch (action.type) {
        case LOAD_USERS:
            return [...state, ...action.payload];
        case UPDATE_USER_DETAILS:
            return state.map((user) => {
                if (user.id !== action.payload.id) {
                    return user;
                }
                return {
                    ...user,
                    ...action.payload
                };
            });
        case ADD_USER:
            return [...state, action.payload];
        default:
            return state
    }
}
