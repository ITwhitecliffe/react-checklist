import './App.css';
import Home from './component/Home';
import { Routes, Route } from "react-router-dom";
import TodoApp from './component/todolist/TodoApp';
import TodoForm from './component/todolist/TodoForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<TodoApp />} />
        <Route path="/edit" element={<TodoForm />} />
      </Routes>
    </div>
  );
}

export default App;
