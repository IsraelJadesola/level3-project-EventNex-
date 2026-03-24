import React, { useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import logo from '../assets/images/logo.png'
import './Careers.css'

const Careers = () => {
    const [selectedJob, setSelectedJob] = useState(null)
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', resume: '' })
    const [applying, setApplying] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const jobs = [
        {
            id: 1,
            title: 'Full Stack Developer',
            department: 'Engineering',
            type: 'Full-time',
            location: 'Remote / Oyo',
            salary: '₦400,000 - ₦600,000',
            description: 'We\'re looking for an experienced Full Stack Developer to help us build and scale EventNex. You\'ll work with React, Node.js, and MongoDB to create amazing user experiences.',
            requirements: ['3+ years of full-stack development experience', 'Proficiency in React and Node.js', 'Strong understanding of databases', 'Git and version control', 'Problem-solving mindset']
        },
        {
            id: 2,
            title: 'Product Manager',
            department: 'Product',
            type: 'Full-time',
            location: 'Oyo, Nigeria',
            salary: '₦350,000 - ₦500,000',
            description: 'Join our team as a Product Manager and shape the future of EventNex. You\'ll work closely with engineers, designers, and stakeholders to deliver features that delight our users.',
            requirements: ['2+ years of product management experience', 'Strong analytical and communication skills', 'Experience with product roadmapping', 'User research and data analysis', 'Knowledge of event/ticketing industry preferred']
        },
        {
            id: 3,
            title: 'UX/UI Designer',
            department: 'Design',
            type: 'Full-time',
            location: 'Remote',
            salary: '₦300,000 - ₦450,000',
            description: 'Create beautiful and intuitive interfaces for EventNex. As our UX/UI Designer, you\'ll be responsible for designing user experiences that are both functional and delightful.',
            requirements: ['3+ years of UX/UI design experience', 'Proficiency in Figma or Adobe XD', 'Strong portfolio showcasing your work', 'Understanding of user research and testing', 'Knowledge of design systems and responsive design']
        },
        {
            id: 4,
            title: 'Marketing Specialist',
            department: 'Marketing',
            type: 'Full-time',
            location: 'Oyo, Nigeria',
            salary: '₦250,000 - ₦400,000',
            description: 'Help us grow EventNex through creative marketing strategies. You\'ll manage campaigns, social media, content, and partnerships to increase brand awareness and user acquisition.',
            requirements: ['2+ years of marketing experience', 'Social media management expertise', 'Content creation and copywriting skills', 'Analytics and data interpretation', 'Experience with marketing automation tools']
        },
        {
            id: 5,
            title: 'Customer Support Specialist',
            department: 'Support',
            type: 'Full-time',
            location: 'Remote / Oyo',
            salary: '₦200,000 - ₦320,000',
            description: 'Be the voice of EventNex! Help our users have amazing experiences by providing excellent customer support across email, chat, and phone.',
            requirements: ['1+ years of customer support experience', 'Excellent communication skills', 'Problem-solving and patience', 'Ability to manage multiple tickets', 'Experience with CRM tools']
        },
        {
            id: 6,
            title: 'Backend Engineer (Intern)',
            department: 'Engineering',
            type: 'Internship',
            location: 'Remote',
            salary: '₦50,000 - ₦100,000/month',
            description: 'Gain hands-on experience building scalable backend systems. Perfect for students or early-career developers wanting to learn and contribute to a real-world product.',
            requirements: ['Basic knowledge of Node.js and databases', 'Understanding of REST APIs', 'Eager to learn and grow', 'Problem-solving skills', 'Good communication']
        }
    ]

    const handleApplyClick = (job) => {
        setSelectedJob(job)
        setFormData({ name: '', email: '', phone: '', resume: '' })
        setError('')
        setSuccess('')
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmitApplication = async (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        if (!formData.name.trim()) return setError('Please enter your name')
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) return setError('Please enter a valid email')
        if (!formData.phone.trim()) return setError('Please enter your phone number')
        if (!formData.resume.trim()) return setError('Please introduce yourself and your experience')

        setApplying(true)
        try {
            const res = await axios.post('https://level3-project-backend.vercel.app/user/apply-job', {
                jobTitle: selectedJob.title,
                jobId: selectedJob.id,
                name: formData.name.trim(),
                email: formData.email.trim(),
                phone: formData.phone.trim(),
                resume: formData.resume.trim()
            })
            setSuccess(res.data?.message || `Your application for ${selectedJob.title} has been submitted!`)
            setFormData({ name: '', email: '', phone: '', resume: '' })
            setTimeout(() => setSelectedJob(null), 2000)
        } catch (err) {
            const msg = err.response?.data?.error || 'Failed to submit application. Please try again.'
            setError(msg)
        } finally {
            setApplying(false)
        }
    }

    return (
        <Navbar>
            <div className="container careers-hero" style={{ paddingTop: 'calc(var(--navbar-offset,72px) - 96px)', minHeight: '90vh' }}>
                <div className="row justify-content-center">
                    <div className="col-md-11 col-lg-11">
                        <div className="careers-card shadow-sm rounded">
                            <div className="careers-header">
                                <div className="brand-row mb-3">
                                    <img src={logo} alt="logo" className="careers-logo" />
                                    <h2 className="mb-0 careers-title">Join Our Team</h2>
                                </div>
                                <p className="careers-sub">We're building the future of event management. If you're passionate about making an impact, we'd love to hear from you.</p>
                            </div>

                            <div className="careers-grid">
                                {jobs.map((job) => (
                                    <div key={job.id} className="job-card">
                                        <div className="job-header">
                                            <h3 className="job-title">{job.title}</h3>
                                            <span className="job-type">{job.type}</span>
                                        </div>
                                        <div className="job-meta">
                                            <span className="meta-item">📍 {job.location}</span>
                                            <span className="meta-item">💼 {job.department}</span>
                                            <span className="meta-item">💰 {job.salary}</span>
                                        </div>
                                        <p className="job-description">{job.description}</p>
                                        <div className="job-requirements">
                                            <h5 className="req-title">Requirements:</h5>
                                            <ul className="req-list">
                                                {job.requirements.slice(0, 3).map((req, idx) => (
                                                    <li key={idx}>{req}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <button
                                            className="btn btn-apply"
                                            onClick={() => handleApplyClick(job)}
                                        >
                                            Apply Now
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="no-jobs-available" style={{ display: jobs.length === 0 ? 'block' : 'none' }}>
                                <p>No open positions at the moment. Please check back later!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Application Modal */}
            {selectedJob && (
                <div className="modal-overlay" onClick={() => setSelectedJob(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedJob(null)}>✕</button>
                        <h3 className="modal-title">Apply for {selectedJob.title}</h3>

                        {error && <div className="alert alert-danger">{error}</div>}
                        {success && <div className="alert alert-success">{success}</div>}

                        <form onSubmit={handleSubmitApplication}>
                            <div className="form-group">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="form-control"
                                    placeholder="Your phone number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Tell us about yourself and your experience</label>
                                <textarea
                                    name="resume"
                                    className="form-control"
                                    placeholder="Share your background, skills, and why you're interested in this role..."
                                    rows="6"
                                    value={formData.resume}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-submit" disabled={applying}>
                                {applying ? 'Submitting...' : 'Submit Application'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </Navbar>
    )
}

export default Careers
