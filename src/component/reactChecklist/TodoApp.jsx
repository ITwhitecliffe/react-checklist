import React from 'react'
import { useState } from 'react'
import TodoData from '../../data/todo'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import TodoList from './TodoList'

function TodoApp() {
    const [todos, setTodos] = useState(TodoData)

    const removeItem = (todo) => {
      const newList = todos.filter(preList => preList.id !== todo.id)
      setTodos(newList)
    }

    const editTodo = (todo) => {
      const toEdit = todos.find(preList => preList.id !== todo.id);

      toEdit.complete = todo.complete;
      toEdit.task = todo.task;
    }

    const todoOperations = {
      editTodo,
      removeTodo: removeItem
    }


  return (
    <div className='page'>
      {/* <StudyList todos={todos} removeTodo={removeItem} editTodo={editTodo}/> */}
      <TodoList todos={todos} todoOperations={todoOperations}/>
      <Footer/>
    </div>
  )
}

export default TodoApp
