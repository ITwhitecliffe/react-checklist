import React from 'react'
import './header.css'
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className='column-12'>
       <Link className="btn-link" to={'/'}>Home</Link> 
        <h3>Intro to React</h3>
       <Link className="btn-link" to={'/'}></Link> 
      {/* <span>1. Record your thoughts   |   2. Prioritize your thoughts   |   3. Separate complex thoughts   |   4. Reflect on your thoughts   |   5. Develop a consistent routine</span> */}
    </div>
  )
}
