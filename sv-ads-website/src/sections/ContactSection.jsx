import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';

// ⚠️ Replace these with your actual EmailJS credentials
const SERVICE_ID = 'service_cx2l0sv';
const TEMPLATE_ID = 'template_y701zs7';
const PUBLIC_KEY = '9pQ_i2qAdoVv76Ib1';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        mediaType: '',
        message: ''
    });
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            city: formData.city,
            media: formData.mediaType,
            message: formData.message,
        };

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            alert('Thank you! SV Ads will contact you soon.');
            setFormData({
                name: '',
                email: '',
                phone: '',
                city: '',
                mediaType: '',
                message: ''
            });
        } catch (error) {
            console.error('EmailJS error:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contact">
            <motion.div
                className="contact-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <h2 className="contact-title">Contact SV Ads Hyderabad</h2>

                <div className="contact-wrapper">
                    {/* Left Side: Contact Info & Map */}
                    <div className="contact-info">
                        <div className="info-card">
                            <div className="info-icon">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="info-content">
                                <h3>Visit Us</h3>
                                <p>5-9-213/12 PNO 12<br />
                                    Near Electricity Office Lane<br />
                                    Yapral, Secunderabad<br />
                                    Hyderabad - 500087</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <FaEnvelope />
                            </div>
                            <div className="info-content">
                                <h3>Email Us</h3>
                                <p><a href="mailto:svads.official@gmail.com">svads.official@gmail.com</a></p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <FaPhoneAlt />
                            </div>
                            <div className="info-content">
                                <h3>Call Us</h3>
                                <p><a href="tel:+918019146665">+91 8019146665</a></p>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="map-container">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1323606988476!2d78.54125107033305!3d17.50119394673003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b6a81846819%3A0x278a59aa093ec1b7!2sEngineer%E2%80%99s%20Mansion%2C%205-9-263%2C%202nd%20St%2C%20Kalyanpuri%20colony%2C%20Chandragiri%20Colony%2C%20Yapral%2C%20Hyderabad%2C%20Secunderabad%2C%20Telangana%20500087!5e0!3m2!1sen!2sin!4v1771525081564!5m2!1sen!2sin"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="city">City *</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your city"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="mediaType">Interested Media Type</label>
                                <select
                                    id="mediaType"
                                    name="mediaType"
                                    value={formData.mediaType}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select Media Type</option>
                                    <option value="Static Hoardings">Static Hoardings (Flex/Vinyl)</option>
                                    <option value="Unipole Structures">Unipole Structures</option>
                                    <option value="Digital LED Billboards">Digital LED Billboards</option>
                                    <option value="Backlit Hoardings">Backlit Hoardings</option>
                                    <option value="Highway Hoardings">Highway Hoardings</option>
                                    <option value="Junction Dominating Hoardings">Junction Dominating Hoardings</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Campaign Details</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Tell us about your requirements..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={isSending}
                                style={{ opacity: isSending ? 0.7 : 1, cursor: isSending ? 'not-allowed' : 'pointer' }}
                            >
                                {isSending ? 'Sending...' : 'Send Enquiry'}
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </section >
    );
}
