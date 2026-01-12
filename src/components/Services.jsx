import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const services = [
        {
            icon: '👤',
            iconBg: 'from-blue-400 to-blue-600',
            title: 'Profile Analysis',
            description: 'We evaluate your academic background, goals, and interests to recommend the best study destinations and courses suited for your career path.',
        },
        {
            icon: '🎓',
            iconBg: 'from-purple-400 to-purple-600',
            title: 'Career Counseling',
            description: 'Expert advisors assess your interests and aspirations to guide you toward the most suitable courses, job trends, and skills needed for success.',
        },
        {
            icon: '🏛️',
            iconBg: 'from-indigo-400 to-indigo-600',
            title: 'University Shortlisting',
            description: 'We curate universities based on your academic profile, budget, and career preferences to help you make informed application decisions.',
        },
        {
            icon: '🌍',
            iconBg: 'from-green-400 to-green-600',
            title: 'Scholarship Guidance',
            description: 'We identify scholarships you qualify for and provide expert support in application preparation to increase your chances of securing financial aid.',
        },
        {
            icon: '🎯',
            iconBg: 'from-pink-400 to-pink-600',
            title: 'Loan Assistance',
            description: 'Our experts help you find suitable education loans, prepare documentation, and choose repayment plans that fit your financial needs.',
        },
        {
            icon: '💰',
            iconBg: 'from-yellow-400 to-yellow-600',
            title: 'Financial Planning (Funds)',
            description: 'We offer guidance on budgeting, saving, and organizing financial documentation to ensure smooth visa and admission processes.',
        },
        {
            icon: '🎤',
            iconBg: 'from-red-400 to-red-600',
            title: 'Mock Interviews',
            description: 'Practice sessions tailored to your university or visa interviews with personalized feedback to boost confidence and clarity.',
        },
        {
            icon: '✈️',
            iconBg: 'from-cyan-400 to-cyan-600',
            title: 'Visa Assistance',
            description: 'Comprehensive visa guidance including documentation, form filling, and interview preparation for higher approval success.',
        },
        {
            icon: '🧳',
            iconBg: 'from-orange-400 to-orange-600',
            title: 'Travel Guidance',
            description: 'We assist with travel essentials like flight booking, insurance, luggage prep, and destination-specific travel tips.',
        },
        {
            icon: '🏆',
            iconBg: 'from-amber-400 to-amber-600',
            title: 'Pre-Departure Guidance',
            description: 'We prepare you for studying abroad with sessions on packing, cultural tips, safety advice, and essential preparations.',
        },
        {
            icon: '🏠',
            iconBg: 'from-teal-400 to-teal-600',
            title: 'Post-Arrival Guidance',
            description: 'Support doesn\'t end at the airport. We help in accommodation, banking, and initial transportation setup for a smooth start.',
        },
        {
            icon: '💼',
            iconBg: 'from-violet-400 to-violet-600',
            title: 'Part-Time Job Assistance',
            description: 'We provide vital information on finding part-time jobs abroad, preparing resumes, and understanding work regulations for students.',
        },
        {
            icon: '📞',
            iconBg: 'from-emerald-400 to-emerald-600',
            title: 'Ongoing Support',
            description: 'Continuous guidance throughout your academic journey and beyond to help with study goals, career decisions, and academic help for post-study career excellence.',
        },
    ];

    return (
        <section id="services" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-brand-purple font-semibold text-sm uppercase tracking-wider">
                        Our Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                        Premium <span className="text-brand-purple">Services</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We provide complete end-to-end support for every step of your overseas education journey — from planning to landing and beyond.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.05, duration: 0.6 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                        >
                            {/* Premium Icon Circle */}
                            <div className="relative mb-4">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <span className="text-3xl">{service.icon}</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Decorative gradient line */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.iconBg} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
