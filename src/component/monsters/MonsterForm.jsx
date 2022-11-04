import React, { useState } from 'react'

function MonsterForm(props) {
    const [inputArea, setInputArea] = useState({name: '', description: ''})
    

    const handleChange = () => {
        const name = e.target.name
        const value = e.target.value
        setInputArea({
            ...inputArea,
            [name] : value
        })
    }

  return (
    <div>
        <form onSubmit={handleClick}>
            <input name='name' onChange={handleChange} placeholder='Name' value={inputArea.name} />
            <input name='description' onChange={handleChange} placeholder='Description...' value={inputArea.description} />
            <button type="submit" onClick ={props.addMonster}>Submit</button>
        </form>
    </div>
  )
}

export default MonsterForm