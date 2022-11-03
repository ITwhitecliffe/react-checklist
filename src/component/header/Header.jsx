import React from 'react'
import './header.css'
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className='column-12'>
       <Link className="btn-link" to={'/'}>Home</Link> 
        <h3>Intro to React</h3>
       <Link className="btn-link" to={'/edit'}></Link> 
       <Link className="btn-link" to={'/hello'}></Link> 
    </div>
  )
}
