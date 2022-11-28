import React from 'react'

function AuthorCard({avatars}) {
  console.log(avatars)
  const {name, description, image} = avatars
  return (
    <div>
     
    <img src={image} alt='profile' className='profile'/>
      <h3>{name}</h3>
      <p>{description}</p>
    {/* <img src={avatars.image} alt='profile'/>
      <h3>{avatars.name}</h3>
      <p>{avatars.description}</p> */}
    </div>
  )
}

export default AuthorCard
