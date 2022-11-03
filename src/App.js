import './App.css';
import Home from './component/Home';
import { Routes, Route } from "react-router-dom";
import TodoApp from './component/todolist/TodoApp';
import TodoForm from './component/todolist/TodoForm';
// import Hello from './component/hello/Hello';
import Greeting from './component/hello/Greeting';
import Checklist from './component/simpleChecklist/Checklist';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/todos" element={<TodoApp />} />
        <Route exact path="/edit" element={<TodoForm />} />
        <Route exact path="/hello" element={<Greeting />} />
        <Route exact path="/checklist" element={<Checklist />} />
      </Routes>
    </div>
  );
}

export default App;
