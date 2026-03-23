import React, { useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import logo from '../assets/images/logo.png'
import './Donate.css'

const Donate = () => {
    const [selectedTier, setSelectedTier] = useState(null)
    const [customAmount, setCustomAmount] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)

    const donationTiers = [
        {
            id: 1,
            name: 'Supporter',
            amount: 1000,
            description: 'Help us get started',
            icon: '💜',
            perks: ['Thank you email', 'Updates on our impact']
        },
        {
            id: 2,
            name: 'Champion',
            amount: 5000,
            description: 'Make a real difference',
            icon: '⭐',
            perks: ['All Supporter perks', 'Featured on our website', 'Monthly progress reports']
        },
        {
            id: 3,
            name: 'Visionary',
            amount: 10000,
            description: 'Transform our mission',
            icon: '🚀',
            perks: ['All Champion perks', 'Exclusive video message', 'Strategic partnership opportunity']
        }
    ]

    const handleDonate = async (amount, tier = 'custom') => {
        setError('')
        setSuccess('')

        if (!name.trim()) return setError('Please enter your name')
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) return setError('Please enter a valid email')
        if (!amount || amount < 100) return setError('Donation amount must be at least ₦100')

        setLoading(true)
        try {
            const res = await axios.post('http://localhost:3000/user/donate', {
                name: name.trim(),
                email: email.trim(),
                amount: parseInt(amount),
                tier
            })
            setSuccess('Thank you for your generous donation! 💜')
            setName('')
            setEmail('')
            setCustomAmount('')
            setSelectedTier(null)
            // In production, we will redirect to payment gateway here
            setTimeout(() => {
                alert('Payment integration coming soon! Your donation has been recorded.')
            }, 1500)
        } catch (err) {
            const msg = err.response?.data?.error || 'Failed to process donation'
            setError(msg)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Navbar>
            <div className="container donate-hero" style={{ paddingTop: 'calc(var(--navbar-offset,72px) - 100px)', minHeight: '90vh' }}>
                <div className="row justify-content-center">
                    <div className="col-md-11 col-lg-10">
                        <div className="donate-card shadow-sm rounded">
                            <div className="donate-header">
                                <div className="brand-row mb-3">
                                    <img src={logo} alt="logo" className="donate-logo" />
                                    <h2 className="mb-0 donate-title">Support Our Mission</h2>
                                </div>
                                <p className="donate-sub">Your generosity helps us create meaningful impact. Every contribution, big or small, makes a difference.</p>
                            </div>

                            {error && <div className="alert alert-danger">{error}</div>}
                            {success && <div className="alert alert-success">{success}</div>}

                            <div className="donate-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Your Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email Address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="donation-tiers">
                                {donationTiers.map((tier) => (
                                    <div
                                        key={tier.id}
                                        className={`tier-card ${selectedTier === tier.id ? 'selected' : ''}`}
                                        onClick={() => setSelectedTier(tier.id)}
                                    >
                                        <div className="tier-icon">{tier.icon}</div>
                                        <h3 className="tier-name">{tier.name}</h3>
                                        <div className="tier-amount">₦{tier.amount.toLocaleString()}</div>
                                        <p className="tier-description">{tier.description}</p>
                                        <ul className="tier-perks">
                                            {tier.perks.map((perk, idx) => (
                                                <li key={idx}>✓ {perk}</li>
                                            ))}
                                        </ul>
                                        <button
                                            className="btn btn-donate"
                                            disabled={loading}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                handleDonate(tier.amount, tier.name)
                                            }}
                                        >
                                            {loading ? 'Processing...' : 'Donate Now'}
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="other-donation">
                                <h4 className="other-title">Or donate a custom amount</h4>
                                <div className="custom-input-wrapper">
                                    <span className="currency">₦</span>
                                    <input
                                        type="number"
                                        placeholder="Enter amount"
                                        className="custom-amount"
                                        min="100"
                                        value={customAmount}
                                        onChange={(e) => setCustomAmount(e.target.value)}
                                    />
                                    <button
                                        className="btn btn-donate-custom"
                                        disabled={loading}
                                        onClick={() => handleDonate(customAmount, 'custom')}
                                    >
                                        {loading ? 'Processing...' : 'Donate Custom'}
                                    </button>
                                </div>
                            </div>

                            <div className="donation-info">
                                <h4 className="info-heading">Why donate?</h4>
                                <div className="info-grid">
                                    <div className="info-item">
                                        <div className="info-icon">🎯</div>
                                        <h5>Transparent Impact</h5>
                                        <p>See exactly how your donation is used.</p>
                                    </div>
                                    <div className="info-item">
                                        <div className="info-icon">🤝</div>
                                        <h5>Community</h5>
                                        <p>Join a network of supporters making change.</p>
                                    </div>
                                    <div className="info-item">
                                        <div className="info-icon">💪</div>
                                        <h5>Real Change</h5>
                                        <p>Together, we build sustainable solutions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
    )
}

export default Donate
