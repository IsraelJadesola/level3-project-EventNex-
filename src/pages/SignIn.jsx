import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/SignUp-In.css';
import bigImg from './images/signupimage.jpg'
import Navbar from '../components/Navbar';
import axios from 'axios'

const SignInForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();

        let userData = { email, password };

        axios.post("https://level3-project-backend.vercel.app/user/signin", userData)
            .then((res) => {

                if (res.data.token) {
                    localStorage.setItem("User token", res.data.token)
                } else {
                    console.warn("No token found")
                }

                if (res.data.user && !res.data.error) {
                    localStorage.setItem("userData", JSON.stringify(res.data.user));
                }

                alert('signin successfully!');

                navigate("/dashboard")
            }).catch((err) => {
                alert(`Signin failed: ${err.response ? err.response.data : 'An unknown error occurred.'}`)
            })

    }

    return (
        <Navbar>
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
                        <h1 className="form-title">Login in your Account</h1>

                        <form className="signup-form" onSubmit={handleLogin}>
                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter Email Address"
                                    className="form-input"
                                    name='email'
                                    onChange={(e) => setEmail(e.target.value)}
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
                                        name='password'
                                        onChange={(e) => setPassword(e.target.value)}
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
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Navbar>
    );
};

export default SignInForm;