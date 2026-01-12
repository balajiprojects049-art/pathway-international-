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
            title: 'Profile Analysis',
            description: 'We evaluate your academic background, goals, and interests to recommend the best study destinations and courses suited for your career path.',
        },
        {
            icon: '🎓',
            title: 'Career Counseling',
            description: 'Expert advisors assess your interests and aspirations to guide you toward the most suitable courses, job trends, and skills needed for success.',
        },
        {
            icon: '🏛️',
            title: 'University Shortlisting',
            description: 'We curate universities based on your academic profile, budget, and career preferences to help you make informed application decisions.',
        },
        {
            icon: '🌍',
            title: 'Scholarship Guidance',
            description: 'We identify scholarships you qualify for and provide expert support in application preparation to increase your chances of securing financial aid.',
        },
        {
            icon: '🎯',
            title: 'Loan Assistance',
            description: 'Our experts help you find suitable education loans, prepare documentation, and choose repayment plans that fit your financial needs.',
        },
        {
            icon: '💰',
            title: 'Financial Planning (Funds)',
            description: 'We offer guidance on budgeting, saving, and organizing financial documentation to ensure smooth visa and admission processes.',
        },
        {
            icon: '🎤',
            title: 'Mock Interviews',
            description: 'Practice sessions tailored to your university or visa interviews with personalized feedback to boost confidence and clarity.',
        },
        {
            icon: '✈️',
            title: 'Visa Assistance',
            description: 'Comprehensive visa guidance including documentation, form filling, and interview preparation for higher approval success.',
        },
        {
            icon: '🧳',
            title: 'Travel Guidance',
            description: 'We assist with travel essentials like flight booking, insurance, luggage prep, and destination-specific travel tips.',
        },
        {
            icon: '🏆',
            title: 'Pre-Departure Guidance',
            description: 'We prepare you for studying abroad with sessions on packing, cultural tips, safety advice, and essential preparations.',
        },
        {
            icon: '🏠',
            title: 'Post-Arrival Guidance',
            description: 'Support doesn\'t end at the airport. We help in accommodation, banking, and initial transportation setup for a smooth start.',
        },
        {
            icon: '💼',
            title: 'Part-Time Job Assistance',
            description: 'We provide vital information on finding part-time jobs abroad, preparing resumes, and understanding work regulations for students.',
        },
        {
            icon: '📞',
            title: 'Ongoing Support',
            description: 'Continuous guidance throughout your academic journey and beyond to help with study goals, career decisions, and academic help for post-study career excellence.',
        },
    ];

    return (
        <section id="services" className="py-20 bg-gradient-to-b from-brand-light to-white">
            <div className="container mx-auto px-4 md:px-6">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="glass-card p-8 rounded-2xl group"
                        >
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
