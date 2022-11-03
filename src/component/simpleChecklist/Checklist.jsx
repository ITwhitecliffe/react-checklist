import React, { useState } from 'react'

function Checklist() {
    const [inputText, setInputText] = useState('')
    const [items, setItems] = useState([])

    const handleChange = (e) => {
        const newValue = e.target.value
        setInputText(newValue)
    }
    const addItem = () => {
        setItems(
            checklist => {
                return [...checklist, inputText]
            }
        )
        setInputText('')
    }

  return (
    <div className='page'>
        <h1>Get organize</h1>
        <div>
            <input placeholder="Add item..." value={inputText} onChange={handleChange} />
            <span><button onClick={addItem}>+</button></span>
        </div>
        <div className='card-list'>
            {items.map(item => <div className='card'>{item}</div>)}
        </div>
    </div>
  )
}

export default Checklist