import React, { useState } from 'react';
import './css/SignUp.css';
import bigImg from './images/signupimage.jpg'
import GoogleIcon from './images/google-icon.png';
import FacebookIcon from './images/facebook-icon.png';
import TikTokIcon from './images/tiktok-icon.png';

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
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

                    <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="input-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input 
                                type="text" 
                                id="fullName" 
                                placeholder="Enter Full Name" 
                                className="form-input" 
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="Enter Email Address" 
                                className="form-input" 
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

                    <div className="divider-container">
                        <div className="divider-line"></div>
                        <span className="divider-text">OR</span>
                        <div className="divider-line"></div>
                    </div>

                    <p className="signup-with-text">Sign Up With</p>

                    <div className="social-login-container">
                        <button className="social-icon-btn">
                            <img src={GoogleIcon} alt="Google" className="social-icon-img" />
                        </button>
                        <button className="social-icon-btn">
                            <img src={FacebookIcon} alt="Facebook" className="social-icon-img" />
                        </button>
                        <button className="social-icon-btn">
                            <img src={TikTokIcon} alt="TikTok" className="social-icon-img" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;