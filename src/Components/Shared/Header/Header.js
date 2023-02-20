import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='nav-bar'>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="signup">Signup</Link>
        </div>
    );
};

export default Header;