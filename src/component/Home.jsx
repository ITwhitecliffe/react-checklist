import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import domPic from '../images/dom.jpg';
import './home.css'

export default function Home() {
    const [checked, setChecked] =useState(false);
    const navigate = useNavigate()
    const handleChange = () => {
        setChecked(!checked);
        setInterval(() => {
            navigate("/todos");
        }, 500)
    };

    return (
        <div className='page-container'>
            <div className="flex">
                <h2 className='purple'>Hello, this is a React practice land... </h2>
                <h2 className='purple'><label>Checklist <input className='checkbox' type="checkbox" checked={checked} onChange={handleChange} /></label></h2>
            </div>
            {/* <ul className='steps'>1. Download Node.Js  <a href='https://nodejs.org/en/'>https://nodejs.org/en/</a></ul>
      <ul className='steps'>2.  At the terminal, cd (change directory) to the folder you like to store your app:
        npx create-react-app your-app-name

        or if you already create your folder, you can cd to the folder
        npx create-react-app . <br/>
         It take a few minutes, you will see --> happy hacking
        cd your-app-name
        To open the folder in visual studio code</ul>
      <ul className='steps'>3. To start the app on your browser npm start</ul> */}
            <img className='responsive' src={domPic} alt='dom' />

        </div>
    )
}
