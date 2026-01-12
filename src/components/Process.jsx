import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Process = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const steps = [
        {
            number: '1',
            title: 'Initial Consultation',
            description: 'Schedule a complimentary consultation with our expert counselors to discuss your goals and aspirations.',
            icon: '📞',
        },
        {
            number: '2',
            title: 'Profile Assessment',
            description: 'We evaluate your academic background, test scores, and career objectives for personalized recommendations.',
            icon: '📊',
        },
        {
            number: '3',
            title: 'University Selection',
            description: 'Get a curated list of universities that match your profile, preferences, and budget.',
            icon: '🎓',
        },
        {
            number: '4',
            title: 'Application Process',
            description: 'Complete support for applications, SOPs, LORs, and all required documentation.',
            icon: '📝',
        },
        {
            number: '5',
            title: 'Visa Assistance',
            description: 'Expert guidance for visa documentation, interview preparation, and submission.',
            icon: '✈️',
        },
        {
            number: '6',
            title: 'Pre-Departure',
            description: 'Accommodation, travel planning, and orientation to ensure a smooth transition abroad.',
            icon: '🏠',
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-brand-light to-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-brand-purple font-semibold text-sm uppercase tracking-wider">
                        Our Process
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                        Your Journey to <span className="text-brand-purple">Success</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A simple, step-by-step process designed to make your study abroad journey smooth and stress-free.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="relative mb-8 last:mb-0"
                        >
                            <div className="flex items-start gap-6">
                                {/* Step Number Circle */}
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                                        {step.number}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 glass-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-4xl">{step.icon}</span>
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Connecting Line */}
                            {index < steps.length - 1 && (
                                <div className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-brand-blue to-brand-light" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
