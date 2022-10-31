import React from 'react'
import Checker from './Checker'

function Todo({todo, todoOoerations}) {

  const doRemove = (e) => {
    e.preventDefault();
    todoOoerations.removeTodo(todo)
  }

  return (
    <div  className='card'>
        <h3>{todo.id}</h3>
        {todo.task}
        <Checker />
        <button onClick={doRemove}>x</button>
    </div>
  )
}

export default Todo