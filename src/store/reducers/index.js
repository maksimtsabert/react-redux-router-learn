import { combineReducers } from 'redux'
import { usersReducer } from './user/user'
import { spinnerReducer } from './spinner/spinner'
import { searchReducer } from './search-reducer'

export const rootReducer = combineReducers({
    users: usersReducer,
    spinner: spinnerReducer,
    search: searchReducer  
})
