import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo" />
      </div>
      <div className='navbar-links'>
        <a href="#">About</a>
        <a href="#">Works</a>
        <a href="#">Contact</a>
        <a href="#"><button className='app-button'>Resume</button></a>
      </div>
      
    </nav>
  )
}

export default Navbar