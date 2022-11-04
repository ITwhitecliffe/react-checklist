import React from 'react'

function Search(props) {
    
  return (
    <div>
        <input placeholder='search the monster...' onChange={(e) => props.search(e.target.value)}/>
        {/* <button>Search</button> */}
    </div>
  )
}

export default Search 