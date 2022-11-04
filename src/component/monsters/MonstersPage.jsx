import React, { useState } from 'react'
import MonsterList from "./MonsterList";
import monsterData from '../../data/monsterData.js'
import Search from "./Search";

function MonstersPage() {
    const [currentList, setCurrentList] = useState(monsterData)

    const searchMonster = (text) => {
        console.log(text)
        setCurrentList(
          // const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
          // const result = words.filter(word => word !== 'spray');
          // console.log(result);
    
          // full name matches 
          // monsterData.filter(monster => monster.name === text )
    
          // full name matches and search is empty 
          // monsterData.filter(monster => !text || monster.name === text )
    
          // partial name match 
          //monsterData.filter(monster => monster.name.indexOf(text) !== -1)
    
          // partial name match insensitive 
          monsterData.filter(monster => monster.name.toLowerCase().indexOf(text.toLowerCase()) !== -1)
        )
      }

    const addMonster = (newMonster) => {
        setCurrentList( currentList => [...currentList, newMonster])
    }


  return (
      <div className='page'>
      <h1>Some monsters live here</h1>
      <Search search={searchMonster}/>
      <MonsterList monstersssssssss={currentList} />
        <button className='btn-add' onClick={addMonster}>+</button>
    </div>
  )
}

export default MonstersPage 