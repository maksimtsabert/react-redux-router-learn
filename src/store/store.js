import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const tools = composeWithDevTools(applyMiddleware(thunk))
const store = createStore(rootReducer, tools)
export default store
