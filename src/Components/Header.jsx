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
                <Link to={'/About'}>
                    <a href="#">About</a>
                </Link>
                <Link to={'/Records'}>
                    <a href="#">Records</a>
                </Link>
                <Link to={'/Contact'}>
                    <a href="#">Contact</a>
                    </Link>

                
            </nav>
        </div>
    </header>
  )
}

export default Header