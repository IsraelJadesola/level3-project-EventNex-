import React from 'react';
import './MainFooter.css';
import { Link } from 'react-router-dom'


import logo from '../assets/images/logo.png'

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="footer-main-content">
                <div className="footer-identity-section">
                    <div className="footer-logo-box">
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                            <div className="logo-icon-placeholder">
                                <img src={logo} alt="EventBox Logo" className="logo-img" />
                                <span className='fs-3'>&nbsp;&nbsp;EventNex</span>
                            </div>
                        </Link>

                    </div>
                    <p className="footer-description">
                        Your premier destination for discovering and booking amazing events. From concerts to conferences, we've got you covered.
                    </p>
                    <div className="footer-contact-info">
                        <p>
                            <span className="icon-mail">✉</span> israeljadesola20000@gmail.com
                        </p>
                        <p>
                            <span className="icon-phone">📞</span> +2349131007061
                        </p>
                    </div>
                </div>

                <div className="footer-nav-links-group">
                    <div className="footer-nav-column">
                        <h4 className="footer-nav-title">About Us</h4>
                        <ul className="footer-nav-list">
                            <li className="footer-nav-item">
                                <Link to="/careers" className="footer-nav-link">Careers</Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/terms" className="footer-nav-link">Terms Of Service</Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/faq" className="footer-nav-link">FAQ's</Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/privacy" className="footer-nav-link">Privacy Policy</Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/cookies" className="footer-nav-link">Cookies Policy</Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/contact" className="footer-nav-link">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-nav-column">
                        <h4 className="footer-nav-title">Events</h4>
                        <ul className="footer-nav-list">
                            <li className="footer-nav-item">
                                <Link to="/dashboard" className="footer-nav-link">Browse Events</Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link to="/dashboard" className="footer-nav-link">Popular Events</Link>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Categories</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Calendar</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-nav-column">
                        <h4 className="footer-nav-title">Organizers</h4>
                        <ul className="footer-nav-list">
                            <li className="footer-nav-item">
                                <Link to="admin-dashboard" className="footer-nav-link">Create Event</Link>
                            </li>

                            <li className="footer-nav-item">
                                <Link to="/dashboard" className="footer-nav-link">Dashboard</Link>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Pricing</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Resources</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-bar">
                <div className="footer-social-links">
                    <a href="https://www.facebook.com/profile.php?id=61553001491901&mibextid=rS40aB7S9Ucbxw6v" aria-label="Facebook">
                        <span className="social-icon">ⓕ</span>
                    </a>
                    <a href="https://x.com/Webinfinity001" aria-label="Twitter">
                        <span className="social-icon">✖</span>
                    </a>
                    <a href="https://www.instagram.com/eazy_build_/" aria-label="Instagram">
                        <span className="social-icon">ⓘ</span>
                    </a>
                </div>

                <div className="footer-legal-links">
                    <span>© 2025 EventNex. All Rights Reserved</span>
                    <Link to="/privacy" className="legal-link">
                        Privacy Policy
                    </Link>
                    <Link to="/terms" className="legal-link">
                        Terms Of Service
                    </Link>
                    <Link to="/cookies" className="legal-link">
                        Cookie Policy
                    </Link>
                </div>
            </div>
        </footer >
    );
};

export default Footer;