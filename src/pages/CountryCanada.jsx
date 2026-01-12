import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import StudentInquiryForm from '../components/StudentInquiryForm';
import heroCanada from '../assets/images/hero_canada_premium.png';
import globalCtaImage from '../assets/images/global_cta_background.png';

const CountryCanada = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const topUniversities = [
        'University of Toronto',
        'McGill University',
        'University of British Columbia',
        'University of Waterloo',
        'University of Alberta',
        'McMaster University',
        'Western University',
        'University of Montreal',
    ];

    const whyStudyPoints = [
        { title: "High Quality of Life", desc: "Consistently ranked as one of the best countries to live in." },
        { title: "Affordable Education", desc: "Lower tuition fees compared to US and UK with high standards." },
        { title: "Post-Grad Work Permit", desc: "Stay and work for up to 3 years after graduation (PGWP)." },
        { title: "Welcoming & Safe", desc: "Friendly, multicultural society with very low crime rates." },
        { title: "Permanent Residency", desc: "Clear pathways to PR for international graduates." },
        { title: "Co-op Programs", desc: "Gain paid work experience while you study." }
    ];

    const popularCourses = [
        'Business Management', 'Computer Science', 'Engineering',
        'Health Sciences', 'Digital Media', 'Data Analytics',
        'Hospitality', 'Environmental Science'
    ];

    const stats = [
        { label: "Universities", value: "96+" },
        { label: "International Students", value: "800k+" },
        { label: "PGWP Duration", value: "3 Yrs" },
        { label: "Avg. Starting Salary", value: "CAD 60k+" }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Parallax Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${heroCanada})`,
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
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-6xl md:text-7xl">🇨🇦</span>
                            <div className="h-16 w-1 bg-red-500 rounded-full"></div>
                            <h1 className="text-5xl md:text-7xl font-display font-bold text-white drop-shadow-2xl">
                                Study in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">Canada</span>
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl drop-shadow-lg font-light">
                            Discover your future in a nation renowned for inclusivity, breathtaking landscapes, and academic excellence.
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
                                <div className="text-3xl font-bold text-red-600 mb-1">{stat.value}</div>
                                <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Study in Canada */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <span className="text-red-500 font-semibold tracking-wider uppercase">Why Choose Canada</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mt-2">
                            A Future of Opportunities
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
                                    <span className="text-2xl text-red-500">🍁</span>
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
                                World-Renowned <span className="text-red-500">Education</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Canadian degrees are treasured worldwide. Study at top-ranking institutions known for their global outlook and high academic standards.
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
                            <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-white/10 mix-blend-overlay" />
                            <img
                                src={heroCanada}
                                alt="Canada University"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="glass-card p-6 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md">
                                    <div className="text-2xl font-bold text-white mb-1">U15 Group</div>
                                    <div className="text-gray-300">Canada's most research-intensive universities</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Courses Pills */}
            <section className="py-20 bg-gray-50 flex flex-col items-center">
                <h2 className="text-3xl font-display font-bold text-center mb-10">Trending Programs</h2>
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl px-4">
                    {popularCourses.map((course, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.05, backgroundColor: "#FEF2F2" }}
                            className="px-6 py-3 bg-white text-gray-700 rounded-full shadow-sm border border-gray-200 font-medium cursor-default transition-all hover:text-red-600 hover:border-red-100"
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
                                <span className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center text-sm">01</span>
                                Admission Requirements
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Academic Transcripts (65%+)
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> IELTS 6.0/6.5 Overall
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Academic History Review (if any gaps)
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> SOP & LORs
                                </li>
                            </ul>
                        </div>

                        {/* Visa */}
                        <div className="bg-gradient-to-br from-white to-red-50 p-8 rounded-3xl border border-red-100 shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">02</span>
                                Study Permit (SDS)
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Letter of Acceptance (LOA)
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> GIC of CAD 20,635
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> 1 Year Tuition Fee Payment
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Medical Exam
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
                            Make Canada Your Home
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                            Start your journey to world-class education and permanent residency today.
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
                country="Canada"
            />
        </div>
    );
};

export default CountryCanada;
