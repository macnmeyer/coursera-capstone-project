import React from 'react'
import Nav from './Nav'
import logo from '../assets/Logo.svg'

const Header = () => {
  return (
    <>
        <image src={logo} alt="Little Lemon Logo"></image>
        <Nav></Nav>
    </>
  )
}

export default Header