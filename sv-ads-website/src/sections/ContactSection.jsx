import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SHEET_ENDPOINT = import.meta.env.VITE_GOOGLE_SHEET_ENDPOINT;

export default function ContactSection() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        mediaType: '',
        message: '',
        company: ''
    });

    const [isSending, setIsSending] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Honeypot spam protection
        if (formData.company) {
            return;
        }

        setIsSending(true);
        setStatusMessage("");

        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            city: formData.city,
            media: formData.mediaType,
            message: formData.message
        };

        const leadPayload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            city: formData.city,
            media: formData.mediaType,
            message: formData.message,
            date: new Date().toLocaleString()
        };

        try {

            // 1️⃣ Send lead email to SV Ads
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                templateParams,
                PUBLIC_KEY
            );

            // 2️⃣ Send auto-reply email to customer
            await emailjs.send(
                SERVICE_ID,
                AUTOREPLY_TEMPLATE_ID,
                templateParams,
                PUBLIC_KEY
            );

            // 3️⃣ Save lead to Google Sheets
            if (SHEET_ENDPOINT) {
                fetch(SHEET_ENDPOINT, {
                    method: "POST",
                    body: JSON.stringify(leadPayload)
                }).catch(() => {});
            }

            setStatusMessage("success");

            setFormData({
                name: '',
                email: '',
                phone: '',
                city: '',
                mediaType: '',
                message: '',
                company: ''
            });

        } catch (error) {
            console.error(error);
            setStatusMessage("error");
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
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >

                <h2 className="contact-title">Contact SV Ads Hyderabad</h2>

                <div className="contact-wrapper">

                    <div className="contact-info">

                        <div className="info-card">
                            <div className="info-icon"><FaMapMarkerAlt /></div>
                            <div className="info-content">
                                <h3>Visit Us</h3>
                                <p>
                                    5-9-213/12 PNO 12<br/>
                                    Near Electricity Office Lane<br/>
                                    Yapral, Secunderabad<br/>
                                    Hyderabad - 500087
                                </p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon"><FaEnvelope /></div>
                            <div className="info-content">
                                <h3>Email Us</h3>
                                <p>
                                    <a href="mailto:svads.official@gmail.com">
                                        svads.official@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon"><FaPhoneAlt /></div>
                            <div className="info-content">
                                <h3>Call Us</h3>
                                <p>
                                    <a href="tel:+918019146665">
                                        +91 8019146665
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="map-container">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1323606988476!2d78.54125107033305!3d17.50119394673003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b6a81846819%3A0x278a59aa093ec1b7!2sEngineer%E2%80%99s%20Mansion%2C%205-9-263%2C%202nd%20St%2C%20Kalyanpuri%20colony%2C%20Chandragiri%20Colony%2C%20Yapral%2C%20Hyderabad%2C%20Secunderabad%2C%20Telangana%20500087!5e0!3m2!1sen!2sin!4v1771525081564!5m2!1sen!2sin"
                                loading="lazy"
                                allowFullScreen
                            ></iframe>
                        </div>

                    </div>

                    <div className="contact-form-container">

                        {statusMessage === "success" && (
                            <div className="form-success">
                                ✔ Thank you! Your enquiry has been submitted.
                                Our team will contact you shortly.
                            </div>
                        )}

                        {statusMessage === "error" && (
                            <div className="form-error">
                                Something went wrong. Please try again later.
                            </div>
                        )}

                        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">

                            {/* Honeypot */}
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                style={{ display: "none" }}
                            />

                            <div className="form-group">
                                <label>Full Name *</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                            </div>

                            <div className="form-group">
                                <label>Email Address *</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>

                            <div className="form-group">
                                <label>Phone Number *</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                            </div>

                            <div className="form-group">
                                <label>City *</label>
                                <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                            </div>

                            <div className="form-group">
                                <label>Interested Media Type</label>
                                <select name="mediaType" value={formData.mediaType} onChange={handleChange} required>
                                    <option value="">Select Media Type</option>
                                    <option value="Static Hoardings">Static Hoardings</option>
                                    <option value="Unipole Structures">Unipole Structures</option>
                                    <option value="Digital LED Billboards">Digital LED Billboards</option>
                                    <option value="Backlit Hoardings">Backlit Hoardings</option>
                                    <option value="Highway Hoardings">Highway Hoardings</option>
                                    <option value="Junction Dominating Hoardings">Junction Dominating Hoardings</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Campaign Details</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} rows="4"></textarea>
                            </div>

                            <button type="submit" className="submit-btn" disabled={isSending}>
                                {isSending ? "Sending..." : "Send Enquiry"}
                            </button>

                            <p className="form-note">
                                We respect your privacy. Our team usually responds within 24 hours.
                            </p>

                        </form>

                    </div>

                </div>

            </motion.div>

        </section>
    );
}