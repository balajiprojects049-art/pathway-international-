import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import HeroBackgroundSlider from '../components/HeroBackgroundSlider';
import heroIreland from '../assets/images/hero_ireland_premium.png';
import heroSlideIreland from '../assets/images/hero_slide_ireland.png';
import heroSlideIreland2 from '../assets/images/hero_slide_ireland_2.png';
import heroSlideIreland3 from '../assets/images/hero_slide_ireland_3.jpg';
import irelandUniversity from '../assets/images/ireland_university.png';
import globalCtaImage from '../assets/images/global_cta_background.png';
import StudentInquiryForm from '../components/StudentInquiryForm';

const CountryIreland = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [isFormOpen, setIsFormOpen] = useState(false);

    const topUniversities = [
        'Trinity College Dublin',
        'University College Dublin (UCD)',
        'National University of Ireland Galway',
        'University College Cork',
        'Dublin City University',
        'University of Limerick',
        'Maynooth University',
        'Technological University Dublin',
    ];

    const whyStudyPoints = [
        { title: "Europe's Technology Hub", desc: "Headquarters for Google, Facebook, Apple, and Pfizer." },
        { title: "English Speaking", desc: "The only English-speaking country in the Eurozone." },
        { title: "Post-Study Work", desc: "2-Year Post-Study Work Visa for Master's graduates." },
        { title: "Friendly & Safe", desc: "Voted one of the friendliest countries in the world." },
        { title: "Education Excellence", desc: "Globally Renowned Education System." },
        { title: "Research & Innovation", desc: "Leading hub for Tech, Pharma, and Finance." }
    ];

    const popularCourses = [
        'Data Science & Analytics', 'Computer Science', 'Pharmaceutical Science',
        'Digital Marketing', 'Business Analytics', 'Finance',
        'Cloud Computing', 'Cybersecurity'
    ];

    const stats = [
        { label: "Universities", value: "30+" },
        { label: "Tech Hubs", value: "1000+" },
        { label: "Post-Study Visa", value: "2 Yrs" },
        { label: "Language", value: "English" }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Parallax Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
                <HeroBackgroundSlider
                    images={[
                        heroIreland,
                        heroSlideIreland,
                        heroSlideIreland2,
                        irelandUniversity
                    ]}
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
                            <img src="https://flagcdn.com/w160/ie.png" alt="Ireland Flag" className="h-16 md:h-20 w-auto object-contain drop-shadow-md" />
                            <div className="h-16 w-1 bg-green-500 rounded-full"></div>
                            <h1 className="text-5xl md:text-7xl font-display font-bold text-white drop-shadow-2xl">
                                Study in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-orange-400">Ireland</span>
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl drop-shadow-lg font-light">
                            Launch your career in Europe's fastest-growing economy. Innovation, culture, and opportunity await.
                        </p>

                        {/* Apply Now CTA */}
                        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <motion.button
                                onClick={() => setIsFormOpen(true)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all flex items-center gap-3"
                            >
                                <span>Apply Now</span>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </motion.button>
                            <p className="text-sm text-blue-100 font-medium">
                                ✨ Start your journey today - Free consultation available
                            </p>
                        </div>
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

            {/* Why Study in Ireland */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <span className="text-green-600 font-semibold tracking-wider uppercase">Why Choose Ireland</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mt-2">
                            The Land of Saints & Scholars
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyStudyPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="premium-card bg-gray-50 hover:bg-white p-8 rounded-2xl border border-transparent group"
                            >
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <span className="text-2xl text-green-600">☘️</span>
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
                                Historic <span className="text-green-500">Campuses</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Experience rich hsitory combined with cutting-edge laboratories. Irish universities are known for their strong industry links.
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
                            <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 to-orange-500/20 mix-blend-overlay" />
                            <img
                                src={heroIreland}
                                alt="Ireland University"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="glass-card p-6 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md">
                                    <div className="text-2xl font-bold text-white mb-1">Trinity College</div>
                                    <div className="text-gray-300">Ireland's oldest and most prestigious university</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Courses Pills */}
            <section className="py-20 bg-gray-50 flex flex-col items-center">
                <h2 className="text-3xl font-display font-bold text-center mb-10">Industry Aligned Programs</h2>
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
                                    <span className="text-green-500 font-bold">✓</span> Bachelor's Degree (60%-65%)
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> IELTS 6.5 Overall
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Statement of Purpose
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Gap Explanation (if any)
                                </li>
                            </ul>
                        </div>

                        {/* Visa */}
                        <div className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-3xl border border-orange-100 shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm">02</span>
                                Student Visa Info
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Admission Letter
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Proof of Full Tuition Payment
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Funds for Living Expenses
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Private Health Insurance
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
                            Your Future in Ireland
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                            Study, work, and live in the heart of Europe's tech innovation.
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
                country="Ireland"
            />
        </div>
    );
};

export default CountryIreland;
