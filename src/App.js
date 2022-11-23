import './App.css';
import Home from './component/Home';
import { Routes, Route } from "react-router-dom";
import ReactChecklistPage from './component/reactChecklist/ReactChecklistPage';
import TodoForm from './component/reactChecklist/TodoForm';
import Greeting from './component/hello/Greeting';
import Checklist from './component/simpleChecklist/Checklist';
import MonstersPage from './component/monsters/MonstersPage';
import Header from './component/header/Header';
import ChecklistApp from './component/reactChecklist/ReactChecklistPage';
import TodoList from './component/todolist/TodoList'

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/react" element={<ReactChecklistPage />} />
        <Route exact path="/todo" element={<TodoList />} />
        {/* <Route exact path="/edit" element={<TodoForm />} /> */}
        <Route exact path="/hello" element={<Greeting />} />
        <Route exact path="/checklist" element={<Checklist />} />
        <Route exact path="/monsters" element={<MonstersPage />} />
      </Routes>
    </div>
  );
}

export default App;

