import * as reducers from './reducers'
import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, createStore } from 'redux'

export default createStore(combineReducers({
	...reducers
}), applyMiddleware(thunk))
