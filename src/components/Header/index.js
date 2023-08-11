import React, { useState, useEffect } from 'react';
import './index.css';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [timerId, setTimerId] = useState(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleMouseEnter = () => {
        clearTimeout(timerId);
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setTimerId(setTimeout(() => {
            setIsDropdownOpen(false);
        }, 1000)); 
    };

    useEffect(() => {
        return () => {
            clearTimeout(timerId);
        };
    }, [timerId]);

    return (
        <header className="header">
            <nav className="navbar">
                <a href='/home' className="nav-logo">MediCo</a>
                <ul className="nav-links">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/service">Service</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li
                        className={`dropdown ${isDropdownOpen ? 'active' : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="/home" className="dropdown-toggle" onClick={toggleDropdown}>SUNITA</a>
                        <ul className="dropdown-menu">
                            <li><a href="/doctors">My Profile</a></li>
                            <li><a href="/login">Log Out</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
