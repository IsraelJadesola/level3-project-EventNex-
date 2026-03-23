import React, { useState } from 'react';
import '../css/SignUp-In.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const AdminSignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (!firstName || !lastName || !email || !password) {
            setErrorMessage('All fields are required');
            return;
        }

        if (password.length < 6) {
            setErrorMessage('Password must be at least 6 characters');
            return;
        }

        setIsLoading(true);

        try {
            setIsLoading(true);
            const adminData = { firstName, lastName, email, password };
            const res = await axios.post('http://localhost:3000/admin/signup', adminData);

            alert('Admin account created successfully! Please sign in.');
            navigate('/admin-signin');
        } catch (err) {
            const errorMsg = err.response?.data?.message || 'Signup failed. Please try again.';
            setErrorMessage(errorMsg);
            console.error('Signup error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Navbar>
            <div className="signup-page-container">
                <div className="signup-form-side" style={{ flex: 1 }}>
                    <div className="signup-form-box">
                        <h1 className="form-title">Admin Sign Up</h1>
                        <p style={{ color: '#aaa', marginBottom: '30px', fontSize: '0.95rem' }}>
                            Create your admin account
                        </p>

                        {errorMessage && (
                            <div style={{ backgroundColor: '#ff4444', color: '#fff', padding: '12px 16px', borderRadius: '8px', marginBottom: '20px', fontSize: '0.9rem' }}>
                                {errorMessage}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="Enter first name"
                                    className="form-input"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder="Enter last name"
                                    className="form-input"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="form-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <div className="password-input-container">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        placeholder="Enter password (min 6 characters)"
                                        className="form-input"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div
                                        className="password-toggle-icon"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? '👁️' : '👁️‍🗨️'}
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                style={{
                                    width: '100%',
                                    padding: '14px',
                                    backgroundColor: isLoading ? '#555' : '#0f1f35',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    marginTop: '20px',
                                    cursor: isLoading ? 'not-allowed' : 'pointer',
                                    transition: 'background-color 0.3s',
                                }}
                                onMouseEnter={(e) => {
                                    if (!isLoading) e.target.style.backgroundColor = '#1a2a45';
                                }}
                                onMouseLeave={(e) => {
                                    if (!isLoading) e.target.style.backgroundColor = '#0f1f35';
                                }}
                            >
                                {isLoading ? 'Creating Account...' : 'Create Admin Account'}
                            </button>
                        </form>

                        <p style={{ textAlign: 'center', marginTop: '25px', color: '#aaa' }}>
                            Already have an account?{' '}
                            <Link
                                to="/admin-signin"
                                style={{ color: '#fff', textDecoration: 'none', fontWeight: '600' }}
                            >
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </Navbar>
    );
};

export default AdminSignUp;