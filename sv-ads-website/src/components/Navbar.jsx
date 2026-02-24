
import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';

import logo from '../assets/logo.jpeg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Handle scroll for background change
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle Scroll to Section
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // Close mobile menu
        }
    };

    // Active Link Highlighter using IntersectionObserver
    useEffect(() => {
        const sections = ['home', 'about', 'services', 'contact'];

        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px', // Adjusted for better detection
            threshold: 0.5 // Trigger when 50% of section is visible
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => {
            sections.forEach((id) => {
                const element = document.getElementById(id);
                if (element) observer.unobserve(element);
            });
        };
    }, []);

    const navItems = [
        { title: 'Home', id: 'home' },
        { title: 'About', id: 'about' },
        { title: 'Services', id: 'services' },
        { title: 'Contact', id: 'contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} `}>
            <div className="navbar-logo">
                <a href="#home" onClick={() => { setIsOpen(false); setActiveSection('home'); scrollToSection('home'); }}>
                    <img
                        src={logo}
                        alt="SV Ads Logo"
                        className="logo-image"
                        width="50"
                        height="50"
                        fetchpriority="high"
                    />
                    <span className="logo-text">SV Ads</span>
                </a>
            </div>

            <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}>
                    {/* Simple text fallback if fontawesome not active, or SVG can be used */}
                    {isOpen ? '✕' : '☰'}
                </i>
            </div>

            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                {navItems.map((item) => (
                    <li key={item.id} className="nav-item">
                        <a
                            href={`#${item.id}`}
                            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                            onClick={() => {
                                setIsOpen(false); // Close mobile menu
                                setActiveSection(item.id); // Immediate highlight
                            }}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
