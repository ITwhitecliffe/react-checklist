import React from 'react'
import Checker from './Checker'

function Todo({todo, todoOperations}) {

  const doRemove = (e) => {
    e.preventDefault();
    todoOperations.removeTodo(todo)
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