import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({ children }) => {
    const [activeLink, setActiveLink] = useState('Our Services')

    const handleNavClick = (linkName) => {
        setActiveLink(linkName)
    }

    return (
        <>
            <nav className={`navbar navbar-landing navbar-expand-lg fixed-top navbar-dark`}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="Logo" className='rounded-5' />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${activeLink === 'Our Services' ? 'active' : ''}`}
                                    href="#"
                                    onClick={() => handleNavClick('Our Services')}
                                >
                                    Our Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${activeLink === 'About Us' ? 'active' : ''}`}
                                    href="#"
                                    onClick={() => handleNavClick('About Us')}
                                >
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${activeLink === 'Contact Us' ? 'active' : ''}`}
                                    href="#"
                                    onClick={() => handleNavClick('Contact Us')}
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${activeLink === 'Book a slot' ? 'active' : ''}`}
                                    href="#"
                                    onClick={() => handleNavClick('Book a slot')}
                                >
                                    Book a slot
                                </a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <Link to='/signup'><button className="btn btn-signup" type="button">Sign Up</button></Link>
                            <Link to='/signin'><button className="btn btn-login" type="button">Login</button></Link>
                        </div>
                    </div>
                </div>
            </nav>
            {children}
        </>
    )
}

export default Navbar