import React from 'react'
import './header.css'
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className='column-12'>
       <Link className="btn-link" to={'/'}><h3>Intro to React</h3></Link> 
       <Link className="btn-link" to={'/react'}>Learn React</Link> 
       <Link className="btn-link" to={'/hello'}>Hello</Link> 
       <Link className="btn-link" to={'/todo'}>To do List</Link> 
       <Link className="btn-link" to={'/checklist'}>Checklist</Link> 
       <Link className="btn-link" to={'/monsters'}>Monsters</Link> 
       <Link className="btn-link" to={'/contentful'}>Api</Link> 
    </div>
  )
}
