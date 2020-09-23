import {combineReducers, createStore} from 'redux';

// Reducers
import App from './reducers/app';

export default createStore(combineReducers({
    App
}));
