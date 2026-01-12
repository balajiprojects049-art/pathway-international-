import Services from '../components/Services';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import servicesHeroImage from '../assets/images/services_hero_background_1767880603856.png';
import servicesCtaImage from '../assets/images/services_cta_background.png';

const ServicesPage = () => {
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
                            backgroundImage: `url(${servicesHeroImage})`,
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
                                Our{' '}
                                <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                                    Services
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed max-w-3xl drop-shadow-md">
                                Comprehensive support for every step of your study abroad journey
                            </p>
                        </motion.div>
                    </div>
                </div>


            </section>

            <Services />

            {/* Success Statistics Section */}
            <section className="py-20 bg-gradient-to-b from-white to-brand-light">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-muted mb-4">
                            Our Success <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">in Numbers</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            A proven track record of student placements worldwide
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { number: '10,000+', label: 'Students Placed', icon: '🎓' },
                            { number: '98%', label: 'Visa Approval Rate', icon: '✈️' },
                            { number: '50+', label: 'Partner Institutions', icon: '🏛️' },
                            { number: '25+', label: 'Countries Covered', icon: '🌍' },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="glass-card p-8 rounded-2xl text-center hover:shadow-xl transition-all"
                            >
                                <div className="text-5xl mb-4">{stat.icon}</div>
                                <div className="text-4xl md:text-5xl font-bold text-brand-purple mb-2">{stat.number}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Timeline Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-muted mb-4">
                            How We <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">Work</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            A streamlined process designed for your academic success
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {[
                            {
                                step: '01',
                                title: 'Initial Consultation',
                                description: 'Complimentary personalized counseling session to understand your goals, profile, and preferences',
                                duration: '1 hour'
                            },
                            {
                                step: '02',
                                title: 'University Shortlisting',
                                description: 'Curated list of universities matching your profile, budget, and career aspirations',
                                duration: '2-3 days'
                            },
                            {
                                step: '03',
                                title: 'Application Preparation',
                                description: 'Comprehensive support for essays, SOPs, LORs, and documentation',
                                duration: '2-4 weeks'
                            },
                            {
                                step: '04',
                                title: 'Submission & Follow-up',
                                description: 'Timely application submission and regular communication with university admissions',
                                duration: '1-2 weeks'
                            },
                            {
                                step: '05',
                                title: 'Visa Guidance',
                                description: 'Expert assistance with visa documentation, interview preparation, and submission',
                                duration: '3-6 weeks'
                            },
                            {
                                step: '06',
                                title: 'Pre-Departure',
                                description: 'Orientation covering accommodation, travel, and settling into your new country',
                                duration: '2-3 weeks'
                            },
                        ].map((process, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="flex gap-6 items-start group"
                            >
                                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                                    {process.step}
                                </div>
                                <div className="flex-1 glass-card p-6 rounded-2xl group-hover:shadow-lg transition-all">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-2xl font-bold text-navy-muted">{process.title}</h3>
                                        <span className="text-sm text-brand-purple font-semibold bg-brand-purple/10 px-3 py-1 rounded-full">
                                            {process.duration}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Our Services Section */}
            <section className="py-20 bg-gradient-to-b from-brand-light to-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-muted mb-4">
                            Why Choose <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">Our Services</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            What sets us apart from other consulting firms
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                icon: '⚡',
                                title: 'Expedited Processing',
                                description: 'Efficient turnaround times without compromising quality. Most applications processed within 48 hours.'
                            },
                            {
                                icon: '🎯',
                                title: 'Personalized Approach',
                                description: 'No one-size-fits-all. Every student receives customized guidance based on their unique profile.'
                            },
                            {
                                icon: '💼',
                                title: 'Expert Counselors',
                                description: 'Team of certified counselors with over a decade of experience in international education.'
                            },
                            {
                                icon: '🤝',
                                title: 'Comprehensive Support',
                                description: 'From initial consultation to arrival, we are with you at every step of the journey.'
                            },
                            {
                                icon: '💰',
                                title: 'Transparent Pricing',
                                description: 'No hidden fees. Clear pricing structure with flexible payment options available.'
                            },
                            {
                                icon: '🌟',
                                title: 'Post-Landing Support',
                                description: 'Our relationship doesn\'t end at the airport. We provide ongoing support even after you arrive.'
                            },
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="glass-card p-8 rounded-2xl hover:shadow-xl transition-all group"
                            >
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                                <h3 className="text-2xl font-bold text-navy-muted mb-3">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section with Parallax Background */}
            <section className="relative py-32 md:py-40 overflow-hidden">
                {/* Fixed Parallax Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${servicesCtaImage})`,
                        backgroundAttachment: 'fixed',
                    }}
                />

                {/* Transparent Glass/Mirror Overlay */}
                <div className="absolute inset-0 bg-white/15" />

                {/* Subtle Gradient for Depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />

                {/* Content - Scrolls Normally */}
                <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-white font-light leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                            Schedule a complimentary consultation with our expert counselors today
                        </p>
                        <Link to="/book-consultation">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-5 bg-white/95 backdrop-blur-md text-brand-purple rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all inline-flex items-center gap-3 border border-white/50"
                            >
                                <span>Schedule Consultation</span>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
