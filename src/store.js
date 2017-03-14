import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducers from './reducers'

import api from './middlewares/api-superagent'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, api)));

export default store;