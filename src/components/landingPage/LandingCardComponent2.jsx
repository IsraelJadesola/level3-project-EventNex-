import React from 'react';
import './LandingCardComponent2.css';

import sparkleIcon from '../../assets/images/spark-icon.png';
import calendarCheckIcon from '../../assets/images/calender-icon.png';
import ticketSecureIcon from '../../assets/images/ticket-icon.png';
import chartIcon from '../../assets/images/growth-graph.png';
import toolsIcon from '../../assets/images/tools.png';

const SmallFeature = ({ icon, text }) => {
    return (
        <div className="small-feature">
            <img src={icon} alt={text} className="small-feature-icon" />
            <p className="small-feature-text">{text}</p>
        </div>
    );
};

const LandingCardComponent2 = () => {
    return (
        <section className="landing-card-section-2">
            <div className="card-container-2">
                <h2 className="main-title">Why Choose Us</h2>
                
                <div className="content-grid-2">
                    
                    <div className="stats-column">
                        <div className="stats-row top-stats">
                            <div className="stat-box">
                                <span className="stat-number">500+</span>
                                <span className="stat-label">Events</span>
                            </div>
                            <div className="stat-box">
                                <span className="stat-number">100k+</span>
                                <span className="stat-label">Users</span>
                            </div>
                        </div>

                        <div className="stat-box bottom-stat">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Client satisfaction</span>
                        </div>
                    </div>

                    <div className="features-column">
                        
                        <div className="highlight-box">
                            <div className="highlight-content">
                                <img src={sparkleIcon} alt="Sparkle Icon" className="highlight-icon" />
                                <div>
                                    <h3 className="highlight-title">Our Unique Touch</h3>
                                    <p className="highlight-description">
                                        We blend creativity with technical expertise to produce events
                                        that stand out and leave lasting impressions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="small-features-row">
                            <SmallFeature icon={calendarCheckIcon} text="Easy Event Management" />
                            <SmallFeature icon={ticketSecureIcon} text="Quick & Secure Ticketing" />
                            <SmallFeature icon={chartIcon} text="Real-Time Insights" />
                            <SmallFeature icon={toolsIcon} text="All Tools in One Place" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingCardComponent2;