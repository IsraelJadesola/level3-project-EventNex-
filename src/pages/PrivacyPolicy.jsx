import React from 'react'
import Navbar from '../components/Navbar'
import logo from '../assets/images/logo.png'
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
    return (
        <Navbar>
            <div className="container privacy-hero" style={{ paddingTop: 'calc(var(--navbar-offset,72px) - 96px)', minHeight: '90vh' }}>
                <div className="row justify-content-center">
                    <div className="col-md-11 col-lg-10">
                        <div className="privacy-card shadow-sm rounded">
                            <div className="privacy-header">
                                <div className="brand-row mb-3">
                                    <img src={logo} alt="logo" className="privacy-logo" />
                                    <h2 className="mb-0 privacy-title">Privacy Policy</h2>
                                </div>
                                <p className="privacy-sub">Last updated: March 22, 2026</p>
                            </div>

                            <div className="privacy-content">
                                <section className="privacy-section">
                                    <h3 className="section-title">1. Introduction</h3>
                                    <p>EventNex ("we", "us", "our", or "Company") operates the EventNex website and mobile application. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.</p>
                                </section>

                                <section className="privacy-section">
                                    <h3 className="section-title">2. Information Collection and Use</h3>
                                    <p>We collect several different types of information for various purposes to provide and improve our service to you.</p>
                                    <h4 className="subsection-title">Types of Data Collected:</h4>
                                    <ul className="privacy-list">
                                        <li><strong>Personal Data:</strong> Name, email address, phone number, mailing address, cookies and usage data</li>
                                        <li><strong>Usage Data:</strong> Browser type, pages visited, time and date of visits, time spent on pages, unique device identifiers, IP address</li>
                                        <li><strong>Payment Data:</strong> Payment method information (credit card is not stored; payment is processed by secure third-party providers)</li>
                                        <li><strong>Event Data:</strong> Events you register for, bookings, cancellations, and attendance history</li>
                                        <li><strong>Communication Data:</strong> Messages, feedback, and support requests you send to us</li>
                                    </ul>
                                </section>

                                <section className="privacy-section">
                                    <h3 className="section-title">3. Use of Data</h3>
                                    <p>EventNex uses the collected data for various purposes:</p>
                                    <ul className="privacy-list">
                                        <li>To provide and maintain our service</li>
                                        <li>To notify you about changes to our service</li>
                                        <li>To allow you to participate in interactive features of our service</li>
                                        <li>To provide customer care and support</li>
                                        <li>To gather analysis or valuable information so that we can improve our service</li>
                                        <li>To monitor the usage of our service</li>
                                        <li>To detect, prevent and address technical and security issues</li>
                                        <li>To send promotional communications (with your consent)</li>
                                    </ul>
                                </section>

                                <section className="privacy-section">
                                    <h3 className="section-title">4. Security of Data</h3>
                                    <p>The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.</p>
                                </section>

                                <section className="privacy-section">
                                    <h3 className="section-title">5. Children's Privacy</h3>
                                    <p>Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information and terminate the child's account.</p>
                                </section>

                                <section className="privacy-section">
                                    <h3 className="section-title">6. Changes to This Privacy Policy</h3>
                                    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.</p>
                                </section>

                                <section className="privacy-section">
                                    <h3 className="section-title">7. Contact Us</h3>
                                    <p>If you have any questions about this Privacy Policy, please contact us:</p>
                                    <div className="contact-details">
                                        <p><strong>Email:</strong> israeljadesola20000@gmail.com</p>
                                        <p><strong>Phone:</strong> (+234) 9131007061</p>
                                        <p><strong>Location:</strong> Oyo, Nigeria</p>
                                    </div>
                                </section>

                                <section className="privacy-section">
                                    <h3 className="section-title">8. Legal Basis for Processing</h3>
                                    <p>We may process your personal information for the following reasons:</p>
                                    <ul className="privacy-list">
                                        <li>You have given your consent for one or more specific purposes</li>
                                        <li>The performance of a contract to which you are the subject</li>
                                        <li>To fulfill our legal obligations</li>
                                        <li>To protect vital interests of you or another person</li>
                                        <li>To perform tasks carried out in the public interest</li>
                                        <li>Legitimate interests pursued by us or a third party</li>
                                    </ul>
                                </section>

                                <section className="privacy-section">
                                    <h3 className="section-title">9. Your Rights</h3>
                                    <p>You have the right to:</p>
                                    <ul className="privacy-list">
                                        <li>Access the personal data we hold about you</li>
                                        <li>Request correction of inaccurate data</li>
                                        <li>Request deletion of your data</li>
                                        <li>Object to the processing of your data</li>
                                        <li>Request restriction of processing your data</li>
                                        <li>Request to receive your data in a structured, commonly used format</li>
                                    </ul>
                                    <p>To exercise any of these rights, please contact us at the information provided above.</p>
                                </section>

                                <section className="privacy-section">
                                    <h3 className="section-title">10. Third-Party Services</h3>
                                    <p>EventNex may use third-party services that may collect information used to identify you. These third parties have their own privacy policies governing the use of information they collect. We are not responsible for the privacy practices of these third parties.</p>
                                </section>
                            </div>

                            <div className="privacy-footer">
                                <p>© 2026 EventNex. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
    )
}

export default PrivacyPolicy
