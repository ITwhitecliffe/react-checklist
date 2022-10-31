import React, { useState } from 'react'
import './cardstyle.css'
import Checker from './Checker'
import Todo from './Todo'

function TodoList({todos, todoOoerations}) {
// function StudyList(props) {


  return (
    <div  className='card-list'>
      {todos.map(todo => (
        // <div className='card' key={todo.id}>
        //   <h3>{todo.id}</h3><span></span>
        //   <p>{todo.task}</p>
        //     <Checker/>
        //     <button className='remove'>x</button>
        //   </div>
        <Todo key={todo.id} todo={todo} todoOoerations={todoOoerations}/>
        )
      )}
    </div>
  )
}

export default TodoList
