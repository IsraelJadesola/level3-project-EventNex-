import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import './User&AdminDashboardNavbar.css'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Our Services')

    const handleNavClick = (linkName) => {
        setActiveLink(linkName)
    }
    const navigate = useNavigate()


    const logout = () => {
        localStorage.removeItem('user')
        navigate('/signin')
    }

    return (
        <div>
            <nav className={`navbar navbar-dashboard navbar-expand-lg fixed-top navbar-dark`}>
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">
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
                                <Link
                                    className={`nav-link ${activeLink === 'Our Services' ? 'active' : ''}`}
                                    to="/services"
                                    onClick={() => handleNavClick('Our Services')}
                                >
                                    Our Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activeLink === 'About Us' ? 'active' : ''}`}
                                    to="/about"
                                    onClick={() => handleNavClick('About Us')}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activeLink === 'Contact Us' ? 'active' : ''}`}
                                    to="/contact"
                                    onClick={() => handleNavClick('Contact Us')}
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${activeLink === 'Book a slot' ? 'active' : ''}`}
                                    to="/admin-dashboard"
                                    onClick={() => handleNavClick('Book a slot')}
                                >
                                    Book a slot
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button className="btn btn-logout" type="button" onClick={logout}>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar