import React from 'react'
import Nav from './Nav'
import logo from '../assets/Logo.svg'
import './component_styles.css'
import hamMenu from '../assets/icon-hamburger-menu.svg'
import basket from '../assets/Basket.svg'
import { useState, useRef, useEffect } from 'react'

function toggleHamburgerMenu() {
  const hamMenuExpanded = document.querySelector('.hamburger-menu-expanded')
  const mainContent = document.querySelector('.main')
  if (hamMenuExpanded.style.display === 'flex') {
    hamMenuExpanded.style.display = 'none'
    mainContent.style.filter = 'brightness(100%) blur(0px) opacity(1)'
  } else {
    hamMenuExpanded.style.display = 'flex'
    mainContent.style.filter = 'brightness(50%) blur(0.5px) opacity(0.5)'
  }
}

const Header = () => {
  return (
    <>
    <header className='header'>
      <img src={hamMenu} alt="Hamburger Menu Icon" className="icon" id='hamMenu' onClick={toggleHamburgerMenu} />
      <img src={logo} alt="Little Lemon Logo" id='header-logo'/>
      <Nav />
      <img src={basket} alt="Basket Icon" className="icon"/>
    </header>
    <nav className="hamburger-menu-expanded">
      <Nav />
    </nav>
    </>
  )
}

export default Header