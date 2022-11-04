import './App.css';
import Home from './component/Home';
import { Routes, Route } from "react-router-dom";
import TodoApp from './component/reactChecklist/TodoApp';
import TodoForm from './component/todolist/TodoForm';
// import Hello from './component/hello/Hello';
import Greeting from './component/hello/Greeting';
import Checklist from './component/simpleChecklist/Checklist';
import MonstersPage from './component/monsters/MonstersPage';
import Header from './component/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/todos" element={<TodoApp />} />
        <Route exact path="/edit" element={<TodoForm />} />
        <Route exact path="/hello" element={<Greeting />} />
        <Route exact path="/checklist" element={<Checklist />} />
        <Route exact path="/monsters" element={<MonstersPage />} />
      </Routes>
    </div>
  );
}

export default App;
