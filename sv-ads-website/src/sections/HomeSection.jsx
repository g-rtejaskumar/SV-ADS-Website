import React from 'react';
import { motion } from 'framer-motion';
import '../styles/home.css';

export default function HomeSection() {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home">
            <div className="home-container">
                <div className="home-content">
                    <motion.h1
                        className="home-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        SV Ads – Premier Outdoor Advertising in Hyderabad
                    </motion.h1>

                    <motion.h2
                        className="home-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        High-impact Hoardings, Billboards, and Unipoles allowing your brand to dominate the skyline.
                    </motion.h2>

                    <motion.p
                        className="home-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        SV Ads is an outdoor advertising company providing strategic hoarding solutions designed to maximize reach, engagement, and brand presence through creative placement and professional execution.
                    </motion.p>

                    <motion.button
                        onClick={scrollToContact}
                        className="cta-button"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Us
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
