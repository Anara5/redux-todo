import React from "react";

const TodoForm = ({ createTodo }) => {

    return (
        <div className="todo-input">
            <form className="todo-form">
                <p>Title</p>
                <input
                type="text"
                placeholder="Enter Todo"
                id="txtTodoItemToAdd"
                name="title"
                
                />
                <p>Description</p>
                <input
                type="text"
                placeholder="Enter Description"
                name="description"
                
                />
                <button
                className="todo-form--button"
                id="btnAddTodo"
                type="submit"
                
                >Add</button>
            </form>
        </div>
    );
}

export default TodoForm;