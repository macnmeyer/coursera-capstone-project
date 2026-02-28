import React from 'react'
import './component_styles.css'
import iconHome from '../assets/icon-home.svg'
import iconAbout from '../assets/icon-about-us.svg'
import iconMenu from '../assets/icon-menu.svg'
import iconReserve from '../assets/icon-reserve.svg'
import iconOrder from '../assets/icon-order-online.svg'
import iconLogin from '../assets/icon-login.svg'
import { Link } from 'react-router'

const Nav = () => {
  return (
    <nav className='nav'>
      <ul>
        <li><Link to="/"><h1 className='lead-text'>Home</h1><img src={iconHome} alt="Home Icon" className='icon'></img></Link></li>
        <li><Link to="/about"><h1 className='lead-text'>About</h1><img src={iconAbout} alt="About Icon" className='icon'></img></Link></li>
        <li><Link to="/menu"><h1 className='lead-text'>Menu</h1><img src={iconMenu} alt="Menu Icon" className='icon'></img></Link></li>
        <li><Link to="/reservations"><h1 className='lead-text'>Reservations</h1><img src={iconReserve} alt="Reservations Icon" className='icon'></img></Link></li>
        <li><Link to="/order-online"><h1 className='lead-text'>Order Online</h1><img src={iconOrder} alt="Order Online Icon" className='icon'></img></Link></li>
        <li><Link to="/login"><h1 className='lead-text'>Login</h1><img src={iconLogin} alt="Login Icon" className='icon'></img></Link></li>
      </ul>
    </nav>
  )
}

export default Nav