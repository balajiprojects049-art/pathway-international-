import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import universitiesHeroImage from '../assets/images/universities_hero_background_1767880625841.png';
import globalCtaImage from '../assets/images/global_cta_background.png';

const Universities = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [gridRef, gridInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const universities = [
        { name: 'Harvard University', country: 'USA', ranking: '#1', logo: '🎓' },
        { name: 'Stanford University', country: 'USA', ranking: '#2', logo: '🌲' },
        { name: 'University of Oxford', country: 'UK', ranking: '#3', logo: '📚' },
        { name: 'University of Cambridge', country: 'UK', ranking: '#4', logo: '🏛️' },
        { name: 'MIT', country: 'USA', ranking: '#5', logo: '🔬' },
        { name: 'University of Toronto', country: 'Canada', ranking: '#25', logo: '🍁' },
        { name: 'University of Melbourne', country: 'Australia', ranking: '#33', logo: '🦘' },
        { name: 'ETH Zurich', country: 'Switzerland', ranking: '#7', logo: '🇨🇭' },
        { name: 'Imperial College London', country: 'UK', ranking: '#6', logo: '👑' },
        { name: 'Yale University', country: 'USA', ranking: '#9', logo: '🏫' },
        { name: 'LSE', country: 'UK', ranking: '#49', logo: '💼' },
        { name: 'University of Sydney', country: 'Australia', ranking: '#41', logo: '🌊' },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Background Image */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Parallax */}
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${universitiesHeroImage})`,
                            backgroundAttachment: 'fixed',
                        }}
                    />
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
                </motion.div>

                {/* Content */}
                <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 py-32">
                    <div className="max-w-4xl bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/50 shadow-2xl">
                        <motion.div
                            ref={heroRef}
                            initial={{ opacity: 0, y: 30 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-navy-muted mb-6 leading-tight drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                                Partner{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">
                                    Universities
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed max-w-3xl drop-shadow-md">
                                Direct partnerships with 50+ world-renowned universities across the globe
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Universities Grid */}
            <section ref={gridRef} className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="text-center mb-16">
                        <span className="text-brand-purple font-semibold tracking-wider uppercase">Our Network</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-muted mt-2">
                            World Class Institutions
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {universities.map((uni, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={gridInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                                whileHover={{ y: -8, scale: 1.03 }}
                                className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all group cursor-pointer border border-white/60 bg-white/80"
                            >
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform filter drop-shadow-sm">
                                    {uni.logo}
                                </div>
                                <div className="text-xs text-brand-purple font-bold tracking-wider mb-2 uppercase bg-brand-light inline-block px-2 py-1 rounded-md">{uni.ranking} QS World</div>
                                <h3 className="font-display font-bold text-xl text-navy-muted mb-1">
                                    {uni.name}
                                </h3>
                                <p className="text-sm text-gray-500 font-medium">{uni.country}</p>
                            </motion.div>
                        ))}
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
                            Find Your Perfect University Match
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                            We match your profile with the best universities to ensure your acceptance.
                        </p>
                        <Link to="/book-consultation">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-5 bg-white text-navy-muted rounded-full font-bold text-lg shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all border border-white/50"
                            >
                                Schedule Consultation
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Universities;
