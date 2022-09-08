import * as types from './actionTypes';
import { v4 as uuidv4 } from 'uuid';
import { load } from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'todo-list' });

if (!TASKS || !TASKS.todos || !TASKS.todos.length) {
    TASKS = {
        todos: [],
    };
}

const todosReducer = (state = TASKS, action) => {
    
    switch (action.type) {
        case types.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {
                    id: uuidv4(),
                    title: action.payload.title,
                    description: action.payload.description,
                    completed: false
                }],
            };
        case types.COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo;
                })
            };
        case types.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            };
        default:
            return state;
    }
}

export default todosReducer;

