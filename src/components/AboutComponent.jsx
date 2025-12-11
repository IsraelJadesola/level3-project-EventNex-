import React from 'react'
import './AboutComponent.css'

import aboutImage1 from '../assets/images/about-1.jpg'
import aboutImage2 from '../assets/images/about-2.jpg'

const AboutUs = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-main-title">
                    <h1 className="about-title">About Us</h1>
                </div>

                <div className="about-content-wrapper">
                    <div className="about-images-column">
                        <div className="image-grid">
                            <img
                                src={aboutImage1}
                                alt="Event celebration and networking"
                                className="about-image-main"
                            />
                            <img
                                src={aboutImage2}
                                alt="Event planning and management"
                                className="about-image-secondary"
                            />
                        </div>
                    </div>

                    <div className="about-text-column">
                        <div className="about-text-content">
                            <h2>Creating Unforgettable Experiences, One Event at a Time</h2>

                            <p>
                                Welcome to EventNex, your all-in-one platform for creating,
                                managing, and experiencing unforgettable events.
                            </p>

                            <p>
                                We are committed to simplifying event planning for
                                organizers while delivering seamless booking and
                                attendance experiences for guests.
                            </p>

                            <p>
                                At EventNex, we believe every event—big or small—
                                deserves to run smoothly. From concerts and conferences
                                to community gatherings and private functions, our
                                platform brings together all the tools you need to manage
                                events efficiently.
                            </p>

                            <p>
                                With real-time analytics, secure ticketing, vendor
                                management, venue listings, and automated
                                communication, EventNex empowers you to focus on what
                                matters most: creating moments that inspire people.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs