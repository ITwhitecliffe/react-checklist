import React from 'react'
import './footerstyle.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <div className='footer'>
      Copyright © {currentYear}
    </div>
  )
}
