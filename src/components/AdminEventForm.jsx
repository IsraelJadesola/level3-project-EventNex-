import React, { useState, useEffect } from 'react'
import './AdminEventForm.css'

const AdminEventForm = ({ initialData = {}, onSave, onCancel }) => {
    const [formData, setFormData] = useState(() => ({
        title: initialData.title || '',
        description: initialData.description || '',
        date: initialData.date ? new Date(initialData.date).toISOString().slice(0, 16) : '',
        location: initialData.location || ''
    }))

    useEffect(() => {
        setFormData({
            title: initialData.title || '',
            description: initialData.description || '',
            date: initialData.date ? new Date(initialData.date).toISOString().slice(0, 16) : '',
            location: initialData.location || ''
        })
    }, [initialData])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.title.trim()) return
        const payload = {
            title: formData.title.trim(),
            description: formData.description.trim(),
            date: formData.date ? new Date(formData.date).toISOString() : null,
            location: formData.location.trim(),
        }
        onSave(payload)
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                </div>
                <div className="flex-row">
                    <div className="form-group">
                        <label>Date</label>
                        <input type="datetime-local" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
                    </div>
                </div>
                <div className="button-group">
                    <button type="button" onClick={onCancel}>Cancel</button>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}

export default AdminEventForm
