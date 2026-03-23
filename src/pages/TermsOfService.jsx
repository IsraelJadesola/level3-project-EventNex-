import React from 'react'
import Navbar from '../components/Navbar'
import logo from '../assets/images/logo.png'
import './TermsOfService.css'

const TermsOfService = () => {
    return (
        <Navbar>
            <div className="container terms-hero" style={{ paddingTop: 'calc(var(--navbar-offset,72px) - 96px)', minHeight: '90vh' }}>
                <div className="row justify-content-center">
                    <div className="col-md-11 col-lg-10">
                        <div className="terms-card shadow-sm rounded">
                            <div className="terms-header">
                                <div className="brand-row mb-3">
                                    <img src={logo} alt="logo" className="terms-logo" />
                                    <h2 className="mb-0 terms-title">Terms of Service</h2>
                                </div>
                                <p className="terms-sub">Last updated: March 22, 2026</p>
                            </div>

                            <div className="terms-content">
                                <section className="terms-section">
                                    <h3 className="section-title">1. Acceptance of Terms</h3>
                                    <p>By accessing and using EventNex, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                                </section>

                                <section className="terms-section">
                                    <h3 className="section-title">2. Use License</h3>
                                    <p>Permission is granted to temporarily download one copy of the materials (information or software) on EventNex for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                                    <ul className="terms-list">
                                        <li>Modify or copy the materials</li>
                                        <li>Use the materials for any commercial purpose or for any public display</li>
                                        <li>Attempt to decompile or reverse engineer any software contained on the Platform</li>
                                        <li>Remove any copyright or other proprietary notations from the materials</li>
                                        <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                                    </ul>
                                </section>

                                <section className="terms-section">
                                    <h3 className="section-title">3. Disclaimer of Warranties</h3>
                                    <p>The materials on EventNex are provided "as is" without warranties of any kind, either express or implied. EventNex disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose.</p>
                                </section>

                                <section className="terms-section">
                                    <h3 className="section-title">4. Limitations of Liability</h3>
                                    <p>In no event shall EventNex or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on EventNex, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>
                                </section>

                                <section className="terms-section">
                                    <h3 className="section-title">5. Accuracy of Materials</h3>
                                    <p>The materials appearing on EventNex could include technical, typographical, or photographic errors. EventNex does not warrant that any of the materials on the Platform are accurate, complete, or current. We may make changes to the materials contained on our Platform at any time without notice.</p>
                                </section>

                                <section className="terms-section">
                                    <h3 className="section-title">6. Materials and Content</h3>
                                    <p>The materials on EventNex are protected by copyright law and owned or controlled by EventNex or the party credited as the material provider. You assume all responsibility and risk for the use of the materials on this Platform, including the risk that the Materials may be offensive, indecent, or otherwise objectionable.</p>
                                </section>

                                <section className="terms-section">
                                    <h3 className="section-title">7. Links</h3>
                                    <p>EventNex has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by EventNex of the site. Use of any such linked website is at the user's own risk.</p>
                                </section>

                                <section className="terms-section">
                                    <h3 className="section-title">8. Modifications</h3>
                                    <p>EventNex may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>
                                </section>

                                <section className="terms-section">
                                    <h3 className="section-title">9. Governing Law</h3>
                                    <p>The materials appearing on EventNex are governed by and construed in accordance with the laws of Nigeria, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
                                </section>

                                <section className="terms-section">
                                    <h3 className="section-title">10. User Accounts</h3>
                                    <p>If you create an account on EventNex, you are responsible for maintaining the confidentiality of your account information and password. You agree to accept responsibility for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.</p>
                                </section>

                                <section className="terms-section">
                                    <h3 className="section-title">11. Event Bookings and Cancellations</h3>
                                    <p>
                                        Event bookings are subject to availability and confirmation by event organizers. Users may cancel bookings up to 48 hours before an event for a full refund. Cancellations made within 24 hours may be subject to cancellation fees. EventNex is not responsible for events that are canceled by organizers.
                                    </p>
                                </section>

                                <section className="terms-section">
                                    <h3 className="section-title">12. Donations</h3>
                                    <p>All donations made through EventNex are non-refundable except where required by law. Donations are voluntary contributions and EventNex is not liable for how funds are used. Donors agree to provide accurate information during the donation process.</p>
                                </section>

                                <section className="terms-section">
                                    <h3 className="section-title">13. Prohibited Conduct</h3>
                                    <p>You agree not to use EventNex for any unlawful or abusive purpose, including:</p>
                                    <ul className="terms-list">
                                        <li>Harassing or causing distress or inconvenience to any person</li>
                                        <li>Obscene or abusive material, or material which may threaten or cause embarrassment to any individual</li>
                                        <li>Disrupting the normal flow of dialogue within EventNex communication spaces</li>
                                        <li>Attempting to gain unauthorized access to systems or accounts</li>
                                        <li>Transmitting spam or unsolicited communications</li>
                                    </ul>
                                </section>

                                <section className="terms-section">
                                    <h3 className="section-title">14. Intellectual Property Rights</h3>
                                    <p>Unless otherwise stated, EventNex owns the intellectual property rights for all material on the Platform. All intellectual property rights are reserved. You may access this for personal use subject to restrictions set in these terms and conditions.</p>
                                </section>

                                <section className="terms-section">
                                    <h3 className="section-title">15. Privacy Policy</h3>
                                    <p>Your use of EventNex is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding collection and use of your personal information.</p>
                                </section>

                                <section className="terms-section">
                                    <h3 className="section-title">16. Contact Information</h3>
                                    <p>If you have any questions about these Terms of Service, please contact us at:</p>
                                    <div className="contact-details">
                                        <p><strong>Email:</strong> israeljadesola20000@gmail.com</p>
                                        <p><strong>Phone:</strong> (+234) 9131007061</p>
                                        <p><strong>Location:</strong> Oyo, Nigeria</p>
                                    </div>
                                </section>
                            </div>

                            <div className="terms-footer">
                                <p>© 2026 EventNex. All rights reserved.</p>
                                <p className="acceptance-note">By using EventNex, you acknowledge that you have read and agree to be bound by these Terms of Service.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
    )
}

export default TermsOfService
