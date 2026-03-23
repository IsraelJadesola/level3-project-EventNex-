import React from 'react'

const EventCard = ({ event, onEdit, onDelete, onMarkComplete, onViewAttendees }) => {
    return (
        <div className="event-card" style={{ border: '1px solid #e6eefc', padding: 14, borderRadius: 8, marginBottom: 10, background: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                <div style={{ flex: 1 }}>
                    <h3 style={{ margin: '0 0 6px 0' }}>{event.title}</h3>
                    <div style={{ color: '#475569', fontSize: 13 }}>{event.location}</div>
                    <div style={{ display: 'flex', gap: 12, marginTop: 8, color: '#374151', fontSize: 13 }}>
                        <div>Attendees: <strong>{event.attendees ? event.attendees.length : 0}</strong></div>
                        <div>Interested: <strong>{event.interested ? event.interested.length : 0}</strong></div>
                    </div>
                    {event.description ? <p style={{ marginTop: 8 }}>{event.description}</p> : null}
                </div>
                <div style={{ width: 220, textAlign: 'right' }}>
                    <div style={{ fontSize: 12, color: '#64748b' }}>{event.date ? new Date(event.date).toLocaleString() : ''}</div>
                    <div style={{ marginTop: 10, display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                        <button className="small btn-outline" onClick={() => onViewAttendees && onViewAttendees(event)}>View Attendees</button>
                        <button className="small btn-outline" onClick={() => onEdit(event)}>Edit</button>
                        <button className="small btn-outline" onClick={() => onDelete(event._id)}>Delete</button>
                    </div>
                    <div style={{ marginTop: 8 }}>
                        {event.status !== 'completed' ? (
                            <button className="small btn" onClick={() => onMarkComplete(event._id)}>Mark Completed</button>
                        ) : (
                            <span style={{ color: 'green', fontWeight: 600 }}>Completed</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

const AdminEventList = ({ events = [], onEdit, onDelete, onMarkComplete, onViewAttendees }) => {
    if (!events.length) return <div style={{ padding: 12 }}>No events yet.</div>
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8 }}>
            {events.map((ev) => (
                <EventCard key={ev._id} event={ev} onEdit={onEdit} onDelete={onDelete} onMarkComplete={onMarkComplete} onViewAttendees={onViewAttendees} />
            ))}
        </div>
    )
}

export default AdminEventList
