import React from 'react';
import './MainFooter.css';

import logo from '../assets/images/logo.png'

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="footer-main-content">
                <div className="footer-identity-section">
                    <div className="footer-logo-box">
                        <div className="logo-icon-placeholder">
                            <img src={logo} alt="EventBox Logo" className="logo-img" /> 
                            <span className='fs-3'>&nbsp;&nbsp;EventNex</span>

                        </div>

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
                                <a href="/careers" className="footer-nav-link">Careers</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="/terms" className="footer-nav-link">Terms Of Service</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="/faqs" className="footer-nav-link">FAQ's</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="/contact" className="footer-nav-link">Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-nav-column">
                        <h4 className="footer-nav-title">Events</h4>
                        <ul className="footer-nav-list">
                            <li className="footer-nav-item">
                                <a href="/browse" className="footer-nav-link">Browse Events</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="/popular" className="footer-nav-link">Popular Events</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="/categories" className="footer-nav-link">Categories</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="/calendar" className="footer-nav-link">Calendar</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-nav-column">
                        <h4 className="footer-nav-title">Organizers</h4>
                        <ul className="footer-nav-list">
                            <li className="footer-nav-item">
                                <a href="/create" className="footer-nav-link">Create Event</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="/dashboard" className="footer-nav-link">Dashboard</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="/pricing" className="footer-nav-link">Pricing</a>
                            </li>
                            <li className="footer-nav-item">
                                <a href="/resources" className="footer-nav-link">Resources</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-bar">
                <div className="footer-social-links">
                    <a href="#facebook" aria-label="Facebook">
                        <span className="social-icon">ⓕ</span>
                    </a>
                    <a href="#twitter" aria-label="Twitter">
                        <span className="social-icon">✖</span>
                    </a>
                    <a href="#instagram" aria-label="Instagram">
                        <span className="social-icon">ⓘ</span>
                    </a>
                </div>

                <div className="footer-legal-links">
                    <span>© 2025 EventNex. All Rights Reserved</span>
                    <a href="/privacy-policy" className="legal-link">
                        Privacy Policy
                    </a>
                    <a href="/terms-of-service" className="legal-link">
                        Terms Of Service
                    </a>
                    <a href="/cookie-policy" className="legal-link">
                        Cookie Policy
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;