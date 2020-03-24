import { combineReducers } from 'redux'
import { usersReducer } from './reducers/user-reducer'
import { spinnerReducer } from './reducers/spinner-reducer'
import { searchReducer } from './reducers/search-reducer'

export const rootReducer = combineReducers({
    users: usersReducer,
    spinner: spinnerReducer,
    search: searchReducer  
})
