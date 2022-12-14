import React from 'react'
import './monster-style.css'

export default function Monster({monstersssssssss}) {
  return (
    <div className='card'>
        <h4>{monstersssssssss.id}</h4>
       <h4>{monstersssssssss.name}</h4> 
        <img className='avatar'
        alt={`monster ${monstersssssssss.name}`}
        src={`https://robohash.org/${monstersssssssss.id}?set=set2&size=180x180`}
      />
        <p>{monstersssssssss.description}</p>
    </div>
  )
}
