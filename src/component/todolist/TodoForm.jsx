import React from 'react'
import { useState } from 'react'

function TodoForm({addTodo}) {
const [input, setInput] = useState('')
const handleChange = e => {
    setInput(e.target.value)
}

const addOne = e => {
    e.preventDefault()
    addTodo(input)
    setInput('')
}
  return (
    <>
        <input placeholder="what's next" value={input} onChange={handleChange} /><span><button onClick={addOne}>+</button></span>
    </>
  )
}

export default TodoForm
