import { combineReducers } from 'redux'
import { usersReducer } from './user/user'
import { spinnerReducer } from './spinner/spinner'

export const rootReducer = combineReducers({
    users: usersReducer,
    spinner: spinnerReducer
})
