import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import moviesReducers from '../reducers/moviesReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        movies:moviesReducers
    }),applyMiddleware(thunk))
    return store
}

export default configureStore