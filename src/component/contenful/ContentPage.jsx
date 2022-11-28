import React, { useState, useEffect } from 'react'
import AuthorCard from './AuthorCard';
import useContentful from './useContenful'


export default function ContentPage() {
    const [pageInfo, setPageInfo] = useState([])
    // {id: '', name: '', description: '', image: ''}
    // {avatars : [{id: '', name: '', description: '', image: ''}]}
    const {getAuthors} = useContentful();
      
      useEffect(() => {
        getAuthors()
        .then((response) => {
          let pageInfo = response
              // console.log(pageInfo)
              // response &&
            //  console.log(pageInfo)
            setPageInfo(pageInfo)})
            // console.log( pageInfo.id, pageInfo.name,pageInfo.description,pageInfo.image)
    },[])
  
    // console.log(pageInfo)
  return (
    <div>
        <h2>Calling Api from Contentful </h2>
        <div className="author">
            {pageInfo.map((author) => {
              console.log(author)
              //  return <div key={author.id}><h3>{author.name} </h3>{author.description}</div>
              return <div key={author.id}> <AuthorCard avatars={author}/></div>
             })} 
        </div>
    </div>
  )
}
