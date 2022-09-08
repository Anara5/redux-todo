import React from 'react';
import './Todo.css';

const remove = '/pngegg.png';

const Todo = ({ id, title, description, completed, toggleTodo, removeTodo }) => {

    return (
        <div onClick={() => toggleTodo(id)} className={ completed ? "todo--completed" : "one-todo"}>
                <li className={ completed ? "todo--toggle-completed" : "todo--toggle"}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </li>
            <div>
                <button className={ completed ? "todo__button--remove" : "todo__button--remove--hide"}
                    onClick={removeTodo}>
                    <img src={remove} alt="" style={{ width: "25px", hight: "auto"}}/>
                </button>
            </div>
        </div>
    );
}

export default Todo;