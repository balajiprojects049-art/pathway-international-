import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const features = [
        {
            icon: '🏢',
            title: 'International Presence',
            description: 'Based abroad with offices in key education hubs worldwide, providing you direct access to universities.',
        },
        {
            icon: '🤝',
            title: 'Trusted Partnerships',
            description: 'Official partnerships with 50+ top-ranked universities across USA, UK, Canada, Australia, and Europe.',
        },
        {
            icon: '⭐',
            title: '98% Success Rate',
            description: 'Our expert counselors have helped 10,000+ students achieve their dreams of studying abroad.',
        },
        {
            icon: '🎓',
            title: 'End-to-End Support',
            description: 'From university selection to visa approval, we handle every step of your journey with care.',
        },
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-white to-brand-light">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-brand-purple font-semibold text-sm uppercase tracking-wider">
                        About Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                        Your Trusted Global <span className="text-brand-purple">Education Partner</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We are an international education consultancy based abroad, dedicated to helping
                        students achieve their dreams of studying at world-class universities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="glass-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                        >
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
