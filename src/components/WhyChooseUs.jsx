import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyChooseUs = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const reasons = [
        {
            number: '01',
            title: 'Based Abroad',
            description: 'Our international offices give you direct access to universities and immigration resources.',
        },
        {
            number: '02',
            title: 'Expert Counselors',
            description: 'Our team consists of certified counselors with 10+ years of experience in overseas education.',
        },
        {
            number: '03',
            title: 'Proven Track Record',
            description: '98% visa success rate and 10,000+ students successfully placed in top universities worldwide.',
        },
        {
            number: '04',
            title: 'University Partnerships',
            description: 'Official partnerships with 50+ top-ranked universities providing exclusive admission benefits.',
        },
        {
            number: '05',
            title: 'Personalized Approach',
            description: 'One-on-one counseling tailored to your unique profile, goals, and aspirations.',
        },
        {
            number: '06',
            title: 'Post-Landing Support',
            description: "We don't stop at visa approval - we support you even after you land abroad.",
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-brand-light">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-brand-purple font-semibold text-sm uppercase tracking-wider">
                        Why Choose Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                        Why Students <span className="text-brand-purple">Trust</span> Us
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We combine international expertise with personalized care to make your study abroad dreams a reality.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="relative"
                        >
                            <div className="glass-card p-8 rounded-2xl shadow-lg transition-all h-full relative overflow-hidden group hover:shadow-[0_0_40px_rgba(109,40,217,0.3)] duration-500">
                                {/* Gradient Top Border - Appears on Hover */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-purple to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="text-6xl font-bold text-brand-light mb-4">
                                    {reason.number}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {reason.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
