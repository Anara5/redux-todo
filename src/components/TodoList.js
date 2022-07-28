import React from 'react';
import TodoInput from './TodoInput';
import Todo from './Todo';
import './TodoList.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, completeTodo, removeTodo } from '../redux/action';

const TodoList = () => {
    const state = useSelector(state => ({ ...state.todos }));
    const dispatch = useDispatch();
    const create = (todoTitle, todoDesc) => {
        const newTodo = {
            title: todoTitle,
            description: todoDesc,
        };
        dispatch(addTodo(newTodo));
    }

    return (
        <div className="Todo">
            <TodoInput createTodo={create} />
            <div id="todoList" className="TodoList">
                {state.todos && state.todos.map(todo => {
                    return (
                            <Todo
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            description={todo.description}
                            completed={todo.completed}
                            toggleTodo={() => dispatch(completeTodo(todo))}
                            removeTodo={() => dispatch(removeTodo(todo))}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default TodoList;
