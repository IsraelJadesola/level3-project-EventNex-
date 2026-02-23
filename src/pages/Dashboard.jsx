import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserDashboardNavbar from '../components/UserDashboardNavbar'
import MainFooter from '../components/MainFooter'
import './Dashboard.css'

const Dashboard = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user")

    if (storedUser) {
      setUser(JSON.parse(storedUser))
    } else {
      navigate('/signin');
    }
  }, [navigate]);

  if (!user) {
    return null
  }

  return (
    <>
      <UserDashboardNavbar />
      <div className="dashboard-container">
        <section className="welcome-section">
          <div className="welcome-content">
            <div>
              <h1>Welcome, <span className="highlight">{user.firstName}!</span></h1>
              <p className="welcome-subtitle">Discover and join amazing events</p>
            </div>
            <div className="quick-actions">
              <button className="btn btn-secondary-action">Browse Events</button>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-icon">📅</div>
              <div className="stat-content">
                <h3>Upcoming Events</h3>
                <p className="stat-number">5</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">✓</div>
              <div className="stat-content">
                <h3>Completed</h3>
                <p className="stat-number">12</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⭐</div>
              <div className="stat-content">
                <h3>Interested</h3>
                <p className="stat-number">8</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-content">
                <h3>Attendees</h3>
                <p className="stat-number">156</p>
              </div>
            </div>
          </div>
        </section>

        <section className="events-section">
          <div className="section-header">
            <h2>Your Upcoming Events</h2>
            <a href="#" className="view-all">View All →</a>
          </div>

          <div className="events-grid">
            <div className="event-card">
              <div className="event-date">
                <span className="event-month">Mar</span>
                <span className="event-day">15</span>
              </div>
              <div className="event-details">
                <h3>Tech Conference 2026</h3>
                <p className="event-category">🏢 Conference</p>
                <p className="event-info"><span className="info-icon">📍</span> New York, NY</p>
                <p className="event-info"><span className="info-icon">👥</span> 234 Attendees</p>
                <button className="btn btn-event-action">View Details</button>
              </div>
            </div>

            <div className="event-card">
              <div className="event-date">
                <span className="event-month">Mar</span>
                <span className="event-day">22</span>
              </div>
              <div className="event-details">
                <h3>Design Workshop</h3>
                <p className="event-category">🎨 Workshop</p>
                <p className="event-info"><span className="info-icon">📍</span> San Francisco, CA</p>
                <p className="event-info"><span className="info-icon">👥</span> 48 Attendees</p>
                <button className="btn btn-event-action">View Details</button>
              </div>
            </div>

            <div className="event-card">
              <div className="event-date">
                <span className="event-month">Apr</span>
                <span className="event-day">05</span>
              </div>
              <div className="event-details">
                <h3>Networking Mixer</h3>
                <p className="event-category">🤝 Networking</p>
                <p className="event-info"><span className="info-icon">📍</span> Los Angeles, CA</p>
                <p className="event-info"><span className="info-icon">👥</span> 156 Attendees</p>
                <button className="btn btn-event-action">View Details</button>
              </div>
            </div>
          </div>
        </section>

        <section className="categories-section">
          <h2>Browse by Category</h2>
          <div className="categories-grid">
            <div className="category-card">🏢 Business</div>
            <div className="category-card">🎨 Arts & Design</div>
            <div className="category-card">🎮 Technology</div>
            <div className="category-card">🎭 Entertainment</div>
            <div className="category-card">⚽ Sports</div>
            <div className="category-card">🍽️ Food & Drink</div>
          </div>
        </section>
      </div>
      <MainFooter />
    </>
  )
}

export default Dashboard