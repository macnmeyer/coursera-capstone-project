import React from 'react'
import './component_styles.css'
import logo from '../assets/Logo.svg'

const Links = [
  { name: "Home", href: "#" },
  { name: "Menu", href: "#" },
  { name: "Reservations", href: "#" },
  { name: "Order Online", href: "#" },
  { name: "Login", href: "#" }
]
const ContactInfo = [
  { type: "Address", value: "123 Main Street, Anytown, USA" },
  { type: "Phone", value: "(123) 456-7890" },
  { type: "Email", value: "info@littlelemon.com" }
]
const SocialMedia = [
  { platform: "Facebook", href: "https://www.facebook.com/" },
  { platform: "Twitter", href: "https://www.twitter.com/" },
  { platform: "Instagram", href: "https://www.instagram.com/" }
]

const Footer = () => {
  return (
    <footer className="footer">
      <figure className="footer-logo">
        <div className="footer-logo-container">
          <img src={logo} alt="Little Lemon Logo" />
        </div>
      </figure>
      <div className="copyright">
        <p>© 2026 Little Lemon. All rights reserved.</p>
      </div>
      <nav className="footer-nav">
        <section className="footer-nav-links">
          <h1 className="lead-text">Links</h1>
          <ul className="footer-link-list">
            {Links.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="footer-link">{link.name}</a>
              </li>
            ))}
          </ul>
        </section>
        <section className="footer-nav-contact">
          <h1 className="lead-text">Contact</h1>
          <ul className="footer-link-list">
            {ContactInfo.map((info) => (
              <li key={info.type}>
                <p className="footer-link">{info.type}: {info.value}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="footer-nav-social">
          <h1 className="lead-text">Social Media</h1>
          <ul className="footer-link-list">
            {SocialMedia.map((social) => (
              <li key={social.platform}>
                <a href={social.href} className="footer-link">{social.platform}</a>
              </li>
            ))}
          </ul>
        </section>    
      </nav>
    </footer>
  )
}

export default Footer