import React, { useRef } from 'react';
import Todo from './Todo';
import './TodoList.css';
import { useSelector, useDispatch } from 'react-redux';
import { completeTodo, removeTodo } from '../redux/action';
import { useScrollbar } from '../hooks/scrollHook';

const TodoList = () => {
    // const state = useSelector(state => ({ ...state.todos }));
    const stateTodos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const todoWrapper = useRef(null);
    const hasScroll = stateTodos.length > 3;

    useScrollbar(todoWrapper, hasScroll);

    return (
        <div className="Todo"
            style={{marginTop: '1rem', height: hasScroll ? '120px' : 'auto', minHeight: '120px' }}
            ref={todoWrapper}>
            <div id="todoList" className="TodoList">
                {stateTodos.todos && stateTodos.todos.map(todo => {
                    return (
                            <Todo
                                key={todo.id}
                                {...todo}
                                toggleTodo={() => dispatch(completeTodo(todo))}
                                removeTodo={() => dispatch(removeTodo(todo))}
                                />
                            )
                        }
                    )
                }
            </div>
        </div>        
    );
}

export default TodoList;
