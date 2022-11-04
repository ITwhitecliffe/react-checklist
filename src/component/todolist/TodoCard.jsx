import React, { useState } from 'react'

function TodoCard(props) {

  const [isDone, setIsDone] = useState(false)

  const setToComplete = () => {
    setIsDone(complete => !complete)
  }

  return (
    <div className='card'>
      <li style={{textDecoration: isDone ? "line-through" : "none"}} onClick={setToComplete}>{props.text}</li>
      <button className="btn-minus"  onClick={() => props.remove(props.id)}>-</button>
    </div>
  )
}

export default TodoCard
