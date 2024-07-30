
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { movieReducer } from '../reducers/movieReducer';
import { thunk } from 'redux-thunk';

const configureStore = () => {
    const store = createStore(combineReducers({
        movie:movieReducer
    }),applyMiddleware(thunk));
    return store;
}

export default configureStore