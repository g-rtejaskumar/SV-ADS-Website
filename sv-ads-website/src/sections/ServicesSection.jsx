import { FaRegImage, FaBroadcastTower, FaLightbulb, FaRoad, FaTrafficLight } from 'react-icons/fa';
import { MdOutlineDisplaySettings } from 'react-icons/md';
import { motion } from 'framer-motion';
import '../styles/services.css';

export default function ServicesSection() {
    const services = [
        {
            title: "Static Hoardings (Flex/Vinyl)",
            description: "High-quality, durable flex and vinyl hoardings positioned in prime locations for maximum static visibility.",
            icon: <FaRegImage />
        },
        {
            title: "Unipole Structures",
            description: "Tall, standalone advertising structures offering uncluttered, long-distance visibility on highways and main roads.",
            icon: <FaBroadcastTower />
        },
        {
            title: "Digital LED Billboards",
            description: "Dynamic digital displays that capture attention with bright, moving visuals and real-time content updates.",
            icon: <MdOutlineDisplaySettings />
        },
        {
            title: "Backlit Hoardings",
            description: "Illuminated hoardings that ensure your brand message shines bright and remains visible even at night.",
            icon: <FaLightbulb />
        },
        {
            title: "Highway Hoardings",
            description: "Strategically placed large-format billboards on major highways to target travelers and commuters effectively.",
            icon: <FaRoad />
        },
        {
            title: "Junction Dominating Hoardings",
            description: "Large-scale hoardings placed at busy traffic junctions to guarantee high impressions and brand dominance.",
            icon: <FaTrafficLight />
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="services">
            <div className="services-container">
                <h2 className="services-title">Our Outdoor Advertising Services</h2>

                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            variants={cardVariants}
                            whileHover={{
                                y: -5,
                                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)"
                            }}
                        >
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-heading">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
