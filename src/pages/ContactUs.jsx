import Contact from '../components/Contact';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import contactHeroImage from '../assets/images/contact_hero_background_1767880684564.png';

const ContactUs = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div>
            {/* Hero Section with Background Image */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Parallax */}
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${contactHeroImage})`,
                            backgroundAttachment: 'fixed',
                        }}
                    />
                    {/* Luxury Overlay */}

                </motion.div>

                {/* Content */}
                <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 py-32">
                    <div className="max-w-4xl bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-3xl">
                        <motion.div
                            ref={heroRef}
                            initial={{ opacity: 0, y: 30 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-navy-muted mb-6 leading-tight drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                                Get In{' '}
                                <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                                    Touch
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed max-w-3xl drop-shadow-md">
                                Reach out to our global offices or send us a message - we're here to help
                            </p>
                        </motion.div>
                    </div>
                </div>


            </section>

            <Contact />
        </div>
    );
};

export default ContactUs;
