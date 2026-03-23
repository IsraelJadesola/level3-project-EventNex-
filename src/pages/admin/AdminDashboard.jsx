import React, { useEffect, useState } from 'react'
import Navbar from '../../components/AdminNavbar'
import AdminEventForm from '../../components/AdminEventForm'
import AdminEventList from '../../components/AdminEventList'
import './AdminDashboard.css'
import { Navigate, useNavigate } from 'react-router-dom'

function exportAttendeesCSV(event) {
  if (!event || !event.attendees) return
  const rows = [['Name', 'Email', 'Booked At']]
  event.attendees.forEach(a => rows.push([a.name || '', a.email || '', a.bookedAt ? new Date(a.bookedAt).toISOString() : '']))
  const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n')
  const blob = new Blob([csv], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${(event.title || 'event').replace(/\s+/g, '_')}_attendees.csv`
  a.click()
  URL.revokeObjectURL(url)
}

const API_BASE = 'http://localhost:3000/admin'

const AdminDashboard = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState(null)
  const [adminName, setAdminName] = useState('Admin')
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')
  const [activeEvent, setActiveEvent] = useState(null)
  const [attendeesLoading, setAttendeesLoading] = useState(false)
  const [dashboardStats, setDashboardStats] = useState({
    totalEvents: 0,
    completedEvents: 0,
    totalAttendees: 0,
    totalInterested: 0,
    upcomingEvents: 0
  })

  const navigate = useNavigate()
  const token = localStorage.getItem('adminToken')

  useEffect(() => {
    if (!token) {
      navigate('/admin-signin')
      return
    }
    const storedName = localStorage.getItem('adminName')
    if (storedName) {
      setAdminName(storedName)
    }
  }, [token, navigate])
  const fetchEvents = async () => {
    setLoading(true)
    try {
      const token = localStorage.getItem('adminToken')
      const res = await fetch(`${API_BASE}/events`, { headers: { Authorization: token } })
      const data = await res.json()
      if (data.success) {
        setEvents(data.events || [])
        const events = data.events || []
        const now = new Date()
        const completed = events.filter(e => e.completed).length
        const upcoming = events.filter(e => new Date(e.date) > now).length
        let totalAttendees = 0
        let totalInterested = 0
        events.forEach(e => {
          totalAttendees += (e.attendees ? e.attendees.length : 0)
          totalInterested += (e.interested ? e.interested.length : 0)
        })
        setDashboardStats({
          totalEvents: events.length,
          completedEvents: completed,
          totalAttendees,
          totalInterested,
          upcomingEvents: upcoming
        })
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEvents()
    const id = setInterval(() => fetchEvents(), 600000)
    return () => clearInterval(id)
  }, [])

  const handleSave = async (payload) => {
    try {
      if (editing) {
        const token = localStorage.getItem('adminToken')
        const res = await fetch(`${API_BASE}/events/${editing._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', Authorization: token },
          body: JSON.stringify(payload),
        })
        const data = await res.json()
        if (data.success) {
          setEvents((prev) => prev.map((p) => (p._id === data.event._id ? data.event : p)))
        }
      } else {
        const token = localStorage.getItem('adminToken')
        if (!token) {
          navigate('/admin-signin')
        }
        const res = await fetch(`${API_BASE}/events`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: token },
          body: JSON.stringify(payload),
        })
        const data = await res.json()
        if (data.success) setEvents((prev) => [data.event, ...prev])
      }
    } catch (err) {
      console.error(err)
    } finally {
      setShowForm(false)
      setEditing(null)
    }
  }

  const handleEdit = (event) => {
    setEditing(event)
    setShowForm(true)
  }

  const filtered = events.filter(e => {
    if (filter === 'completed') return e.status === 'completed'
    if (filter === 'upcoming') return e.status !== 'completed'
    return true
  }).filter(e => !query || e.title.toLowerCase().includes(query.toLowerCase()))

  const onViewAttendees = async (event) => {
    console.log('Viewing attendees for', event && event._id)
    setActiveEvent(event)
    setAttendeesLoading(true)
    try {
      const token = localStorage.getItem('adminToken')
      const res = await fetch(`${API_BASE}/events/${event._id}`, { headers: { Authorization: token } })
      const data = await res.json()
      console.log('GET event by id response', data)
      if (data && data.success) setActiveEvent(data.event)
    } catch (err) {
      console.error('Failed to fetch event details', err)
    } finally {
      setAttendeesLoading(false)
    }
  }

  const handleMarkComplete = async (id) => {
    try {
      const token = localStorage.getItem('adminToken')
      const res = await fetch(`${API_BASE}/events/${id}/complete`, { method: 'PUT', headers: { Authorization: token } })
      const data = await res.json()
      if (data.success) setEvents((prev) => prev.map(p => p._id === data.event._id ? data.event : p))
    } catch (err) { console.error(err) }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this event?')) return
    try {
      const token = localStorage.getItem('adminToken')
      const res = await fetch(`${API_BASE}/events/${id}`, { method: 'DELETE', headers: { Authorization: token } })
      const data = await res.json()
      if (data.success) setEvents((prev) => prev.filter((p) => p._id !== id))
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <Navbar />
      <div className="dashboard-root">
        <div className="dashboard-inner">
          {/* Welcome Header Section */}
          <div className="welcome-header">
            <div className="welcome-content">
              <h1 className="welcome-title">Welcome back, {adminName}! 👋</h1>
              <p className="welcome-subtitle">Manage your events and view dashboard analytics</p>
            </div>
            <div className="welcome-date">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </div>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon total">📊</div>
              <div className="stat-details">
                <div className="stat-label">Total Events</div>
                <div className="stat-value">{dashboardStats.totalEvents}</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon upcoming">🗓️</div>
              <div className="stat-details">
                <div className="stat-label">Upcoming Events</div>
                <div className="stat-value">{dashboardStats.upcomingEvents}</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon completed">✅</div>
              <div className="stat-details">
                <div className="stat-label">Completed Events</div>
                <div className="stat-value">{dashboardStats.completedEvents}</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon attendees">👥</div>
              <div className="stat-details">
                <div className="stat-label">Total Attendees</div>
                <div className="stat-value">{dashboardStats.totalAttendees}</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon interested">❤️</div>
              <div className="stat-details">
                <div className="stat-label">Interested Users</div>
                <div className="stat-value">{dashboardStats.totalInterested}</div>
              </div>
            </div>
          </div>

          {/* Events Management Section */}
          <div className="events-section-header">
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
              <h2 style={{ margin: 0 }}>Your Events</h2>
              <div className="controls">
                <input className="search-input" placeholder="Search events..." value={query} onChange={(e) => setQuery(e.target.value)} />
                <select className="select" value={filter} onChange={(e) => setFilter(e.target.value)}>
                  <option value="all">All</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>

            <div className="action-buttons">
              <button className="btn btn-primary" onClick={() => { setEditing(null); setShowForm(true) }} style={{ marginRight: 8 }}>+ Add Event</button>
              <button className="btn btn-outline" onClick={fetchEvents}>Refresh</button>
            </div>
          </div>

          {loading ? <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>Loading events...</div> : <AdminEventList events={filtered} onEdit={handleEdit} onDelete={handleDelete} onMarkComplete={handleMarkComplete} onViewAttendees={onViewAttendees} />}
        </div>
      </div>

      {showForm ? (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 40 }}>
          <div style={{ width: 720, background: '#f9f9f9', borderRadius: 8, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
            <div style={{ padding: 12, borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong>{editing ? 'Edit Event' : 'Create Event'}</strong>
              <button onClick={() => { setShowForm(false); setEditing(null) }}>✕</button>
            </div>
            <AdminEventForm initialData={editing || {}} onSave={handleSave} onCancel={() => { setShowForm(false); setEditing(null) }} />
          </div>
        </div>
      ) : null}
      {activeEvent ? (
        <div className="attendees-backdrop">
          <div className="attendees-modal">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>Attendees — {activeEvent.title}</h3>
              <div>
                <button className="btn btn-outline" onClick={() => exportAttendeesCSV(activeEvent)} style={{ marginRight: 8 }}>Export CSV</button>
                <button className="btn" onClick={() => setActiveEvent(null)}>Close</button>
              </div>
            </div>
            <div style={{ marginTop: 12 }}>
              <div style={{ marginBottom: 8, color: '#555' }}>Attendees count: {activeEvent.attendees ? activeEvent.attendees.length : 0}</div>
              {activeEvent.attendees ? (
                <pre style={{ maxHeight: 160, overflow: 'auto', background: '#f3f4f6', padding: 8, borderRadius: 6 }}>{JSON.stringify(activeEvent.attendees, null, 2)}</pre>
              ) : null}
              {attendeesLoading ? (
                <div>Loading attendees...</div>
              ) : (activeEvent.attendees && activeEvent.attendees.length ? (
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ textAlign: 'left', borderBottom: '1px solid #e6eefc' }}>
                      <th style={{ padding: 8 }}>Name</th>
                      <th style={{ padding: 8 }}>Email / UserId</th>
                      <th style={{ padding: 8 }}>Booked At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeEvent.attendees.map((a, i) => {
                      // Support legacy string attendee entries and the newer object shape
                      const isString = typeof a === 'string'
                      const name = isString ? '-' : (a.name || '')
                      const emailOrId = isString ? a : (a.email || (a.userId ? String(a.userId) : '-'))
                      const bookedAt = isString ? '-' : (a.bookedAt ? new Date(a.bookedAt).toLocaleString() : '-')
                      return (
                        <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                          <td style={{ padding: 8 }}>{name || '-'}</td>
                          <td style={{ padding: 8 }}>{emailOrId}</td>
                          <td style={{ padding: 8 }}>{bookedAt}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              ) : (
                <div>No attendees yet.</div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default AdminDashboard