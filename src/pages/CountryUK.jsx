import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import StudentInquiryForm from '../components/StudentInquiryForm';
import heroUk from '../assets/images/hero_uk_premium.png';
import globalCtaImage from '../assets/images/global_cta_background.png';

const CountryUK = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const topUniversities = [
        'University of Oxford',
        'University of Cambridge',
        'Imperial College London',
        'University College London (UCL)',
        'University of Edinburgh',
        'University of Manchester',
        'King\'s College London',
        'London School of Economics (LSE)',
    ];

    const whyStudyPoints = [
        { title: "Academic Heritage", desc: "Home to some of the world's oldest and most prestigious universities." },
        { title: "Shorter Duration", desc: "Complete Master's degrees in just 1 year, saving time and money." },
        { title: "Cultural Hub", desc: "Experience a multicultural society with a rich history and global influence." },
        { title: "Research Excellence", desc: "Ranked 2nd in the world for science and research quality." },
        { title: "Post-Study Work", desc: "Graduate Route Visa allows you to work for 2 years after graduation." },
        { title: "Health Benefits", desc: "Access to comprehensive healthcare through the National Health Service (NHS)." },
    ];

    const popularCourses = [
        'Business & Management', 'Law', 'Engineering',
        'Art & Design', 'Computer Science', 'Medicine',
        'Architecture', 'Psychology'
    ];

    const stats = [
        { label: "Universities", value: "160+" },
        { label: "International Students", value: "600k+" },
        { label: "Masters Duration", value: "1 Year" },
        { label: "Post-Study Visa", value: "2 Yrs" }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Parallax Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${heroUk})`,
                        backgroundAttachment: 'fixed',
                    }}
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

                <div className="container mx-auto px-4 md:px-8 lg:px-16 h-full flex items-center relative z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl bg-black/20 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-6xl md:text-7xl">🇬🇧</span>
                            <div className="h-16 w-1 bg-red-600 rounded-full"></div>
                            <h1 className="text-5xl md:text-7xl font-display font-bold text-white drop-shadow-2xl">
                                Study in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">UK</span>
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl drop-shadow-lg font-light">
                            Immerse yourself in centuries of academic excellence. Fast-track your career with a UK degree.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quick Stats Floating Section */}
            <section className="relative -mt-20 z-20 px-4 mb-20">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl text-center border border-white/50 hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="text-3xl font-bold text-red-700 mb-1">{stat.value}</div>
                                <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Study in UK */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <span className="text-red-700 font-semibold tracking-wider uppercase">Why Choose the UK</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mt-2">
                            Legacy & Leadership
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyStudyPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <span className="text-2xl text-red-600">🇬🇧</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{point.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Universities List */}
            <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-500/10 to-transparent pointer-events-none" />
                <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                                The Russell <span className="text-red-500">Group</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Representing 24 leading UK universities committed to maintaining the very best research, an outstanding teaching and learning experience.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {topUniversities.map((uni, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                                    >
                                        <span className="text-red-400 font-bold">0{index + 1}.</span>
                                        <span className="font-medium text-gray-200">{uni}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-blue-500/20 mix-blend-overlay" />
                            <img
                                src={heroUk}
                                alt="UK University"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="glass-card p-6 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md">
                                    <div className="text-2xl font-bold text-white mb-1">Russell Group</div>
                                    <div className="text-gray-300">World-class research-intensive universities</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Courses Pills */}
            <section className="py-20 bg-gray-50 flex flex-col items-center">
                <h2 className="text-3xl font-display font-bold text-center mb-10">Trending Subject Areas</h2>
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl px-4">
                    {popularCourses.map((course, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.05, backgroundColor: "#FEE2E2" }}
                            className="px-6 py-3 bg-white text-gray-700 rounded-full shadow-sm border border-gray-200 font-medium cursor-default transition-all hover:text-red-700 hover:border-red-200"
                        >
                            {course}
                        </motion.span>
                    ))}
                </div>
            </section>

            {/* Admission & Visa Info */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Requirements */}
                        <div className="bg-gradient-to-br from-white to-red-50 p-8 rounded-3xl border border-red-100 shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center text-sm">01</span>
                                Admission Requirements
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Academic Transcripts (60%+)
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> IELTS 6.0/6.5 overall
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Personal Statement
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Letters of Recommendation
                                </li>
                            </ul>
                        </div>

                        {/* Visa */}
                        <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl border border-blue-100 shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center text-sm">02</span>
                                Student Visa (Tier 4)
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> CAS Letter from University
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Tuberculosis Test
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> IHS (Health Surcharge) Payment
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Proof of Funds (28 days)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

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
                            Get Your British Degree
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                            Experience the best of tradition and innovation.
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
                country="UK"
            />
        </div>
    );
};

export default CountryUK;
