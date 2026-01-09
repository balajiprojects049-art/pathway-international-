import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const testimonials = [
        {
            name: 'Priya Sharma',
            university: 'Stanford University, USA',
            rating: 5,
            text: "Pathway Global made my dream of studying at Stanford a reality. Their guidance throughout the application process was invaluable. Highly recommended!",
            avatar: '👩',
        },
        {
            name: 'Rahul Patel',
            university: 'University of Toronto, Canada',
            rating: 5,
            text: "The visa process seemed daunting, but the team handled everything professionally. I'm now pursuing my Master's in Canada thanks to their expertise.",
            avatar: '👨',
        },
        {
            name: 'Aisha Khan',
            university: 'University of Oxford, UK',
            rating: 5,
            text: "I got into Oxford with a scholarship! The counselors knew exactly how to present my profile. Forever grateful for their support.",
            avatar: '👩',
        },
        {
            name: 'Arjun Reddy',
            university: 'University of Melbourne, Australia',
            rating: 5,
            text: "From shortlisting universities to accommodation in Melbourne, they handled everything. Best decision to work with Pathway Global!",
            avatar: '👨',
        },
        {
            name: 'Sneha Gupta',
            university: 'Technical University of Munich, Germany',
            rating: 5,
            text: "Their knowledge about European universities is exceptional. I got admitted to my dream program in Germany with their help.",
            avatar: '👩',
        },
        {
            name: 'Vikram Singh',
            university: 'MIT, USA',
            rating: 5,
            text: "The team's personalized approach and attention to detail helped me secure admission to MIT. Simply outstanding service!",
            avatar: '👨',
        },
    ];

    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-brand-purple font-semibold text-sm uppercase tracking-wider">
                        Success Stories
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                        What Our <span className="text-brand-purple">Students</span> Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Real stories from students who achieved their dreams of studying abroad with our guidance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -5 }}
                            className="glass-card p-8 rounded-2xl"
                        >
                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-700 mb-6 leading-relaxed italic">
                                "{testimonial.text}"
                            </p>

                            {/* Student Info */}
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-2xl">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                                    <div className="text-sm text-gray-600">{testimonial.university}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
