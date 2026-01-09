import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const services = [
        {
            icon: '🎯',
            title: 'University Selection',
            description: 'Personalized guidance to find the perfect university match based on your profile, interests, and career goals.',
            features: ['Profile Assessment', 'University Matching', 'Course Selection'],
        },
        {
            icon: '📝',
            title: 'Admissions Support',
            description: 'Complete application assistance including SOP writing, LOR guidance, and document preparation.',
            features: ['Application Review', 'Essay Writing', 'Document Prep'],
        },
        {
            icon: '✈️',
            title: 'Visa Assistance',
            description: 'Expert visa counseling and documentation support to ensure smooth approval process.',
            features: ['Visa Guidance', 'Mock Interviews', 'Documentation'],
        },
        {
            icon: '💰',
            title: 'Scholarship Guidance',
            description: 'Help you identify and apply for scholarships, grants, and financial aid opportunities.',
            features: ['Scholarship Search', 'Application Help', 'Financial Planning'],
        },
        {
            icon: '📚',
            title: 'Test Preparation',
            description: 'IELTS, TOEFL, GRE, GMAT preparation resources and guidance from expert instructors.',
            features: ['Study Materials', 'Practice Tests', 'Expert Coaching'],
        },
        {
            icon: '🏠',
            title: 'Pre-Departure Support',
            description: 'Accommodation assistance, travel planning, and orientation for a smooth transition abroad.',
            features: ['Accommodation', 'Travel Planning', 'Orientation'],
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
                        Comprehensive <span className="text-brand-purple">Support</span> Every Step
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From university selection to landing abroad, we provide end-to-end guidance for your study abroad journey.
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
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-700">
                                        <span className="text-brand-purple mr-2">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
