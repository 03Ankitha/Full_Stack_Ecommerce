import React from 'react'
import './Footer.css'

import footer_logo from '../Assets/photo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Hardware Hub</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram_icon} alt="" />
        </a>
        </div>
        <div className="footer-icons-container">
        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            <img src={pintrest_icon} alt="" />
        </a>
        </div>
        <div className="footer-icons-container">
        <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp_icon} alt="" />
        </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        
      </div>
    </div>
  )
}

export default Footer
