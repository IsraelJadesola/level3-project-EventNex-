import React from 'react'
import Navbar from '../components/Navbar'
import logo from '../assets/images/logo.png'
import './CookiesPolicy.css'

const CookiesPolicy = () => {
    return (
        <Navbar>
            <div className="container cookies-hero" style={{ paddingTop: 'calc(var(--navbar-offset,72px) - 96px)', minHeight: '90vh' }}>
                <div className="row justify-content-center">
                    <div className="col-md-11 col-lg-10">
                        <div className="cookies-card shadow-sm rounded">
                            <div className="cookies-header">
                                <div className="brand-row mb-3">
                                    <img src={logo} alt="logo" className="cookies-logo" />
                                    <h2 className="mb-0 cookies-title">Cookies Policy</h2>
                                </div>
                                <p className="cookies-sub">Last updated: March 22, 2026</p>
                            </div>

                            <div className="cookies-content">
                                <section className="cookies-section">
                                    <h3 className="section-title">1. What are Cookies?</h3>
                                    <p>Cookies are small files that are stored on your browser or the hard drive of your computer or mobile device when you visit EventNex. They help us remember information about your visit to our service, such as your preferred language and other settings. Cookies do not contain any personal information and the information collected by cookies is statistical in nature.</p>
                                </section>

                                <section className="cookies-section">
                                    <h3 className="section-title">2. Types of Cookies We Use</h3>
                                    <h4 className="subsection-title">Session Cookies</h4>
                                    <p>These are temporary cookies that are deleted when you close your browser. They help us understand how users interact with our site in a single browsing session.</p>

                                    <h4 className="subsection-title">Persistent Cookies</h4>
                                    <p>These are cookies that remain in your browser for a longer period. They help us recognize you on your next visit and remember your preferences.</p>

                                    <h4 className="subsection-title">Analytics Cookies</h4>
                                    <p>We use analytics cookies to understand how visitors use our website. This helps us improve our service, identify technical issues, and optimize user experience. These cookies collect aggregated data and do not personally identify you.</p>

                                    <h4 className="subsection-title">Functional Cookies</h4>
                                    <p>These cookies enable us to provide enhanced functionality and personalization. For example, they remember your login information and preferences.</p>

                                    <h4 className="subsection-title">Marketing Cookies</h4>
                                    <p>We may use cookies to track your online activity and share that information with advertising partners. This helps us show you relevant advertisements. You can opt-out of marketing cookies.</p>
                                </section>

                                <section className="cookies-section">
                                    <h3 className="section-title">3. How We Use Cookies</h3>
                                    <ul className="cookies-list">
                                        <li>To improve and optimize our website and services</li>
                                        <li>To remember your preferences and settings</li>
                                        <li>To authenticate you and maintain your session</li>
                                        <li>To track site analytics and usage patterns</li>
                                        <li>To deliver targeted advertisements</li>
                                        <li>To prevent fraud and enhance security</li>
                                        <li>To measure the effectiveness of marketing campaigns</li>
                                    </ul>
                                </section>

                                <section className="cookies-section">
                                    <h3 className="section-title">4. Third-Party Cookies</h3>
                                    <p>We may allow third parties (such as analytics providers and advertising networks) to place cookies on your device through our website. These third parties have their own cookie policies and privacy practices. We recommend reviewing their policies to understand how they use cookies.</p>
                                </section>

                                <section className="cookies-section">
                                    <h3 className="section-title">5. Cookie Management and Control</h3>
                                    <p>Most web browsers allow you to control cookies through their settings. You can typically:</p>
                                    <ul className="cookies-list">
                                        <li>View what cookies are set</li>
                                        <li>Allow or block new cookies from being set</li>
                                        <li>Delete existing cookies</li>
                                        <li>Enable or disable different types of cookies</li>
                                    </ul>
                                    <p className="warning-text">Please note: If you disable cookies, some features of EventNex may not function properly, and your user experience may be negatively affected.</p>
                                </section>

                                <section className="cookies-section">
                                    <h3 className="section-title">6. Do Not Track (DNT)</h3>
                                    <p>Some browsers include a "Do Not Track" feature. EventNex respects DNT signals, but third-party services integrated into our platform may not honor DNT requests. For more information about DNT, visit www.allaboutdnt.com.</p>
                                </section>

                                <section className="cookies-section">
                                    <h3 className="section-title">7. Updates to This Cookies Policy</h3>
                                    <p>We may update this Cookies Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you by posting the updated policy on our website and updating the "Last updated" date.</p>
                                </section>

                                <section className="cookies-section">
                                    <h3 className="section-title">8. Consent and Opt-Out</h3>
                                    <p>By using EventNex, you consent to the use of cookies as described in this policy. If you do not consent to the use of certain cookies, you may adjust your browser settings or contact us for assistance with opting out.</p>
                                </section>

                                <section className="cookies-section">
                                    <h3 className="section-title">9. Contact Us</h3>
                                    <p>If you have any questions about our use of cookies or this Cookies Policy, please contact us:</p>
                                    <div className="contact-details">
                                        <p><strong>Email:</strong> israeljadesola20000@gmail.com</p>
                                        <p><strong>Phone:</strong> (+234) 9131007061</p>
                                        <p><strong>Location:</strong> Oyo, Nigeria</p>
                                    </div>
                                </section>

                                <section className="cookies-section">
                                    <h3 className="section-title">10. GDPR and Data Protection</h3>
                                    <p>If you are a resident of the European Union, additional rights may apply to you under the General Data Protection Regulation (GDPR). We are committed to protecting your personal data and ensuring your privacy rights are respected. For more information, please see our Privacy Policy.</p>
                                </section>
                            </div>

                            <div className="cookies-footer">
                                <p>© 2026 EventNex. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
    )
}

export default CookiesPolicy
