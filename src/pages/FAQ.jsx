import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import logo from '../assets/images/logo.png'
import './FAQ.css'

const FAQ = () => {
    const [expandedId, setExpandedId] = useState(null)

    const faqData = [
        {
            id: 1,
            category: 'General',
            question: 'What is our mission?',
            answer: 'Our mission is to create meaningful impact through innovative solutions, building a community of supporters dedicated to positive change. We believe in transparency, collaboration, and sustainable growth.'
        },
        {
            id: 2,
            category: 'General',
            question: 'How can I get involved?',
            answer: 'You can get involved by attending our events, volunteering your time and skills, or supporting our cause through donations. Visit our website to explore current opportunities and upcoming events.'
        },
        {
            id: 3,
            category: 'Donations',
            question: 'How does the donation process work?',
            answer: 'Simply visit our Donate page, select a tier or enter a custom amount, provide your details, and complete the payment. Your donation is secure and we provide full transparency on how funds are used.'
        },
        {
            id: 4,
            category: 'Donations',
            question: 'Are donations tax-deductible?',
            answer: 'We are working towards registering as a charitable organization. Please contact us at israeljadesola20000@gmail.com or call (+234) 9131007061 for current tax status and documentation.'
        },
        {
            id: 5,
            category: 'Donations',
            question: 'Can I donate anonymously?',
            answer: 'Yes, you can request anonymity during the donation process. Your personal information will not be shared publicly, though we may send you updates if you provide contact details.'
        },
        {
            id: 6,
            category: 'Events',
            question: 'How do I register for an event?',
            answer: 'Visit our Services page to view upcoming events. Click on an event to see details, then use the booking system to register. You\'ll receive a confirmation email with event details and any necessary materials.'
        },
        {
            id: 7,
            category: 'Events',
            question: 'Can I cancel my event registration?',
            answer: 'Yes, you can cancel your registration up to 48 hours before the event for a full refund. Visit your Dashboard to manage your bookings. Events cancelled within 24 hours may have different policies.'
        },
        {
            id: 8,
            category: 'Events',
            question: 'Are events virtual or in-person?',
            answer: 'We offer both virtual and in-person events. Event details will specify the format. Some events may offer hybrid options. Check the specific event page for location and joining instructions.'
        },
        {
            id: 9,
            category: 'Account',
            question: 'How do I create an account?',
            answer: 'Click the Sign Up button, fill in your details (name, email, password), and confirm your email. Your account will be immediately activated and you can start booking events.'
        },
        {
            id: 10,
            category: 'Account',
            question: 'How do I reset my password?',
            answer: 'On the Sign In page, click "Forgot Password". Enter your email address and we\'ll send you a link to reset your password securely.'
        },
        {
            id: 11,
            category: 'Contact',
            question: 'How can I reach your team?',
            answer: 'You can contact us through our Contact page, email us at israeljadesola20000@gmail.com, or call (+234) 9131007061. We typically respond within 24 hours.'
        },
        {
            id: 12,
            category: 'Contact',
            question: 'Do you have a physical office?',
            answer: 'We are currently operating remotely with a base in Oyo. You can reach us digitally through our website contact form or the provided phone number. We meet with partners and supporters as needed.'
        }
    ]

    const categories = ['All', ...new Set(faqData.map(faq => faq.category))]
    const [selectedCategory, setSelectedCategory] = useState('All')

    const filteredFAQs = selectedCategory === 'All'
        ? faqData
        : faqData.filter(faq => faq.category === selectedCategory)

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id)
    }

    return (
        <Navbar>
            <div className="container faq-hero" style={{ paddingTop: 'calc(var(--navbar-offset,72px) - 96px)', minHeight: '90vh' }}>
                <div className="row justify-content-center">
                    <div className="col-md-11 col-lg-10">
                        <div className="faq-card shadow-sm rounded">
                            <div className="faq-header">
                                <div className="brand-row mb-3">
                                    <img src={logo} alt="logo" className="faq-logo" />
                                    <h2 className="mb-0 faq-title">Frequently Asked Questions</h2>
                                </div>
                                <p className="faq-sub">Find answers to common questions about our services, donations, events, and more.</p>
                            </div>

                            <div className="category-filter">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                                        onClick={() => {
                                            setSelectedCategory(cat)
                                            setExpandedId(null)
                                        }}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            <div className="faq-accordion">
                                {filteredFAQs.map((faq) => (
                                    <div key={faq.id} className="faq-item">
                                        <button
                                            className={`faq-question ${expandedId === faq.id ? 'active' : ''}`}
                                            onClick={() => toggleExpand(faq.id)}
                                        >
                                            <span className="question-text">{faq.question}</span>
                                            <span className="toggle-icon">
                                                {expandedId === faq.id ? '−' : '+'}
                                            </span>
                                        </button>
                                        {expandedId === faq.id && (
                                            <div className="faq-answer">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="faq-cta">
                                <h4 className="cta-title">Still have questions?</h4>
                                <p className="cta-text">Can't find the answer you're looking for? Please reach out to our team.</p>
                                <div className="cta-buttons">
                                    <a href="/contact" className="btn btn-contact">Contact Us</a>
                                    <a href="mailto:israeljadesola20000@gmail.com" className="btn btn-email">Email Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
    )
}

export default FAQ
