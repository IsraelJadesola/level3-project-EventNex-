import React, { useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import logo from '../assets/images/logo.png'
import './Contact.css'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [sending, setSending] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        if (name.trim().length < 2) return setError('Please enter your name')
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) return setError('Please enter a valid email')
        if (message.trim().length < 6) return setError('Message is too short')

        setSending(true)
        try {
            const res = await axios.post('http://localhost:3000/user/contact', { name, email, message })
            setSuccess(res.data && res.data.message ? res.data.message : 'Message sent')
            setName('')
            setEmail('')
            setMessage('')
        } catch (err) {
            const msg = err.response && err.response.data && err.response.data.error ? err.response.data.error : 'Failed to send message'
            setError(msg)
        } finally {
            setSending(false)
        }
    }

    return (
        <Navbar>
            <div className="container contact-hero" style={{ paddingTop: 'calc(var(--navbar-offset,72px) - 96px)', minHeight: '75vh' }}>
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-9 mt-3">
                        <div className="contact-card p-4 shadow-sm rounded">
                            <div className="contact-grid">
                                <div className="contact-left">
                                    <div className="brand-row">
                                        <img src={logo} alt="logo" className="contact-logo" />
                                        <h2 className="mb-3 contact-title">Contact Us</h2>
                                    </div>
                                    <p className="contact-sub">We'd love to hear from you — send us a message and we'll respond shortly.</p>

                                    {error && <div className="alert alert-danger">{error}</div>}
                                    {success && <div className="alert alert-success">{success}</div>}

                                    <form className="contact-form" onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">Name</label>
                                            <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Message</label>
                                            <textarea className="form-control" rows="6" value={message} onChange={(e) => setMessage(e.target.value)} required />
                                        </div>
                                        <button type="submit" className="btn btn-gradient w-100" disabled={sending}>{sending ? 'Sending…' : 'Send Message'}</button>
                                    </form>
                                </div>
                                <aside className="contact-info">
                                    <h3 className="info-title">Other ways to reach us</h3>
                                    <ul className="info-list">
                                        <li>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 8V7a2 2 0 0 0-2-2h-3" stroke="#6b5bff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 6v12a2 2 0 0 0 2 2h12" stroke="#6b5bff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><rect x="7" y="3" width="10" height="6" rx="2" stroke="#6b5bff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            <div>
                                                <div className="info-key">Office</div>
                                                <a className="info-val" href="#">Remote || Oyo</a>
                                            </div>
                                        </li>
                                        <li>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92V21a1 1 0 0 1-1.11 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2 3.11 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75c.12.8.37 1.58.73 2.31a1 1 0 0 1-.24 1L7.91 8.09a13 13 0 0 0 6 6l1.02-1.02a1 1 0 0 1 1-.24c.73.36 1.51.61 2.31.73a1 1 0 0 1 .75 1V21z" stroke="#6b5bff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            <div>
                                                <div className="info-key">Phone</div>
                                                <a className="info-val" href="tel:+2349131007061">(+234) 9131007061</a>
                                            </div>
                                        </li>
                                        <li>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 8v6a2 2 0 0 1-2 2H7l-4 2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" stroke="#6b5bff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            <div>
                                                <div className="info-key">Email</div>
                                                <a className="info-val" href="mailto:israeljadesola20000@gmail.com">israeljadesola20000@gmail.com</a>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="socials">
                                        <div className="info-key">Follow us</div>
                                        <div className="social-icons">
                                            <a href="https://x.com/Webinfinity001" aria-label="Twitter" className="social-link twitter" target="_blank" rel="noopener noreferrer">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.83 1.08A4.48 4.48 0 0 0 12.07 4a12.72 12.72 0 0 1-9.26-4.7 4.48 4.48 0 0 0 1.39 6A4.4 4.4 0 0 1 .96 5.6v.06A4.48 4.48 0 0 0 4.5 10a4.52 4.52 0 0 1-2 .08 4.48 4.48 0 0 0 4.18 3.11A9 9 0 0 1 1 18.58 12.69 12.69 0 0 0 7.29 20c8.27 0 12.8-6.85 12.8-12.8v-.58A9.22 9.22 0 0 0 23 3z" stroke="#2b6cff" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            </a>
                                            <a href="https://www.facebook.com/profile.php?id=61553001491901&mibextid=rS40aB7S9Ucbxw6v" aria-label="Facebook" className="social-link facebook" target="_blank" rel="noopener noreferrer">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h3v4h-3v14h-5V6h-3V3h3V1c0-.9.8-1 1-1h3v2z" stroke="#3b5998" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            </a>
                                            <a href="https://www.instagram.com/eazy_build_/" aria-label="Instagram" className="social-link instagram" target="_blank" rel="noopener noreferrer">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" stroke="#c13584" strokeWidth="0.6" /><path d="M16 11.37A4 4 0 1 1 12.63 8" stroke="#c13584" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            </a>
                                            <a href="https://www.linkedin.com" aria-label="LinkedIn" className="social-link linkedin" target="_blank" rel="noopener noreferrer">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM2 8h4v12H2zM9 8h3v1.7c.6-1.1 2-2.2 4-2.2 4 0 4.5 2.6 4.5 6V20h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H9V8z" stroke="#0a66c2" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            </a>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
    )
}

export default Contact
