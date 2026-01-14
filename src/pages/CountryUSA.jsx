import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import HeroBackgroundSlider from '../components/HeroBackgroundSlider';
import heroUsa from '../assets/images/hero_usa_premium.png';
import heroSlideUSA from '../assets/images/hero_slide_usa.png';
import heroSlideUSA2 from '../assets/images/hero_slide_usa_2.png';
import usaUniversity from '../assets/images/usa_university.png';
import usaStudyDestination from '../assets/images/usa_study_destination_1767878848400.png';
import globalCtaImage from '../assets/images/global_cta_background.png';
import StudentInquiryForm from '../components/StudentInquiryForm';

const CountryUSA = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Smooth scroll to top on mount

    const topUniversities = [
        'Massachusetts Institute of Technology (MIT)',
        'Stanford University',
        'Harvard University',
        'California Institute of Technology (Caltech)',
        'University of Chicago',
        'Princeton University',
        'Columbia University',
        'University of Michigan',
    ];

    const whyStudyPoints = [
        { title: "World-Class Education", desc: "Home to the world's most prestigious universities and colleges." },
        { title: "Cutting-Edge Innovation", desc: "Access to state-of-the-art research facilities and technology." },
        { title: "Diverse Specializations", desc: "Widest range of courses and flexible academic programs." },
        { title: "Career Opportunities", desc: "Strong industry connections, CPT/OPT work authorization." },
        { title: "Vibrant Campus Life", desc: "Diverse multicultural environment with enriching activities." },
        { title: "Global Recognition", desc: "Degrees recognized and respected worldwide by employers." }
    ];

    const popularCourses = [
        'Computer Science & AI', 'Business Analytics', 'Engineering',
        'Medicine & Public Health', 'Finance & Economics', 'Data Science',
        'Biotechnology', 'Film & Media'
    ];

    const stats = [
        { label: "Universities", value: "4,000+" },
        { label: "Intl. Students", value: "1M+" },
        { label: "Post-Study Work", value: "3 Yrs" },
        { label: "Avg Salary", value: "$75k+" }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Parallax Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
                <HeroBackgroundSlider
                    images={[
                        heroUsa,
                        heroSlideUSA,
                        heroSlideUSA2,
                        usaUniversity,
                        usaStudyDestination
                    ]}
                />

                <div className="container mx-auto px-4 md:px-8 lg:px-16 h-full flex items-center relative z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl bg-black/20 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-6xl md:text-7xl">🇺🇸</span>
                            <div className="h-16 w-1 bg-brand-purple rounded-full"></div>
                            <h1 className="text-5xl md:text-7xl font-display font-bold text-white drop-shadow-2xl">
                                Study in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">USA</span>
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl drop-shadow-lg font-light">
                            Unlock your potential in the land of opportunity. Experience world-class education and limitless career possibilities.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quick Stats Floating Section */}
            <section className="relative -mt-20 z-20 px-4 mb-20">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: "Universities", value: "4,000+" },
                            { label: "Intl. Students", value: "1M+" },
                            { label: "STEM OPT", value: "3 Years" },
                            { label: "Avg. Starting Salary", value: "$75k+" }
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

            {/* Why Study in USA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <span className="text-brand-purple font-semibold tracking-wider uppercase">Why Choose the USA</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mt-2">
                            The Global Standard in Higher Education
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "World-Class Institutions", desc: "Home to a majority of the world's top-ranked universities and colleges." },
                            { title: "Innovation & Research", desc: "Access state-of-the-art facilities and lead groundbreaking research projects." },
                            { title: "Academic Flexibility", desc: "Customize your education with a vast array of majors, minors, and electives." },
                            { title: "Career Acceleration", desc: "Leverage CPT & OPT for invaluable work experience with Fortune 500 companies." },
                            { title: "Dynamic Campus Life", desc: "Immerse yourself in a diverse, multicultural environment and vibrant student activities." },
                            { title: "Global Prestige", desc: "Earn a degree that is recognized, respected, and valued by employers worldwide." }
                        ].map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="premium-card bg-gray-50 hover:bg-white p-8 rounded-2xl border border-transparent group"
                            >
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <span className="text-2xl text-brand-blue">★</span>
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
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-purple/20 to-transparent pointer-events-none" />
                <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                                Top Ranked <span className="text-brand-purple">Universities</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                The USA boasts a significant number of the world's highest-ranking universities, known for their academic rigor and research impact.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {topUniversities.map((uni, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                                    >
                                        <span className="text-brand-blue font-bold">0{index + 1}.</span>
                                        <span className="font-medium text-gray-200">{uni}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
                            {/* Placeholder for map or campus grid - kept simple for now */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/30 to-brand-purple/30 mix-blend-overlay" />
                            <img
                                src={heroUsa}
                                alt="USA Campus Life"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="glass-card p-6 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md">
                                    <div className="text-2xl font-bold text-white mb-1">Ivy League</div>
                                    <div className="text-gray-300">Excellence in education and prestige</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Courses Pills */}
            <section className="py-20 bg-gray-50 flex flex-col items-center">
                <h2 className="text-3xl font-display font-bold text-center mb-10">Most Chosen Programs</h2>
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl px-4">
                    {popularCourses.map((course, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.05, backgroundColor: "#E0E7FF" }}
                            className="px-6 py-3 bg-white text-gray-700 rounded-full shadow-sm border border-gray-200 font-medium cursor-default transition-all"
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
                        <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl border border-blue-100 shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center text-sm shadow-md">01</span>
                                Admissions Requirements
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Strong Academic Records (GPA)
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> English Proficiency (TOEFL / IELTS)
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Standardized Tests (SAT/ACT/GRE/GMAT)
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Statement of Purpose (SOP) & Letters of Recommendation
                                </li>
                            </ul>
                        </div>

                        {/* Visa */}
                        <div className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-3xl border border-purple-100 shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 bg-brand-purple text-white rounded-full flex items-center justify-center text-sm shadow-md">02</span>
                                F-1 Student Visa Process
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Receive Form I-20 from Institution
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Pay I-901 SEVIS Fee
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Complete Form DS-160 Application
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span> Attend Consular Interview
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
                            Your American Dream Starts Here
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                            Join the thousands of students we've successfully placed in top US universities.
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
                country="USA"
            />
        </div>
    );
};

export default CountryUSA;
