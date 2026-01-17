import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import aboutHeroImage from '../assets/images/about_hero_background_1767880538051.png';
import globalCtaImage from '../assets/images/global_cta_background.png';

const AboutUs = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const timeline = [
        { year: '2025', event: 'Global Launch: Established with a vision to revolutionize international education, starting with our main branch in Nellore.' },
        { year: '2025', event: 'Expanded virtual presence to London, Toronto, and Melbourne to support students worldwide.' },
    ];

    const values = [
        {
            title: 'Excellence',
            description: 'Committed to the highest standards in education consultancy',
            icon: '⭐',
        },
        {
            title: 'Integrity',
            description: 'Transparent, honest guidance throughout your journey',
            icon: '🤝',
        },
        {
            title: 'Global Vision',
            description: 'International perspective with local expertise',
            icon: '🌍',
        },
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
                            backgroundImage: `url(${aboutHeroImage})`,
                            backgroundAttachment: 'fixed',
                        }}
                    />
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
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
                                About{' '}
                                <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                                    Pathway
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed max-w-3xl drop-shadow-md">
                                Empowering students worldwide to access premium education
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section ref={storyRef} className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={storyInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-muted mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Established in January 2025, Pathway International was born from a fresh vision: to make
                                    world-class education accessible to ambitious students through modern, personalized consultancy.
                                </p>
                                <p>
                                    Starting with our main headquarters in Nellore, India, we have rapidly adopted a digital-first approach,
                                    establishing virtual offices in key global education hubs including London, Toronto, and Melbourne.
                                </p>
                                <p>
                                    We are a new age consultancy built on transparency, integrity, and a deep commitment to student success.
                                    We partner with prestigious universities to give you the best start to your global career.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={storyInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="space-y-4"
                        >
                            {timeline.map((item, index) => (
                                <div key={index} className="glass-card p-6 rounded-2xl border border-white/50 shadow-lg transition-all relative overflow-hidden group hover:shadow-[0_0_40px_rgba(109,40,217,0.3)] duration-500">
                                    {/* Gradient Top Border - Appears on Hover */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-purple to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center text-white font-display font-bold text-xl shadow-lg">
                                            {item.year.slice(-2)}
                                        </div>
                                        <div>
                                            <div className="font-display font-bold text-navy-muted text-lg mb-1">
                                                {item.year}
                                            </div>
                                            <p className="text-gray-600">{item.event}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section ref={valuesRef} className="py-24 bg-gradient-to-b from-white to-sky-soft/20">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-muted mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                            The principles that guide our commitment to your success
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                title: 'Excellence',
                                description: ' committed to the highest standards in educational consulting',
                                icon: '⭐',
                            },
                            {
                                title: 'Integrity',
                                description: 'Transparent, honest guidance throughout your entire journey',
                                icon: '🤝',
                            },
                            {
                                title: 'Global Vision',
                                description: 'International perspective combined with local market expertise',
                                icon: '🌍',
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                whileHover={{ y: -10, scale: 1.03 }}
                                className="glass-card p-10 rounded-3xl text-center shadow-lg transition-all border border-white/60 relative overflow-hidden group hover:shadow-[0_0_40px_rgba(109,40,217,0.3)] duration-500"
                            >
                                {/* Gradient Top Border - Appears on Hover */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-purple to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="text-6xl mb-6 drop-shadow-md">{value.icon}</div>
                                <h3 className="text-2xl font-display font-bold text-navy-muted mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Offices */}
            <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark to-black opacity-90 z-0" />
                <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
                        Our Global Presence
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { city: 'Nellore', type: 'Main Branch', country: '🇮🇳' },
                            { city: 'London', type: 'Virtual Office', country: '🇬🇧' },
                            { city: 'Toronto', type: 'Virtual Office', country: '🇨🇦' },
                            { city: 'Melbourne', type: 'Virtual Office', country: '🇦🇺' },
                        ].map((office, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="premium-card bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 group text-center hover:bg-white/10"
                            >
                                <div className="text-5xl mb-4">{office.country}</div>
                                <h3 className="text-2xl font-display font-bold mb-2 text-white">{office.city}</h3>
                                <p className="text-gray-300 group-hover:text-white transition-colors text-sm uppercase tracking-widest">{office.type}</p>
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
                            Ready to Write Your Success Story?
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                            Join over 10,000 students who have found their path with our expert guidance.
                        </p>
                        <Link to="/book-consultation">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-5 bg-white text-brand-purple rounded-full font-bold text-lg shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all border border-white/50"
                            >
                                Schedule Your Complimentary Consultation
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
