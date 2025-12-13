import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import './Navbar.css'

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Our Services')

    const handleNavClick = (linkName) => {
        setActiveLink(linkName)
    }

    return (
        <div>
            <nav className={`navbar navbar-expand-lg fixed-top navbar-dark`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" className='rounded-5' />
                    </a>
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
                            <button className="btn btn-signup" type="button">Sign Up</button>
                            <button className="btn btn-login" type="button">Login</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar