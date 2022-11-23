import React, { useState } from 'react'
import { useEffect } from 'react';
import domPic from '../images/dom.jpg';
import './home.css'
import useContentful from '../useContenful'
import AuthorCard from './AuthorCard';


export default function Home() {
    const {authors, setAuthors} = useState([])
    const {getAuthors} = useContentful();

    useEffect(() => {
        // console.log(response)
        getAuthors()
        .then(
            (avatar) => setAuthors(avatar)
            )
    })

    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
        // setInterval(() => {
        //     navigate("/todos");
        // }, 1000)
    };



    return (
        <div className='page-container'>
            <div className="flex">
                <h2 className='purple'>Hello, this is a React practice land... </h2>
                <h2 className='purple'><label>Checklist <input className='checkbox' type="checkbox" checked={checked} onChange={handleChange} /></label></h2>
            </div>
            <img className='responsive' src={domPic} alt='dom' />
            <div className="author">
            {authors.map((author, index) => <AuthorCard key={index} author={author} />)}
            </div>
        </div>
    )
}
