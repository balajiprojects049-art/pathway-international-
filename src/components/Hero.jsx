import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import heroImage from '../assets/images/hero_education_international_1767878831868.png';

const Hero = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax Effect */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${heroImage})`,
                        backgroundAttachment: 'fixed',
                    }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
            </motion.div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 pb-16">
                <div className="max-w-4xl">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-block mb-6"
                        >
                            <span className="glass-card px-6 py-2 rounded-full text-sm font-semibold text-brand-purple border border-brand-light">
                                🌍 Your Global Education Partner
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                        >
                            Shape Your{' '}
                            <span className="bg-gradient-to-r from-brand-purple via-brand-purple to-brand-blue bg-clip-text text-transparent">
                                Global Education
                            </span>{' '}
                            Journey
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl"
                        >
                            Expert guidance for overseas education, university admissions, visa assistance,
                            and scholarship opportunities. Transform your dreams into reality with our
                            international consultancy based abroad.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)' }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all inline-flex items-center justify-center"
                            >
                                <span className="mr-2">📅</span>
                                Schedule Consultation
                            </motion.a>

                            <motion.a
                                href="#destinations"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 glass-card text-brand-purple rounded-full font-semibold text-lg hover:border-brand-purple/30 transition-all inline-flex items-center justify-center"
                            >
                                <span className="mr-2">🌎</span>
                                Explore Countries
                            </motion.a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="grid grid-cols-3 gap-6 mt-12 max-w-2xl"
                        >
                            {[
                                { number: '10,000+', label: 'Students Placed' },
                                { number: '50+', label: 'Partner Universities' },
                                { number: '15+', label: 'Countries' },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-brand-purple">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm md:text-base text-gray-600 mt-1">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
        </section>
    );
};

export default Hero;
