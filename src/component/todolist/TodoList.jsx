import React, { useState } from 'react'
import TodoCard from './TodoCard'
import './todo-style.css'

function TodoList() {
  const [input, setInput] = useState()
  const [tasks, setTasks] = useState([])

  const handleInput = (event) => {
    const newInput = event.target.value
    setInput(newInput)
  }
  
  const addTask = () => {
    setTasks( tasks => [...tasks, input])
    setInput('')
  }

  const deleteTask = (id) => {
   console.log(id);
   setTasks( (currentList) => 
     currentList.filter((_item, index) => index !== id)
    )
  }

  return (
    <div className="monsters">
      <input placeholder='new item...' onChange={handleInput} /> <span><button className="btn-add" onClick={addTask}>+</button></span>

      <div className="monster-array">
        {tasks.map((task, index) => <TodoCard key={index} id={index} text={task} remove={deleteTask}/> )}
      </div>
    </div>
  )
}

export default TodoList
