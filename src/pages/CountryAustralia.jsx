import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import heroAustralia from '../assets/images/hero_australia_premium.png';
import globalCtaImage from '../assets/images/global_cta_background.png';

const CountryAustralia = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const topUniversities = [
        'Australian National University',
        'University of Melbourne',
        'University of Sydney',
        'University of New South Wales',
        'University of Queensland',
        'Monash University',
        'University of Western Australia',
        'University of Adelaide',
    ];

    const whyStudyPoints = [
        { title: "World-Class Reputation", desc: "Home to the prestigious Group of Eight universities." },
        { title: "Global Recognition", desc: "Degrees are recognized and respected by employers worldwide." },
        { title: "Standard of Living", desc: "Consistently ranked among the best places to live and study." },
        { title: "Work Opportunities", desc: "Excellent post-study work rights (2-4 years)." },
        { title: "Research Impact", desc: "Leading the world in research achievements and innovation." },
        { title: "Cultural Diversity", desc: "A vibrant multicultural society that welcomes international students." }
    ];

    const popularCourses = [
        'Business & Commerce', 'Information Technology', 'Engineering',
        'Healthcare & Nursing', 'Accounting', 'Environmental Science',
        'Hospitality & Tourism', 'Education'
    ];

    const stats = [
        { label: "Universities", value: "40+" },
        { label: "International Students", value: "500k+" },
        { label: "Post-Study Work Rights", value: "2-4 Yrs" },
        { label: "Scholarships", value: "Available" }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Parallax Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${heroAustralia})`,
                        backgroundAttachment: 'fixed',
                    }}
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

                <div className="container mx-auto px-4 md:px-8 lg:px-16 h-full flex items-center relative z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-6xl md:text-7xl">🇦🇺</span>
                            <div className="h-16 w-1 bg-yellow-400 rounded-full"></div>
                            <h1 className="text-5xl md:text-7xl font-display font-bold text-white drop-shadow-2xl">
                                Study in <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300">Australia</span>
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-2xl drop-shadow-lg font-light">
                            Experience world-class education with a lifestyle like no other. Discover your potential Down Under.
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
                                <div className="text-3xl font-bold text-green-600 mb-1">{stat.value}</div>
                                <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Study in Australia */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <span className="text-green-600 font-semibold tracking-wider uppercase">Why Choose Australia</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mt-2">
                            Global Excellence
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
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <span className="text-2xl text-green-600">🐨</span>
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
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-500/10 to-transparent pointer-events-none" />
                <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                                Group of <span className="text-yellow-400">Eight</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Australia’s coalition of world-leading research-intensive universities ensures your degree is respected globally.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {topUniversities.map((uni, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                                    >
                                        <span className="text-green-400 font-bold">0{index + 1}.</span>
                                        <span className="font-medium text-gray-200">{uni}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 to-yellow-500/20 mix-blend-overlay" />
                            <img
                                src={heroAustralia}
                                alt="Australia University"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="glass-card p-6 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md">
                                    <div className="text-2xl font-bold text-white mb-1">Group of Eight (Go8)</div>
                                    <div className="text-gray-300">Australia's leading research universities</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Courses Pills */}
            <section className="py-20 bg-gray-50 flex flex-col items-center">
                <h2 className="text-3xl font-display font-bold text-center mb-10">Top Fields of Study</h2>
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl px-4">
                    {popularCourses.map((course, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.05, backgroundColor: "#F0FDF4" }}
                            className="px-6 py-3 bg-white text-gray-700 rounded-full shadow-sm border border-gray-200 font-medium cursor-default transition-all hover:text-green-600 hover:border-green-100"
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
                        <div className="bg-gradient-to-br from-white to-green-50 p-8 rounded-3xl border border-green-100 shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">01</span>
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
                                    <span className="text-green-500 font-bold">✓</span> Statement of Purpose
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Financial Requirements (GTE)
                                </li>
                            </ul>
                        </div>

                        {/* Visa */}
                        <div className="bg-gradient-to-br from-white to-yellow-50 p-8 rounded-3xl border border-yellow-100 shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm">02</span>
                                Student Visa (Subclass 500)
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Confirmation of Enrolment (CoE)
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Genuine Temporary Entrant (GTE)
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> OSHC Health Insurance
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Biometrics & Medical Examination
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
                            Begin Your Australian Adventure
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                            Your future starts here. Apply to top Australian universities with our expert guidance.
                        </p>
                        <Link to="/book-consultation">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-5 bg-white text-brand-purple rounded-full font-bold text-lg shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all border border-white/50"
                            >
                                Begin Your Application
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CountryAustralia;
