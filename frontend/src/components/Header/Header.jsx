import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'
const Header = () => {
    return (
        <header className="header">
            <NavLink to="/">Home</NavLink>
            <div className="user">
                <NavLink to="/login">Log in</NavLink>
                <NavLink to="/register">Register</NavLink>
            </div>
        </header>
    )
}

export default Header
