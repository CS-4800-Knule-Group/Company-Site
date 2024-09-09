import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
        <div class="header-container">
        <img src="logo.png" alt="Logo" class="logo"/>
            <nav class="top-links">
                <Link to={'/'}>
                    <a href="#">Home</a>
                </Link>

                <a href="#">About</a>
                
                <Link to={'/Records'}>
                    <a href="#">Records</a>
                </Link>

                <a href="#">Contact</a>
            </nav>
        </div>
    </header>
  )
}

export default Header