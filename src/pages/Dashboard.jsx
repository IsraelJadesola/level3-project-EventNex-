import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css'
import Navbar from '../components/UserNavbar';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([])
  const [loadingEvents, setLoadingEvents] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('User token')

    if (!token) {
      navigate('/signin');
      return
    }

    axios.get("http://localhost:3000/user/dashboard", {
      headers: { "authorization": token }
    })

      .then(() => {
        const storedUser = localStorage.getItem("userData")
        if (!storedUser) {
          navigate('/signin');
          return
        }

        setUser(JSON.parse(storedUser))

        // const timer = setTimeout(() => {
        //   console.log("Session expired automatically");
        //   localStorage.removeItem('user');
        //   localStorage.removeItem('User token');
        //   navigate("/signin");
        // }, 100000);

        // return () => clearTimeout(timer)

      }).catch(err => {
        console.log("Session expired!", err);
        localStorage.removeItem('userData');
        localStorage.removeItem('User token');
        navigate("/signin");
      });
  }, [navigate]);

  const fetchEvents = async () => {
    setLoadingEvents(true)
    try {
      const res = await axios.get('http://localhost:3000/user/events')
      if (res.data && res.data.success) setEvents(res.data.events || [])
    } catch (err) {
      console.error(err)
    } finally {
      setLoadingEvents(false)
    }
  }

  useEffect(() => {
    if (!user) return
    fetchEvents()
    const id = setInterval(() => fetchEvents(), 600000)
    return () => clearInterval(id)
  }, [user])

  if (!user) {
    return null
  }

  return (
    <>
      <Navbar />
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
                <p className="stat-number">{events ? events.filter(e => e.status !== 'completed').length : 0}</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">✓</div>
              <div className="stat-content">
                <h3>Completed</h3>
                <p className="stat-number">{events ? events.filter(e => e.status === 'completed').length : 0}</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⭐</div>
              <div className="stat-content">
                <h3>Interested</h3>
                <p className="stat-number">{events ? events.reduce((s, e) => s + (e.interested ? e.interested.length : 0), 0) : 0}</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-content">
                <h3>Attendees</h3>
                <p className="stat-number">{events ? events.reduce((s, e) => s + (e.attendees ? e.attendees.length : 0), 0) : 0}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="events-section">
          <div className="section-header">
            <h2>Available Events</h2>
            <div className="header-actions">
              <button className="btn btn-secondary-actionFetch" onClick={fetchEvents} disabled={loadingEvents}>
                {loadingEvents ? 'Refreshing...' : 'Refresh'}
              </button>
              <a href="#" className="view-all">View All →</a>
            </div>
          </div>

          <div className="events-grid">
            {loadingEvents ? (
              <div>Loading events...</div>
            ) : events.length ? (
              events.map((ev) => {
                const booked = ev.attendees && ev.attendees.some(a => a.userId && String(a.userId) === String(user.id))
                const date = ev.date ? new Date(ev.date) : null
                return (
                  <div className="event-card" key={ev._id}>
                    <div className="event-date">
                      <span className="event-month">{date ? date.toLocaleString('default', { month: 'short' }) : ''}</span>
                      <span className="event-day">{date ? date.getDate() : ''}</span>
                    </div>
                    <div className="event-details">
                      <h3>{ev.title}</h3>
                      <p className="event-category">{ev.status === 'completed' ? 'Event concluded ✅' : 'An Upcoming Event 🚀'}</p>
                      <p className="event-info"><span className="info-icon">📍</span> {ev.location}</p>
                      <p className="event-info"><span className="info-icon">👥</span> {ev.attendees ? ev.attendees.length : 0} Attendees</p>
                      <p className="event-info"><span className="info-icon">💬</span> {ev.interested ? ev.interested.length : 0} Interested</p>
                      <div style={{ display: 'flex', gap: 8 }}>
                        {booked ? (
                          <button className="btn btn-event-action" onClick={async () => {
                            const token = localStorage.getItem('User token')
                            try {
                              await axios.post(`http://localhost:3000/user/events/${ev._id}/cancel`, {}, { headers: { authorization: token } })
                              setEvents(prev => prev.map(p => p._id === ev._id ? { ...p, attendees: p.attendees.filter(a => String(a.userId) !== String(user.id)) } : p))
                            } catch (err) { console.error(err) }
                          }}>Cancel</button>
                        ) : (
                          <button className="btn btn-event-action" onClick={async () => {
                            const token = localStorage.getItem('User token')
                            try {
                              const res = await axios.post(`http://localhost:3000/user/events/${ev._id}/book`, {}, { headers: { authorization: token } })
                              if (res.data.success) {
                                setEvents(prev => prev.map(p => p._id === ev._id ? res.data.event : p))
                              }
                            } catch (err) { console.error(err) }
                          }}>Book / Attend</button>
                        )}

                        <button className="btn btn-event-action" onClick={async () => {
                          const token = localStorage.getItem('User token')
                          try {
                            const res = await axios.post(`http://localhost:3000/user/events/${ev._id}/interest`, {}, { headers: { authorization: token } })
                            if (res.data.success) setEvents(prev => prev.map(p => p._id === ev._id ? res.data.event : p))
                          } catch (err) { console.error(err) }
                        }}>{ev.interested && ev.interested.some(a => String(a.userId) === String(user.id)) ? 'Uninterest' : 'Interested'}</button>
                      </div>
                    </div>
                  </div>
                )
              })
            ) : (
              <div>No events available.</div>
            )}
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
    </>
  )
}

export default Dashboard