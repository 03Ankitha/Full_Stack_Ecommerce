import React from 'react'
import './Navbar.css'
import logo from '../Assets/photo.png'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-logo">
      <img src={logo} alt="logo" />
        <p>Hardware Hub</p>
      </div>
    </div>
  )
}

export default Navbar
