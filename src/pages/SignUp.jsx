import React, { useState } from 'react';
import './css/SignUp-In.css';
import bigImg from './images/signupimage.jpg'
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        let userData = { firstName, lastName, email, password }

        axios.post("https://level3-project-backend.vercel.app/user/signup", userData)
            .then(() => {
                alert('signup successfully! please login');
                navigate("/signin")
            }).catch((err) => {
                alert(`Signup failed: ${err.response ? err.response.data : 'An unknown error occurred.'}`)
            })
    }

    return (
        <>
            <Navbar />
            <div className="signup-page-container">
                <div className="signup-image-side">
                    <img
                        src={bigImg}
                        alt="Live concert background"
                        className="signup-background-img"
                    />
                </div>

                <div className="signup-form-side">
                    <div className="signup-form-box">
                        <h1 className="form-title">Create Account</h1>

                        <form action="" className="signup-form" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label htmlFor="fullName">First Name</label>
                                <input
                                    name="firstName"
                                    type="text"
                                    id="fullName"
                                    placeholder="Enter first Name"
                                    style={{ borderTopRightRadius: '30px', borderBottomRightRadius: '30px' }}
                                    className="form-input mb-4"
                                    onChange={(e) => { setFirstName(e.target.value) }}
                                />
                                <label htmlFor="fullName">Last Name</label>
                                <input
                                    name="lastName"
                                    type="text"
                                    id="fullName"
                                    placeholder="Enter last Name"
                                    className="form-input"
                                    onChange={(e) => { setLastName(e.target.value) }}
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    id="email"
                                    placeholder="Enter Email Address"
                                    className="form-input"
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <div className="password-input-container">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        placeholder="Enter Password"
                                        className="form-input"
                                        onChange={(e) => { setPassword(e.target.value) }}
                                    />
                                    <div
                                        className="password-toggle-icon"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="btn-signup-submit">
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUpForm;