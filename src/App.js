import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <h2>Todo or not Todo</h2>
      <TodoForm />
      <ul>
        <li>
          <span></span>
          <button>Remove</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
