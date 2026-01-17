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
                    <div className="max-w-4xl bg-black/20 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
                        <motion.div
                            ref={heroRef}
                            initial={{ opacity: 0, y: 30 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
                                Contact{' '}
                                <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                                    Our Team
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed max-w-3xl drop-shadow-md">
                                Connect with our international offices or submit an inquiry - we are here to assist you
                            </p>
                        </motion.div>
                    </div>
                </div>


            </section>

            <Contact />

            {/* Map Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-display font-bold text-navy-muted mb-4">Visit Our Office</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                We are conveniently located in Nellore. Drop by for a face-to-face consultation.
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                Maanvi Mansion, King's Court Avenue, beside Nellore Hub, Srihari Nagar, Magunta Layout, Nellore, Andhra Pradesh 524003
                            </p>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-[450px]">
                            <iframe
                                width="100%"
                                height="100%"
                                id="gmap_canvas"
                                src="https://maps.google.com/maps?q=PATHWAY%20INTERNATIONAL%20-%20Best%20Study%20Abroad%2C%20IELTS%2C%20PTE%20%26%20TOEFL%20Guidance%20%26%20VISA%20SUPPORT%2C%20Maanvi%20Mansion%2C%20King's%20Court%20Avenue%2C%20beside%20Nellore%20Hub%2C%20Srihari%20Nagar%2C%20Magunta%20Layout%2C%20Nellore%2C%20Andhra%20Pradesh%20524003&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                title="Pathway International Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
