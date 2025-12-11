import React from 'react';
import './LandingCardComponent1.css';

import calendarIcon from '../../assets/images/calender-icon.png';
import ticketIcon from '../../assets/images/ticket-icon.png';

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="service-card">
            <div className="card-icon-container">
                <img src={icon} alt={`${title} Icon`} className="card-icon" />
            </div>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </div>
    );
};

const LandingCardComponent1 = () => {
    return (
        <section className="landing-card-section">
            <div className="card-container">
                <div className="card-wrapper">
                    <ServiceCard
                        icon={calendarIcon}
                        title="Event Management"
                        description="We provide end-to-end event management solutions designed to make planning seamless and stress-free. Whether you're hosting a concert, seminar, festival, wedding, or corporate gathering, our team ensures smooth execution from start to finish."
                    />
                    <ServiceCard
                        icon={ticketIcon}
                        title="Ticket Booking & Registration"
                        description="We offer a fast, secure, and user-friendly ticketing system built for all types of events. Attendees can book tickets effortlessly, while organizers enjoy full control over ticket sales."
                    />
                </div>
            </div>
        </section>
    );
};

export default LandingCardComponent1;