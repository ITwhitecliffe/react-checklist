import React, { useState } from 'react'
import { useEffect } from 'react';
import domPic from '../images/dom.jpg';
import './home.css'


export default function Home() {

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

        </div>
    )
}
