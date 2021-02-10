import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../Styles/nav.css'

const Nav = () => {
    const Authentication = useSelector(state => state.Authentication)
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
                        <Link to='/ReadLater' className="nav-link">Read Later</Link>
                    </li>
                    <li className="nav-item">
                        {Authentication.authenticated ? <p style={{ color: 'white', paddingTop: 6 }}>&#128516;{Authentication.user.first_name}</p> : <Link to='/Login' className="nav-link">Login</Link>}
                    </li>
                    {/* <li className="nav-search">
                        <input type="text" placeholder='Search here...' />
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Nav
