import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import universitiesHeroImage from '../assets/images/universities_hero_background_1767880625841.png';
import globalCtaImage from '../assets/images/global_cta_background.png';

const Universities = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [gridRef, gridInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const universities = [
        // USA - 14 universities
        { name: 'Harvard University', country: 'USA', ranking: '#4', logo: '🎓' },
        { name: 'Stanford University', country: 'USA', ranking: '#5', logo: '🎓' },
        { name: 'MIT', country: 'USA', ranking: '#1', logo: '🎓' },
        { name: 'Yale University', country: 'USA', ranking: '#16', logo: '🎓' },
        { name: 'Princeton University', country: 'USA', ranking: '#17', logo: '🎓' },
        { name: 'Columbia University', country: 'USA', ranking: '#23', logo: '🎓' },
        { name: 'UC Berkeley', country: 'USA', ranking: '#27', logo: '🎓' },
        { name: 'UCLA', country: 'USA', ranking: '#29', logo: '🎓' },
        { name: 'University of Chicago', country: 'USA', ranking: '#11', logo: '🎓' },
        { name: 'Cornell University', country: 'USA', ranking: '#16', logo: '🎓' },
        { name: 'University of Pennsylvania', country: 'USA', ranking: '#12', logo: '🎓' },
        { name: 'Duke University', country: 'USA', ranking: '#57', logo: '🎓' },
        { name: 'Northwestern University', country: 'USA', ranking: '#47', logo: '🎓' },
        { name: 'Johns Hopkins University', country: 'USA', ranking: '#28', logo: '🎓' },

        // UK - 10 universities
        { name: 'Oxford University', country: 'UK', ranking: '#2', logo: '🎓' },
        { name: 'Cambridge University', country: 'UK', ranking: '#3', logo: '🎓' },
        { name: 'Imperial College London', country: 'UK', ranking: '#6', logo: '🎓' },
        { name: 'UCL', country: 'UK', ranking: '#9', logo: '🎓' },
        { name: 'LSE', country: 'UK', ranking: '#50', logo: '🎓' },
        { name: 'University of Edinburgh', country: 'UK', ranking: '#27', logo: '🎓' },
        { name: 'King\'s College London', country: 'UK', ranking: '#40', logo: '🎓' },
        { name: 'University of Manchester', country: 'UK', ranking: '#34', logo: '🎓' },
        { name: 'University of Warwick', country: 'UK', ranking: '#69', logo: '🎓' },
        { name: 'University of Bristol', country: 'UK', ranking: '#55', logo: '🎓' },

        // Canada - 6 universities
        { name: 'University of Toronto', country: 'Canada', ranking: '#25', logo: '🎓' },
        { name: 'McGill University', country: 'Canada', ranking: '#30', logo: '🎓' },
        { name: 'UBC', country: 'Canada', ranking: '#38', logo: '🎓' },
        { name: 'University of Alberta', country: 'Canada', ranking: '#111', logo: '🎓' },
        { name: 'McMaster University', country: 'Canada', ranking: '#189', logo: '🎓' },
        { name: 'University of Waterloo', country: 'Canada', ranking: '#112', logo: '🎓' },

        // Australia - 6 universities
        { name: 'ANU', country: 'Australia', ranking: '#30', logo: '🎓' },
        { name: 'University of Melbourne', country: 'Australia', ranking: '#13', logo: '🎓' },
        { name: 'University of Sydney', country: 'Australia', ranking: '#18', logo: '🎓' },
        { name: 'UNSW', country: 'Australia', ranking: '#19', logo: '🎓' },
        { name: 'University of Queensland', country: 'Australia', ranking: '#43', logo: '🎓' },
        { name: 'Monash University', country: 'Australia', ranking: '#37', logo: '🎓' },

        // Europe - 11 universities
        { name: 'ETH Zurich', country: 'Switzerland', ranking: '#7', logo: '🎓' },
        { name: 'TU Munich', country: 'Germany', ranking: '#37', logo: '🎓' },
        { name: 'Heidelberg University', country: 'Germany', ranking: '#87', logo: '🎓' },
        { name: 'LMU Munich', country: 'Germany', ranking: '#59', logo: '🎓' },
        { name: 'Sorbonne University', country: 'France', ranking: '#59', logo: '🎓' },
        { name: 'Sciences Po', country: 'France', ranking: '#220', logo: '🎓' },
        { name: 'TU Delft', country: 'Netherlands', ranking: '#47', logo: '🎓' },
        { name: 'University of Amsterdam', country: 'Netherlands', ranking: '#53', logo: '🎓' },
        { name: 'KU Leuven', country: 'Belgium', ranking: '#61', logo: '🎓' },
        { name: 'University of Copenhagen', country: 'Denmark', ranking: '#109', logo: '🎓' },
        { name: 'Karoliska Institute', country: 'Sweden', ranking: '#40', logo: '🎓' },

        // Asia - 4 universities
        { name: 'NUS', country: 'Singapore', ranking: '#8', logo: '🎓' },
        { name: 'NTU Singapore', country: 'Singapore', ranking: '#15', logo: '🎓' },
        { name: 'University of Hong Kong', country: 'Hong Kong', ranking: '#26', logo: '🎓' },
        { name: 'KAIST', country: 'South Korea', ranking: '#56', logo: '🎓' },
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
                                className="glass-card p-8 rounded-2xl transition-all cursor-pointer border border-white/60 bg-white/80 relative overflow-hidden group hover:shadow-[0_0_40px_rgba(109,40,217,0.3)] duration-500"
                            >
                                {/* Gradient Top Border - Appears on Hover */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-purple to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

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
