import React from 'react'
import AuthorCard from './AuthorCard'

function Authors( {avatars} ) {
  return (
    <div>
         {avatars.map((avatar, id) => <AuthorCard key={id} avatar={avatar} />)}
    </div>
  )
}

export default Authors