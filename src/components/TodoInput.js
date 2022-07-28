import React, { useState } from 'react';
import './TodoInput.css';

const TodoInput = ({ createTodo }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo(title, description);
        setTitle('');
        setDescription('');
    }
    
    return (
        <div className="todo-input">
            <form className="todo-form" onSubmit={handleSubmit}>
                <p>Title</p>
                <input
                type="text"
                id="txtTodoItemToAdd"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <p>Description</p>
                <input
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
                <button
                className="todo-form--button"
                id="btnAddTodo"
                type="submit"
                onClick={handleSubmit}
                disabled={!title}
                >Add</button>
            </form>
        </div>
    );
}

export default TodoInput;
