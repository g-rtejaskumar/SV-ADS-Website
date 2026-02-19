import React from 'react';
import { motion } from 'framer-motion';
import '../styles/about.css';

export default function AboutSection() {
    return (
        <section id="about">
            <motion.div
                className="about-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h2 className="about-title">About SV Ads</h2>

                <div className="about-content-wrapper">
                    <div className="about-column">
                        <p className="about-intro">
                            SV Ads is an outdoor advertising and publishing company based in Hyderabad, India. We specialize in hoardings and outdoor branding solutions designed to increase visibility and strengthen brand presence.
                        </p>

                        <h3 className="about-subtitle">Our Mission</h3>
                        <p className="about-text">
                            To redefine outdoor advertising through creative design, strategic placement, and reliable execution that helps brands stand out in competitive markets.
                        </p>

                        <h3 className="about-subtitle">Our Vision</h3>
                        <p className="about-text">
                            To become a trusted leader in outdoor advertising by combining innovation, technology, and creative thinking to deliver memorable advertising experiences.
                        </p>
                    </div>

                    <div className="about-column">
                        <h3 className="about-subtitle">Why Choose Us?</h3>
                        <ul className="strengths-list">
                            <li>Strategic hoarding placement</li>
                            <li>Creative design support</li>
                            <li>Reliable installation and maintenance</li>
                            <li>Focus on high-visibility locations</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
