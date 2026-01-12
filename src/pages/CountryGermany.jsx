import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import StudentInquiryForm from '../components/StudentInquiryForm';
import heroGermany from '../assets/images/germany_university.png';
import globalCtaImage from '../assets/images/global_cta_background.png';

const CountryGermany = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const topUniversities = [
        { name: "Technical University of Munich", rank: "#1 in Germany", loc: "Munich" },
        { name: "LMU Munich", rank: "Top Research", loc: "Munich" },
        { name: "Heidelberg University", rank: "Oldest University", loc: "Heidelberg" },
        { name: "Humboldt University of Berlin", rank: "Excellence Strategy", loc: "Berlin" }
    ];

    const benefits = [
        { title: "No Tuition Fees", desc: "Public universities offer free or low-cost education for international students." },
        { title: "Strong Economy", desc: "Access to the largest economy in Europe with ample job opportunities." },
        { title: "Engineering Hub", desc: "World-renowned for engineering and technical education." },
        { title: "Schengen Visa", desc: "Travel freely across 27 European countries while you study." }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section ref={heroRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-10000 hover:scale-110"
                    style={{ backgroundImage: `url(${heroGermany})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg"
                    >
                        Study in <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-400">Germany</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto mb-10 leading-relaxed"
                    >
                        Excellence in engineering, innovation, and tuition-free education.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        onClick={() => setIsFormOpen(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white text-navy-900 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto"
                    >
                        <span>Explore Universities</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.button>
                </div>
            </section>

            {/* Why Germany */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-display font-bold text-navy-900 mb-6">Why Choose Germany?</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Germany combines rich history with cutting-edge innovation, offering world-class education at little to no cost.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                            >
                                <h3 className="text-2xl font-bold text-navy-900 mb-4">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Universities */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-4xl font-display font-bold text-navy-900 mb-16 text-center">Top Universities</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {topUniversities.map((uni, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center group"
                            >
                                <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-100 transition-colors">
                                    <span className="text-2xl">🏛️</span>
                                </div>
                                <h3 className="text-xl font-bold text-navy-900 mb-2">{uni.name}</h3>
                                <p className="text-brand-purple font-semibold mb-2">{uni.rank}</p>
                                <p className="text-gray-500 text-sm">{uni.loc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Matching Home Page Style */}
            <section className="relative py-32 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                    style={{ backgroundImage: `url(${globalCtaImage})` }}
                />
                <div className="absolute inset-0 bg-brand-purple/90 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 drop-shadow-lg">
                            Start Your German Education Today
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                            Benefit from world-class research and career opportunities in the heart of Europe.
                        </p>
                        <motion.button
                            onClick={() => setIsFormOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mx-auto px-12 py-5 bg-white/95 backdrop-blur-md text-brand-purple rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all border border-white/50 flex items-center gap-3"
                        >
                            <span>Apply Now</span>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Student Inquiry Form Modal */}
            <StudentInquiryForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                country="Germany"
            />
        </div>
    );
};

export default CountryGermany;
