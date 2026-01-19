import React from 'react';
import './LandingCardComponent3.css';

import google from '../../assets/images/google-icon.png'
import ticketWhite from '../../assets/images/white-ticket.png'
import spotify from '../../assets/images/spotify-icon.png'
import recorder from '../../assets/images/record-icon.png'

const LandingCardComponent3 = () => {
    return (
        <div className="trusted-by-section">
            <h2 className="trusted-by-heading">Trusted By</h2>
            <div className="logo-list">
                <div className="logo-item">
                    <div className="logo-content">
                        <img src={google} alt="Google Icon" className="logo-icon" />
                        <span className="logo-text">Google</span>
                    </div>
                </div>
                <div className="logo-item">
                    <div className="logo-content">
                        <img src={ticketWhite} alt="Ticketmaster Icon" className="logo-icon" />
                        <span className="logo-text">Ticketmaster</span>
                    </div>
                </div>
                <div className="logo-item">
                    <div className="logo-content">
                        <img src={spotify} alt="Spotify Icon" className="logo-icon" />
                        <span className="logo-text">Spotify</span>
                    </div>
                </div>
                <div className="logo-item">
                    <div className="logo-content">
                        <img src={recorder} alt="Live Nation Icon" className="logo-icon" />
                        <span className="logo-text">Live Nation</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingCardComponent3;