import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './App'
import { Spinner } from './components/spinner'
import store from './store/store'
import 'bootstrap/dist/css/bootstrap.css'
import './lib/font-awesome'
import './index.css'

ReactDOM.render(
    <Provider store={store} >
        <App />
        <Spinner />
    </Provider>,
    document.getElementById('root')
)
