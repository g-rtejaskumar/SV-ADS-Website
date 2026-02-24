import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.jpeg';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="SV Ads Logo" />
                    <span>SV Ads</span>
                </div>

                <div className="footer-contact-row">
                    <div className="footer-contact-item">
                        <FaEnvelope className="footer-icon" />
                        <a href="mailto:svads.official@gmail.com">svads.official@gmail.com</a>
                    </div>
                    <div className="footer-separator">|</div>
                    <div className="footer-contact-item">
                        <FaPhoneAlt className="footer-icon" />
                        <a href="tel:+918019146665">+91 8019146665</a>
                    </div>
                </div>

                <div className="footer-address">
                    <FaMapMarkerAlt className="footer-icon" />
                    <p>
                        5-9-213/12 PNO 12, Near Electricity Office Lane,<br />
                        Yapral, Secunderabad, Hyderabad - 500087
                    </p>
                </div>

                <div className="footer-socials">
                    <a href="#" className="social-icon" aria-label="Facebook"><FaFacebook /></a>
                    <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
                    <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
                </div>

                <div className="footer-copyright">
                    <p>&copy; 2026 SV Ads. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
