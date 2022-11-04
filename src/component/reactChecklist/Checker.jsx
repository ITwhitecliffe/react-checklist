import React, { useState } from 'react'

function Checker() {
    const [checked, setChecked] =useState(false);

    const handleCheck = () => {
      setChecked(!checked);
      }
  return (
    <div>
       <input className='checkbox' type="checkbox" checked={checked} onChange={handleCheck}/>
    </div>
  )
}

export default Checker
