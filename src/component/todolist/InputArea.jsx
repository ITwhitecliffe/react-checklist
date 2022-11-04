import React, { useState } from 'react'

function InputArea() {
    const [inputArea, setInputArea] = useState('')
    const handleChange = (e) => {
        const inputText = e.target.value
        setInputArea(inputText)
    }
    
  return (
    <div>
      <input onChange={handleChange} type='text' value={inputArea} />
    </div>
  )
}

export default InputArea
