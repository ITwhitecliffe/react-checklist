import React, { useState } from 'react'

function Hello() {
    const [input, setInput] = useState('')
    const [userName, setUserName] = useState('')

    const handleChange =(e) => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        setUserName(input)
    }

  return (
    <div className='page'>
        <h1>Hello {userName}</h1>
        <form onSubmit={handleClick}>
            <input onChange={handleChange} type='text' placeholder="what is your name?" value={input}/>
            {/* we use type= submit to specific which button to react when we submit the form */}
            <button type="submit">Submit</button>
        </form>

            {/* if we are not using form, we can do handleClick on the button. But form will give more html form behavior */}
            {/* <button onClick={handleClick}>Submit</button> */}
    </div>
  )
}


export default Hello    
