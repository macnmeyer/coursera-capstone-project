import React from 'react'
import Nav from './Nav'
import logo from '../assets/Logo.svg'
import './component_styles.css'

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt="Little Lemon Logo" />
      <Nav />
    </header>
  )
}

export default Header