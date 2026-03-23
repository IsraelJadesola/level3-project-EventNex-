import React, { useState, useEffect, useRef } from 'react'
import logo from '../assets/images/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({ children }) => {
    const [activeLink, setActiveLink] = useState('Our Services')
    const navRef = useRef(null)

    const handleNavClick = (linkName) => {
        setActiveLink(linkName)
    }

    useEffect(() => {
        const setOffset = () => {
            const h = navRef.current ? navRef.current.offsetHeight : 72
            document.documentElement.style.setProperty('--navbar-offset', `${h}px`)
        }

        setOffset()
        window.addEventListener('resize', setOffset)
        return () => window.removeEventListener('resize', setOffset)
    }, [])

    return (
        <>
            <nav ref={navRef} className={`navbar navbar-landing navbar-expand-lg fixed-top navbar-dark`}>
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
                    <div className="collapse navbar-collapse ms-lg-5" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ms-lg-5 ps-lg-5">
                            <li className="nav-item">
                                <Link
                                    to="/services"
                                    className={`nav-link ${activeLink === 'Our Services' ? 'active' : ''}`}
                                    onClick={() => handleNavClick('Our Services')}
                                >
                                    Our Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about"
                                    className={`nav-link ${activeLink === 'About Us' ? 'active' : ''}`}
                                    onClick={() => handleNavClick('About Us')}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/contact"
                                    className={`nav-link ${activeLink === 'Contact Us' ? 'active' : ''}`}
                                    onClick={() => handleNavClick('Contact Us')}
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/donate"
                                    className={`nav-link ${activeLink === 'Donate' ? 'active' : ''}`}
                                    onClick={() => handleNavClick('Donate')}
                                >
                                    Donate
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex flex-wrap auth-buttons">
                            <div className="button-group user-buttons">
                                <Link to='/signup'><button className="btn btn-signup" type="button">Sign Up</button></Link>
                                <Link to='/signin'><button className="btn btn-login" type="button">Login</button></Link>
                            </div>
                            <div className="button-group creator-buttons">
                                <Link to='/admin-signup'><button className="btn btn-creator-signup" type="button">Creator Sign Up</button></Link>
                                <Link to='/admin-signin'><button className="btn btn-creator-login" type="button">Creator Login</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {children}
        </>
    )
}

export default Navbar