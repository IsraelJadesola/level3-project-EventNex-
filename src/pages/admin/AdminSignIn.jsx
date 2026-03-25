import React, { useState } from 'react';
import '../css/SignUp-In.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
// import { useDispatch } from 'react-redux';

const AdminSignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (!email || !password) {
            setErrorMessage('Email and password are required');
            return;
        }

        setIsLoading(true);

        try {
            const adminData = { email, password };
            const res = await axios.post('https://level3-project-backend.vercel.app/admin/signin', adminData);

            localStorage.setItem('adminToken', res.data.token);
            if (res.data.admin && res.data.admin.id) localStorage.setItem('adminId', res.data.admin.id);

            if (res.data.admin && res.data.admin.firstName) {
                const adminName = `${res.data.admin.firstName || ''}`.trim();
                localStorage.setItem('adminName', adminName);
            }

            // Dispatch to Redux as an upcoming feature
            // dispatch(setAdminInfo(res.data));

            alert('Signed in successfully!');
            navigate('/admin-dashboard');
        } catch (err) {
            const errorMsg = err.response?.data?.message || 'Sign in failed. Please try again.';
            setErrorMessage(errorMsg);
            console.error('Signin error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="signup-page-container">
                <div className="signup-form-side" style={{ flex: 1 }}>
                    <div className="signup-form-box">
                        <h1 className="form-title">Admin Sign In</h1>
                        <p style={{ color: '#aaa', marginBottom: '30px', fontSize: '0.95rem' }}>
                            Welcome back, admin
                        </p>

                        {errorMessage && (
                            <div
                                style={{
                                    backgroundColor: '#ff4444',
                                    color: '#fff',
                                    padding: '12px 16px',
                                    borderRadius: '8px',
                                    marginBottom: '20px',
                                    fontSize: '0.9rem',
                                }}
                            >
                                {errorMessage}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
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
                                        placeholder="Enter your password"
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
                                    marginTop: '25px',
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
                                {isLoading ? 'Signing In...' : 'Sign In'}
                            </button>
                        </form>

                        <p style={{ textAlign: 'center', marginTop: '25px', color: '#aaa' }}>
                            Don't have an account?{' '}
                            <Link
                                to="/admin-signup"
                                style={{ color: '#fff', textDecoration: 'none', fontWeight: '600' }}
                            >
                                Create one
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminSignIn;