import Testimonials from '../components/Testimonials';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import successHeroImage from '../assets/images/success_hero_background_1767880643123.png';
import globalCtaImage from '../assets/images/global_cta_background.png';

const StudentSuccess = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className="min-h-screen bg-white">
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
                            backgroundImage: `url(${successHeroImage})`,
                            backgroundAttachment: 'fixed',
                        }}
                    />
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
                </motion.div>

                {/* Content */}
                <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 py-32">
                    <div className="max-w-4xl bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/50 shadow-2xl">
                        <motion.div
                            ref={heroRef}
                            initial={{ opacity: 0, y: 30 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-navy-muted mb-6 leading-tight drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                                Student{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">
                                    Success Stories
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed max-w-3xl drop-shadow-md">
                                Real journeys, real achievements from students we've helped reach their dreams
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Testimonials />

            {/* Premium Parallax CTA Section */}
            <section className="relative py-32 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${globalCtaImage})`,
                        backgroundAttachment: 'fixed',
                    }}
                />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-purple/40 to-transparent" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 drop-shadow-lg">
                            You Could Be Our Next Success Story
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                            Don't leave your future to chance. Get expert guidance for your study abroad journey.
                        </p>
                        <Link to="/book-consultation">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-5 bg-white text-brand-purple rounded-full font-bold text-lg shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all border border-white/50"
                            >
                                Schedule Consultation
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default StudentSuccess;
