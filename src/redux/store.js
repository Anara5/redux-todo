import { legacy_createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger'
import rootReducer from './root-reducer';
import { save } from 'redux-localstorage-simple';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

const persistedState = localStorage.getItem('todo-list') 
                       ? JSON.parse(localStorage.getItem('todo-list'))
                       : {}

const store = legacy_createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(...middleware, save({ namespace: 'todo-list' }))));

store.subscribe(()=>{
    localStorage.setItem('todo-list',JSON.stringify(store.getState()));
});

export default store;