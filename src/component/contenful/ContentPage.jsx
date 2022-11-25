import React, { useState, useEffect } from 'react'
import useContentful from './useContenful'
import AuthorCard from './AuthorCard';

export default function ContentPage() {
    const [authors, setAuthors] = useState([])
    const {getAuthors} = useContentful();

    useEffect(() => {
        getAuthors().then((response) => response && setAuthors(authors))
            console.log(authors)
    })

  return (
    <div>
        <h2>Calling Api from Contentful </h2>
        <div className="author">
           {authors.map((info) => <AuthorCard author={info}/>)} 
        </div>
    </div>
  )
}
