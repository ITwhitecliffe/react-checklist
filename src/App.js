import "./App.css";
import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";
import ReactChecklistPage from "./component/reactChecklist/ReactChecklistPage";
import TodoForm from "./component/reactChecklist/TodoForm";
import Greeting from "./component/hello/Greeting";
import Checklist from "./component/simpleChecklist/Checklist";
import MonstersPage from "./component/monsters/MonstersPage";
import Header from "./component/header/Header";
import ChecklistApp from "./component/reactChecklist/ReactChecklistPage";
import TodoList from "./component/todolist/TodoList";
import ContentPage from "./component/contenful/ContentPage";
import Content from "./component/themeContext/Content";
import Login from "./component/themeContext/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/react" element={<ReactChecklistPage />} />
        <Route exact path="/todo" element={<TodoList />} />
        {/* <Route exact path="/edit" element={<TodoForm />} /> */}
        <Route exact path="/hello" element={<Greeting />} />
        <Route exact path="/checklist" element={<Checklist />} />
        <Route exact path="/monsters" element={<MonstersPage />} />
        <Route exact path="/contentful" element={<ContentPage />} />
        {/* <Route exact path="/login" element={<Login />} /> */}
        <Route exact path="/page" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
