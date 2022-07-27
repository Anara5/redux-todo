import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { TodoReducers } from './reducers/TodoReducers';

const reducer = combineReducers({
    Todo: TodoReducers,
});

const initialState = {
};

const middleware = [thunk];

const store = legacy_createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;