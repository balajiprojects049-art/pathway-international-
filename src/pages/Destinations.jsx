import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import usaImage from '../assets/images/usa_study_destination_1767878848400.png';
import ukImage from '../assets/images/uk_study_destination_1767878865705.png';
import canadaImage from '../assets/images/canada_study_destination_1767878895785.png';
import australiaImage from '../assets/images/australia_study_destination_1767878913275.png';
import irelandImage from '../assets/images/ireland_university.png';
import newZealandImage from '../assets/images/new_zealand_university.png';
import europeImage from '../assets/images/europe_study_destination_1767878934797.png';
import destinationsHeroImage from '../assets/images/destinations_hero_background_1767880556435.png';

const Destinations = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [cardsRef, cardsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [selectedCountry, setSelectedCountry] = useState(null);

    const destinations = [
        {
            name: 'United States',
            slug: 'usa',
            flag: '🇺🇸',
            image: usaImage,
            universities: '200+ Universities',
            highlights: 'Ivy League, Tech Hubs, Research Excellence',
            description: 'Study in the world\'s leading economy with access to cutting-edge research, innovation, and career opportunities.',
            topUniversities: ['Harvard', 'Stanford', 'MIT', 'Yale'],
        },
        {
            name: 'United Kingdom',
            slug: 'uk',
            flag: '🇬🇧',
            image: ukImage,
            universities: '100+ Universities',
            highlights: 'Oxford, Cambridge, World-Class Education',
            description: 'Experience historic academic excellence combined with modern innovation in the UK\'s prestigious universities.',
            topUniversities: ['Oxford', 'Cambridge', 'Imperial College', 'LSE'],
        },
        {
            name: 'Canada',
            slug: 'canada',
            flag: '🇨🇦',
            image: canadaImage,
            universities: '80+ Universities',
            highlights: 'Immigration Benefits, Quality Education',
            description: 'Enjoy high-quality education with excellent post-study work opportunities and immigration pathways.',
            topUniversities: ['UofT', 'UBC', 'McGill', 'Waterloo'],
        },
        {
            name: 'Australia',
            slug: 'australia',
            flag: '🇦🇺',
            image: australiaImage,
            universities: '60+ Universities',
            highlights: 'Work Opportunities, Beach Lifestyle',
            description: 'Experience world-class education in a vibrant, multicultural environment with excellent work-life balance.',
            topUniversities: ['Melbourne', 'Sydney', 'ANU', 'UNSW'],
        },
        {
            name: 'Ireland',
            slug: 'ireland',
            flag: '🇮🇪',
            image: irelandImage,
            universities: '30+ Universities',
            highlights: '2-Year Post-Study Work Permit',
            description: 'Study in the Emerald Isle with access to quality education, friendly culture, and excellent post-study work opportunities.',
            topUniversities: ['Trinity College Dublin', 'UCD', 'NUI Galway', 'UCC'],
        },
        {
            name: 'New Zealand',
            slug: 'new-zealand',
            flag: '🇳🇿',
            image: newZealandImage,
            universities: '40+ Universities',
            highlights: 'High-Quality Education & Natural Beauty',
            description: 'Experience world-renowned education in stunning natural landscapes with welcoming communities and work opportunities.',
            topUniversities: ['University of Auckland', 'University of Otago', 'Victoria University', 'Canterbury'],
        },
        {
            name: 'Europe',
            slug: 'europe',
            flag: '🇪🇺',
            image: europeImage,
            universities: '150+ Universities',
            highlights: 'Affordable Tuition, Cultural Diversity',
            description: 'Explore diverse cultures while accessing affordable, high-quality education across European nations.',
            topUniversities: ['ETH Zurich', 'TU Munich', 'Sorbonne', 'KU Leuven'],
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-luxury">
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
                            backgroundImage: `url(${destinationsHeroImage})`,
                            backgroundAttachment: 'fixed',
                        }}
                    />
                    {/* Luxury Overlay */}

                </motion.div>

                {/* Content */}
                <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 py-32">
                    <div className="max-w-4xl bg-black/20 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
                        <motion.div
                            ref={heroRef}
                            initial={{ opacity: 0, y: 30 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
                                Choose Your{' '}
                                <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                                    Study Destination
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed max-w-3xl drop-shadow-md">
                                Explore world-class education opportunities across the globe's most prestigious academic destinations
                            </p>
                        </motion.div>
                    </div>
                </div>


            </section>

            {/* Destinations Grid */}
            <section ref={cardsRef} className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinations.map((destination, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                onClick={() => setSelectedCountry(destination)}
                                className="premium-card group relative overflow-hidden rounded-3xl shadow-xl transition-all cursor-pointer"
                            >
                                {/* Image */}
                                <div className="h-80 overflow-hidden">
                                    <img
                                        src={destination.image}
                                        alt={destination.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                    <div className="text-5xl mb-3">{destination.flag}</div>
                                    <h3 className="text-3xl font-display font-bold mb-2">{destination.name}</h3>
                                    <p className="text-sm opacity-90 mb-2 font-medium">{destination.universities}</p>
                                    <p className="text-sm opacity-80 mb-4">{destination.highlights}</p>
                                    <button className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold hover:bg-white/30 transition-all border border-white/30">
                                        View Details →
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal for Country Details */}
            {selectedCountry && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedCountry(null)}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="glass-card max-w-2xl w-full p-8 md:p-12 rounded-3xl shadow-2xl"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <span className="text-5xl">{selectedCountry.flag}</span>
                                <h2 className="text-3xl font-display font-bold text-navy-muted">
                                    {selectedCountry.name}
                                </h2>
                            </div>
                            <button
                                onClick={() => setSelectedCountry(null)}
                                className="text-gray-500 hover:text-gray-700 text-2xl"
                            >
                                ✕
                            </button>
                        </div>

                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                            {selectedCountry.description}
                        </p>

                        <div className="mb-6">
                            <h3 className="font-display font-bold text-xl text-navy-muted mb-3">
                                Top Universities:
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {selectedCountry.topUniversities.map((uni, i) => (
                                    <span key={i} className="px-4 py-2 bg-brand-light text-brand-purple rounded-full text-sm font-semibold">
                                        {uni}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="text-sm text-gray-600 mb-6">
                            <strong>{selectedCountry.universities}</strong> partnered with Pathway International
                        </div>

                        <Link
                            to={`/country/${selectedCountry.slug}`}
                            onClick={() => setSelectedCountry(null)}
                        >
                            <button className="w-full px-8 py-3 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                                Start Your Application →
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default Destinations;
