import React from 'react';

const ContactSection = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container" data-aos="fade-up">
                <h2>Contact</h2>

                <div className="contact-container">
                    <div className="contact-info" data-aos="fade-up">
                        {/* Phone icon with link */}
                        <p>
                            <img src="https://i.ibb.co/tL1pmCw/phone-call-597177.png" alt="Phone Icon" />
                            <a href="tel:+919913161524">+919913161524</a>
                        </p>
                        {/* Email icon with link */}
                        <p>
                            <img src="https://i.ibb.co/34DhNXw/gmail-732200.png" alt="Email Icon" />
                            <a href="mailto:cnehal194@gmail.com">cnehal194@gmail.com</a>
                        </p>
                    </div>

                    <div className="social-media-box" data-aos="fade-up">
                        <h3>Connect with me on social media:</h3>
                        <ul>
                            {/* Instagram icon with a link */}
                            <li>
                                <a href="https://www.instagram.com/nehal_chauhan19/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://i.ibb.co/p1B8nbr/instagram-2111463.png" alt="Instagram Logo" />
                                </a>
                            </li>
                            {/* Twitter icon with a link */}
                            <li className="twitter">
                                <a href="https://twitter.com/nehal_chauhan19" target="_blank" rel="noopener noreferrer">
                                    <img src="https://i.ibb.co/XZZMGDS/twitter-5968830.png" alt="Twitter Logo" />
                                </a>
                            </li>
                            {/* GitHub icon with a link */}
                            <li className="github">
                                <a href="https://github.com/mRcOol7" target="_blank" rel="noopener noreferrer">
                                    <img src="https://i.ibb.co/M857rD7/github-733609.png" alt="GitHub Logo" />
                                </a>
                            </li>
                            {/* LinkedIn icon with a link */}
                            <li className="linkedin">
                                <a href="https://www.linkedin.com/in/nehal-chauhan19/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://i.ibb.co/3mBzRBD/linkedin-3536505.png" alt="LinkedIn Logo" />
                                </a>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
