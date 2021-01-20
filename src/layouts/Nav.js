import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Styles/nav.css'

const Nav = () => {
    return (
        <nav className='nav-menu'>
            <div className="nav-container">
                <ul className="nav-menu-item">
                    <li className="nav-item">
                        <Link to='/' className='nav-link'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/favourite' className="nav-link">Favourites</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/read-later' className="nav-link">Read Later</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
