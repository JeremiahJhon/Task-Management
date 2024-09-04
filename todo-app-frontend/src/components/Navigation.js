import React from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
