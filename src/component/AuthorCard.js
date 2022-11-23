import React from 'react'

function AuthorCard( {author}) {
  return (
    <div>
    <img src={author.avatar.file.url} alt='profile'/>
      <h3>{author.name}</h3>
      <p>{author.description}</p>
    </div>
  )
}

export default AuthorCard
