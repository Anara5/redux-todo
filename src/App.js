import './App.css';
import React from 'react';
import TodoInput from './components/TodoInput';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './redux/action';
import TodoList from './components/TodoList';

const App = () => {

  const dispatch = useDispatch();
  const totalTodos = useSelector(state => state.todos.todos.length);
  const completedTodos = useSelector(state => state.todos.todos.filter(todo => todo.completed).length);
  const progress = Math.round(completedTodos / totalTodos * 100);

  const create = (todoTitle, todoDesc) => {
    const newTodo = {
      title: todoTitle,
      description: todoDesc,
    };
    dispatch(addTodo(newTodo));
  }

  return (
    <div className="App">
      <h3>Todo or not Todo? - That is the question</h3>
      <h2>PROGRESS: {progress ? progress : 0}%</h2>
      <TodoInput createTodo={create} />
      <TodoList />
    </div>
  );
}

export default App;
