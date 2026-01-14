import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import heroNewZealand from '../assets/images/new_zealand_university.png';
import globalCtaImage from '../assets/images/global_cta_background.png';
import StudentInquiryForm from '../components/StudentInquiryForm';

const CountryNewZealand = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Parallax Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${heroNewZealand})`,
                        backgroundAttachment: 'fixed',
                    }}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

                <div className="container mx-auto px-4 md:px-8 lg:px-16 h-full flex items-center relative z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl bg-black/20 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-6xl md:text-7xl">🇳🇿</span>
                            <div className="h-16 w-1 bg-brand-purple rounded-full"></div>
                            <h1 className="text-5xl md:text-7xl font-display font-bold text-white drop-shadow-2xl">
                                Study in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-300">New Zealand</span>
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl drop-shadow-lg font-light">
                            Experience world-class education, breathtaking landscapes, and an unbeatable quality of life.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quick Stats Floating Section */}
            <section className="relative -mt-20 z-20 px-4 mb-20">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: "Universities", value: "All Top 3%" },
                            { label: "Intl. Students", value: "120k+" },
                            { label: "Post-Study Work", value: "3 Years" },
                            { label: "Safety Rank", value: "Top 5 Global" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl text-center border border-white/50 hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="text-3xl font-bold text-brand-purple mb-1">{stat.value}</div>
                                <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Study in New Zealand */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <span className="text-brand-purple font-semibold tracking-wider uppercase">Why Choose New Zealand</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mt-2">
                            Innovation & Adventure Combined
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Practical Learning", desc: "Education system focused on hands-on experiences and real-world skills." },
                            { title: "Global Recognition", desc: "All 8 universities are ranked in the top 3% worldwide." },
                            { title: "Peaceful Environment", desc: "Consistently ranked as one of the safest and most peaceful countries." },
                            { title: "Work Rights", desc: "Generous post-study work rights to help launch your global career." },
                            { title: "PhD Opportunities", desc: "International PhD students pay the same fees as domestic students." },
                            { title: "Support Services", desc: "Code of Practice ensuring high standards of care for international students." }
                        ].map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <span className="text-2xl text-green-600">★</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{point.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Universities */}
            <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl font-display font-bold text-center mb-16">Top NZ Universities</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { name: "University of Auckland", rank: "#1 in NZ", loc: "Auckland" },
                            { name: "University of Otago", rank: "Top 200 Global", loc: "Dunedin" },
                            { name: "Victoria University of Wellington", rank: "Top 1% Global", loc: "Wellington" },
                            { name: "University of Canterbury", rank: "Engineering Excellence", loc: "Christchurch" }
                        ].map((uni, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-brand-purple/50 transition-colors"
                            >
                                <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-2xl">🎓</div>
                                <h3 className="font-bold text-lg mb-2">{uni.name}</h3>
                                <p className="text-brand-blue text-sm mb-1">{uni.rank}</p>
                                <p className="text-gray-400 text-sm">{uni.loc}</p>
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
                            Ready for Your New Zealand Adventure?
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                            Let us guide you towards a world-class education in the land of the long white cloud.
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
                country="New Zealand"
            />
        </div>
    );
};

export default CountryNewZealand;
