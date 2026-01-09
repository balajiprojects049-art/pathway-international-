import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import usaImage from '../assets/images/usa_study_destination_1767878848400.png';
import ukImage from '../assets/images/uk_study_destination_1767878865705.png';
import canadaImage from '../assets/images/canada_study_destination_1767878895785.png';
import australiaImage from '../assets/images/australia_study_destination_1767878913275.png';
import europeImage from '../assets/images/europe_study_destination_1767878934797.png';

const Destinations = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const destinations = [
        {
            name: 'United States',
            flag: '🇺🇸',
            image: usaImage,
            universities: '200+ Universities',
            highlights: 'Ivy League, Tech Hubs, Research Excellence',
        },
        {
            name: 'United Kingdom',
            flag: '🇬🇧',
            image: ukImage,
            universities: '100+ Universities',
            highlights: 'Oxford, Cambridge, World-Class Education',
        },
        {
            name: 'Canada',
            flag: '🇨🇦',
            image: canadaImage,
            universities: '80+ Universities',
            highlights: 'Immigration Benefits, Quality Education',
        },
        {
            name: 'Australia',
            flag: '🇦🇺',
            image: australiaImage,
            universities: '60+ Universities',
            highlights: 'Work Opportunities, Beach Lifestyle',
        },
        {
            name: 'Europe',
            flag: '🇪🇺',
            image: europeImage,
            universities: '150+ Universities',
            highlights: 'Affordable Tuition, Cultural Diversity',
        },
    ];

    return (
        <section id="destinations" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-brand-purple font-semibold text-sm uppercase tracking-wider">
                        Study Destinations
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                        Where Will Your <span className="text-brand-purple">Journey</span> Take You?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore world-class education opportunities across the globe with our expert guidance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((destination, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer"
                        >
                            {/* Image */}
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <div className="text-4xl mb-2">{destination.flag}</div>
                                <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                                <p className="text-sm opacity-90 mb-2">{destination.universities}</p>
                                <p className="text-sm opacity-80">{destination.highlights}</p>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-brand-purple/0 group-hover:bg-brand-purple/10 transition-all duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Destinations;
