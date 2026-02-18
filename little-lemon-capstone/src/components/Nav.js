import React from 'react'
import './component_styles.css'

const Nav = () => {
  return (
    <nav className='nav'>
      <ul>
        <li><h1 className='lead-text'>Home</h1></li>
        <li><h1 className='lead-text'>About</h1></li>
        <li><h1 className='lead-text'>Menu</h1></li>
        <li><h1 className='lead-text'>Reservations</h1></li>
        <li><h1 className='lead-text'>Order Online</h1></li>
        <li><h1 className='lead-text'>Login</h1></li>
      </ul>
    </nav>
  )
}

export default Nav