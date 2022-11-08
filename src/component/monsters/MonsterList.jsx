import React from 'react'
import Monster from './Monster'
import './monster-style.css'

function MonsterList(props) {
  return (
    <>
        {/* MonsterList */}
        <div className='listofmonster'>
        {props.monstersssssssss.map( (info, index) => <Monster key={index} id={index} monstersssssssss={info}/>)}
        {/* {props.monstersssssssss.map( monster => monster.id)} */}
        </div>
    </>
  )
}

export default MonsterList