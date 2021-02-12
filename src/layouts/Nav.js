import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store/actions/Action'
import '../Styles/nav.css'
import { logout as logoutH } from '../config'

const Nav = () => {
    const Authentication = useSelector(state => state.Authentication)
    const dispatch = useDispatch()
    const logoutHandler = () => {
        if (logoutH()) {
            dispatch(logout())
        }
    }
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
                        {Authentication.authenticated ? <p style={{ color: 'white', paddingTop: 6 }}>&#128516;{Authentication.user.first_name}<button onClick={() => logoutHandler()}>Logout</button> </p> : <Link to='/Login' className="nav-link">Login</Link>}
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
