import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import heroSlideUSA from '../assets/images/hero_slide_usa.png';
import heroSlideUK from '../assets/images/hero_slide_uk.png';
import heroSlideCanada from '../assets/images/hero_slide_canada.png';
import heroSlideAustralia from '../assets/images/hero_slide_australia.png';
import heroSlideGermany from '../assets/images/hero_slide_germany.png';
import ctaBackground from '../assets/images/cta_background_cinematic.png';
import BackgroundElements from '../components/BackgroundElements';
import usaUniversity from '../assets/images/usa_university.png';
import ukUniversity from '../assets/images/uk_university.png';
import canadaUniversity from '../assets/images/canada_university.png';
import australiaUniversity from '../assets/images/australia_university.png';
import irelandUniversity from '../assets/images/ireland_university.png';
import newZealandUniversity from '../assets/images/new_zealand_university.png';
import germanyUniversity from '../assets/images/germany_university.png';
import europeUniversity from '../assets/images/europe_university.png';


const Home = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [openFAQ, setOpenFAQ] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Animated counters state
    const [counters, setCounters] = useState({
        students: 0,
        partners: 0,
        countries: 0,
        visaRate: 0
    });

    const heroSlides = [
        heroSlideUSA,
        heroSlideUK,
        heroSlideCanada,
        heroSlideAustralia,
        heroSlideGermany
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [heroSlides.length]);

    // Animated counter effect
    useEffect(() => {
        if (statsInView) {
            const duration = 2000; // 2 seconds
            const frameDuration = 1000 / 60; // 60fps
            const totalFrames = Math.round(duration / frameDuration);

            const targets = {
                students: 100,
                partners: 50,
                countries: 15,
                visaRate: 100
            };

            let frame = 0;

            const counter = setInterval(() => {
                frame++;
                const progress = frame / totalFrames;

                // Easing function for smooth animation (easeOutQuart)
                const easeOut = 1 - Math.pow(1 - progress, 4);

                setCounters({
                    students: Math.round(easeOut * targets.students),
                    partners: Math.round(easeOut * targets.partners),
                    countries: Math.round(easeOut * targets.countries),
                    visaRate: Math.round(easeOut * targets.visaRate)
                });

                if (frame === totalFrames) {
                    clearInterval(counter);
                }
            }, frameDuration);

            return () => clearInterval(counter);
        }
    }, [statsInView]);


    const stats = [
        { number: '100%', label: 'Student Focus' },
        { number: '50+', label: 'Partner Universities' },
        { number: '15+', label: 'Countries Worldwide' },
        { number: '100%', label: 'Visa Success Goal' },
    ];

    const highlights = [
        {
            icon: '🌍',
            title: 'Global Presence',
            description: 'International offices in USA, UK, and Dubai',
        },
        {
            icon: '🎓',
            title: 'Top Universities',
            description: 'Partnerships with Ivy League and Russell Group',
        },
        {
            icon: '💼',
            title: 'Expert Counseling',
            description: 'Certified counselors with global expertise',
        },
        {
            icon: '✈️',
            title: 'End-to-End Support',
            description: 'From application to landing abroad',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-luxury">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Background Image Slideshow */}
                <div className="absolute inset-0 z-0">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${heroSlides[currentSlide]})`,
                            }}
                        />
                    </AnimatePresence>
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <BackgroundElements />

                {/* Content */}
                <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 py-20">
                    <div className="max-w-4xl bg-black/20 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
                        <motion.div
                            ref={heroRef}
                            initial={{ opacity: 0, y: 30 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Premium Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="inline-block mb-8"
                            >
                                <span className="glass-card inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold text-white border border-white/30 bg-white/10 text-center max-w-[90vw] whitespace-normal md:whitespace-nowrap">
                                    <span>Empowering Global Aspirations Since 2025</span>
                                </span>
                            </motion.div>

                            {/* Main Headline */}
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight drop-shadow-2xl"
                                style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}
                            >
                                Your Gateway to{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 drop-shadow-lg">
                                    World-Class Education
                                </span>{' '}
                                Abroad
                            </motion.h1>

                            {/* Subheading */}
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="text-xl md:text-2xl text-blue-50 mb-10 leading-relaxed max-w-3xl font-light drop-shadow-lg"
                            >
                                Strategic guidance from our global offices. Transform your academic potential into reality
                                with personalized university selection, admissions strategy, and scholarship advisory.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                className="flex flex-col sm:flex-row gap-5"
                            >
                                <Link to="/book-consultation">
                                    <motion.div
                                        whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)' }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-10 py-4 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-full font-semibold text-lg shadow-2xl transition-all inline-flex items-center justify-center cursor-pointer"
                                    >
                                        <span className="mr-2">📅</span>
                                        Complimentary Consultation
                                    </motion.div>
                                </Link>

                                <Link to="/destinations">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-10 py-4 glass-card text-brand-purple rounded-full font-semibold text-lg hover:border-gold-luxury transition-all inline-flex items-center justify-center cursor-pointer"
                                    >
                                        <span className="mr-2">🌎</span>
                                        Explore Destinations
                                    </motion.div>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>


            </section>

            {/* Stats Section */}
            <section ref={statsRef} className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { key: 'students', value: counters.students, suffix: '%', label: 'Student Focus', format: false },
                            { key: 'partners', value: counters.partners, suffix: '+', label: 'Partner Institutions', format: false },
                            { key: 'countries', value: counters.countries, suffix: '+', label: 'Countries Worldwide', format: false },
                            { key: 'visaRate', value: counters.visaRate, suffix: '%', label: 'Visa Success Goal', format: false },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent mb-3">
                                    {stat.format ? stat.value.toLocaleString() : stat.value}{stat.suffix}
                                </div>
                                <div className="text-sm md:text-base text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section ref={featuresRef} className="py-24 bg-gradient-to-b from-white to-sky-soft/30">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-muted mb-4">
                            Why Choose Pathway International
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                            Excellence in international education consultancy
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: '🌍',
                                title: 'Global Presence',
                                description: 'International offices in USA, UK, and Dubai',
                            },
                            {
                                icon: '🎓',
                                title: 'Top Institutions',
                                description: 'Partnerships with Ivy League and Russell Group universities',
                            },
                            {
                                icon: '💼',
                                title: 'Strategic Counseling',
                                description: 'Certified counselors with deep industry expertise',
                            },
                            {
                                icon: '✈️',
                                title: 'Comprehensive Support',
                                description: 'From application strategy to arrival and settlement',
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="glass-card p-8 rounded-3xl relative overflow-hidden group transition-all duration-500 hover:shadow-[0_0_40px_rgba(109,40,217,0.3)]"
                            >
                                {/* Gradient Top Border - Appears on Hover */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-purple to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="text-6xl mb-5">{item.icon}</div>
                                <h3 className="text-xl font-display font-bold text-navy-muted mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ultra-Premium Cinematic Destinations */}
            <section className="py-40 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
                {/* Ambient Light Effects */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-gradient-to-r from-brand-purple to-brand-blue rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-l from-brand-blue to-brand-purple rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]"></div>

                <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative z-10">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center mb-24"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 1 }}
                            className="inline-block mb-6"
                        >
                            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-purple/80 backdrop-blur-sm px-6 py-2 rounded-full border border-brand-purple/20 bg-brand-purple/5">
                                Global Excellence
                            </span>
                        </motion.div>

                        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight">
                            Pursue Your Education in
                            <br />
                            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                                Top Global Destinations
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                            Discover unparalleled educational opportunities at prestigious institutions across the globe
                        </p>
                    </motion.div>

                    {/* Premium Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {[
                            {
                                code: 'US',
                                name: 'United States',
                                count: '200+ Universities',
                                highlight: 'Ivy League, STEM Designated Programs',
                                image: usaUniversity,
                                path: '/country/usa'
                            },
                            {
                                code: 'CA',
                                name: 'Canada',
                                count: '80+ Universities',
                                highlight: 'Post-Graduation Pathways & Quality Life',
                                image: canadaUniversity,
                                path: '/country/canada'
                            },
                            {
                                code: 'GB',
                                name: 'United Kingdom',
                                count: '100+ Universities',
                                highlight: 'Russell Group & Research Excellence',
                                image: ukUniversity,
                                path: '/country/uk'
                            },
                            {
                                code: 'AU',
                                name: 'Australia',
                                count: '60+ Universities',
                                highlight: 'Career & Migration Opportunities',
                                image: australiaUniversity,
                                path: '/country/australia'
                            },
                            {
                                code: 'NZ',
                                name: 'New Zealand',
                                count: '40+ Universities',
                                highlight: 'High-Quality Education & Natural Beauty',
                                image: newZealandUniversity,
                                path: '/country/new-zealand'
                            },
                            {
                                code: 'DE',
                                name: 'Germany',
                                count: '100+ Universities',
                                highlight: 'Tuition-Free Public Universities & Innovation',
                                image: germanyUniversity,
                                path: '/country/germany'
                            },
                            {
                                code: 'IE',
                                name: 'Ireland',
                                count: '30+ Universities',
                                highlight: '2-Year Post-Study Work Permit',
                                image: irelandUniversity,
                                path: '/country/ireland'
                            },
                            {
                                code: 'EU',
                                name: 'Europe',
                                count: '150+ Universities',
                                highlight: 'Affordable Tuition & Cultural Diversity',
                                image: europeUniversity,
                                path: '/country/europe'
                            },
                        ].map((dest, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    delay: index * 0.2,
                                    duration: 1,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                className="group relative h-[480px]"
                            >
                                {/* Card Container with Refined Shadow */}
                                <div className="relative h-full rounded-[28px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] hover:shadow-[0_30px_80px_-15px_rgba(109,40,217,0.4)] transition-all duration-700">
                                    {/* Background Image Layer */}
                                    <div className="absolute inset-0">
                                        <img
                                            src={dest.image}
                                            alt={dest.name}
                                            className="w-full h-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:brightness-110"
                                        />

                                        {/* Sophisticated Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/95"></div>

                                        {/* Subtle Vignette */}
                                        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60"></div>
                                    </div>

                                    {/* Premium Glassmorphism Layer */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent backdrop-blur-[0.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                    {/* Refined Border with Glow */}
                                    <div className="absolute inset-0 rounded-[28px] border border-white/[0.08] group-hover:border-white/20 transition-all duration-700">
                                        <div className="absolute inset-0 rounded-[28px] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] group-hover:shadow-[inset_0_1px_0_0_rgba(109,40,217,0.2)] transition-all duration-700"></div>
                                    </div>

                                    {/* Content Layer */}
                                    <div className="relative h-full p-10 flex flex-col justify-between">
                                        {/* Top: Country Code Badge */}
                                        <motion.div
                                            className="self-start"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 py-2.5 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/10 shadow-lg">
                                                <span className="text-white font-bold text-3xl tracking-[0.05em]">{dest.code}</span>
                                            </div>
                                        </motion.div>

                                        {/* Bottom: Content */}
                                        <div className="space-y-6">
                                            {/* Refined Glow Effect */}
                                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-brand-purple/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                            <div className="relative space-y-3">
                                                <div>
                                                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-tight leading-[1.1]">
                                                        {dest.name}
                                                    </h3>
                                                    <p className="text-brand-purple font-semibold text-base tracking-wide">
                                                        {dest.count}
                                                    </p>
                                                </div>

                                                <p className="text-gray-300/90 text-sm leading-relaxed font-light max-w-[280px]">
                                                    {dest.highlight}
                                                </p>
                                            </div>

                                            {/* Elegant CTA Button */}
                                            <Link to={dest.path}>
                                                <motion.button
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="group/btn w-full px-8 py-4 rounded-full bg-white/[0.08] hover:bg-white/[0.15] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                                                >
                                                    <span className="text-white font-semibold text-sm tracking-wide">View Details</span>
                                                    <svg
                                                        className="w-4 h-4 text-white/70 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-300"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2.5}
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </motion.button>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Subtle Top Light Reflection */}
                                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                                </div>

                                {/* Floating Shadow Enhancement */}
                                <div className="absolute -inset-2 -z-10 rounded-[32px] bg-gradient-to-b from-brand-purple/0 to-brand-purple/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Our Process Section */}
            <section className="py-24 bg-gradient-to-b from-brand-light to-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-muted mb-4">
                            Your Journey to <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">Success</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            A proven step-by-step process to make your study abroad dreams a reality
                        </p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto relative">
                        {/* Vertical Center Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-purple via-brand-blue to-brand-purple transform -translate-x-1/2 hidden md:block" />

                        <div className="space-y-16">
                            {[
                                {
                                    step: '01',
                                    title: 'Initial Consultation',
                                    desc: 'Meet with our expert counselors to discuss your goals, preferences, and academic background',
                                    align: 'right'
                                },
                                {
                                    step: '02',
                                    title: 'University Selection',
                                    desc: 'Get personalized recommendations from 50+ partner universities matching your profile',
                                    align: 'left'
                                },
                                {
                                    step: '03',
                                    title: 'Application Support',
                                    desc: 'Complete guidance on documents, essays, and application submissions',
                                    align: 'right'
                                },
                                {
                                    step: '04',
                                    title: 'Offer Letters',
                                    desc: 'Receive and evaluate offers from multiple universities to choose the best fit',
                                    align: 'left'
                                },
                                {
                                    step: '05',
                                    title: 'Visa Assistance',
                                    desc: 'Expert support for visa documentation, interview prep, and submission',
                                    align: 'right'
                                },
                                {
                                    step: '06',
                                    title: 'Pre-Departure',
                                    desc: 'Comprehensive briefing on accommodation, travel, and settling abroad',
                                    align: 'left'
                                },
                            ].map((process, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: process.align === 'right' ? 30 : -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.12, duration: 0.6 }}
                                    className="relative"
                                >
                                    <div className={`flex items-center gap-8 ${process.align === 'left' ? 'md:flex-row-reverse' : ''} flex-col md:flex-row`}>
                                        {/* Left/Right Content Card */}
                                        <div className={`flex-1 ${process.align === 'right' ? 'md:text-right' : 'md:text-left'} text-center`}>
                                            <motion.div
                                                whileHover={{ y: -5, scale: 1.02 }}
                                                className="glass-card p-8 rounded-2xl inline-block w-full md:max-w-md"
                                            >
                                                <h3 className="text-2xl font-display font-bold text-navy-muted mb-3">{process.title}</h3>
                                                <p className="text-gray-600 leading-relaxed">{process.desc}</p>
                                            </motion.div>
                                        </div>

                                        {/* Center Circle */}
                                        <div className="flex-shrink-0 relative z-10">
                                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center text-white text-2xl font-bold shadow-2xl border-4 border-white">
                                                {process.step}
                                            </div>
                                        </div>

                                        {/* Spacer for alignment */}
                                        <div className="flex-1 hidden md:block" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-muted mb-4">
                            What Our <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">Students Say</span>
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                            Join ambitious students who are finding their path with our expert guidance.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: 'Priya Sharma', uni: 'Harvard University, USA', quote: 'Pathway International made my dream of studying at Harvard come true. Their guidance was invaluable!', rating: 5 },
                            { name: 'Rahul Mehta', uni: 'University of Oxford, UK', quote: 'Professional, knowledgeable, and supportive throughout my entire journey. Highly recommended!', rating: 5 },
                            { name: 'Ananya Patel', uni: 'University of Toronto, Canada', quote: 'From application to visa, they handled everything perfectly. Now I\'m living my Canadian dream!', rating: 5 },
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="glass-card p-8 rounded-3xl relative overflow-hidden group transition-all duration-500 hover:shadow-[0_0_40px_rgba(109,40,217,0.3)]"
                            >
                                {/* Gradient Top Border - Appears on Hover */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-purple to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="text-2xl">⭐</span>
                                    ))}
                                </div>
                                <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-white font-bold text-xl">
                                        {testimonial.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy-muted">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.uni}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partner Universities Section */}
            <section className="py-24 bg-gradient-to-b from-brand-light to-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-muted mb-4">
                            Our <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">Partner Universities</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Direct partnerships with 50+ world-renowned institutions
                        </p>
                    </motion.div>

                    {/* Horizontal Scroll Container */}
                    <div className="relative">
                        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x snap-mandatory">
                            {[
                                'Harvard University', 'Stanford University', 'MIT', 'Oxford University',
                                'Cambridge University', 'University of Toronto', 'ANU', 'ETH Zurich',
                                'Yale University', 'Imperial College', 'McGill University', 'TU Munich'
                            ].map((uni, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05, duration: 0.4 }}
                                    className="glass-card p-6 rounded-2xl text-center transition-all flex-shrink-0 w-64 snap-start relative overflow-hidden group hover:shadow-[0_0_40px_rgba(109,40,217,0.3)] duration-500"
                                >
                                    {/* Gradient Top Border - Appears on Hover */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-purple to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="text-3xl mb-2">🎓</div>
                                    <p className="text-sm font-semibold text-navy-muted">{uni}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Scroll Indicator */}
                        <div className="text-center mt-4 text-sm text-gray-400">
                            ← Scroll to view more →
                        </div>
                    </div>

                    <style jsx>{`
                        .scrollbar-hide::-webkit-scrollbar {
                            display: none;
                        }
                        .scrollbar-hide {
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }
                    `}</style>


                    <div className="text-center mt-12">
                        <Link to="/universities">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
                            >
                                View All Universities →
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion Section */}
            <section className="py-5 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-muted mb-4">
                            Frequently Asked <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">Questions</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Get answers to common questions about studying abroad
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {[
                            { q: 'When should I start my application process?', a: 'Ideally, start 12-18 months before your intended enrollment date to ensure ample time for applications, tests, and visa processing.' },
                            { q: 'Do you help with scholarships?', a: 'Yes! We provide comprehensive scholarship guidance and help you identify and apply for merit-based, need-based, and university-specific scholarships.' },
                            { q: 'What is the cost of your services?', a: 'We offer complimentary initial consultation. Our service packages are customized based on your needs, and we work on transparent pricing with no hidden costs.' },
                            { q: 'Can I apply to multiple universities?', a: 'Absolutely! We recommend applying to 5-8 universities to maximize your chances of admission and compare offers.' },
                            { q: 'What is your visa success rate?', a: 'We strive for a 100% visa success rate through meticulous documentation, expert guidance, and thorough interview preparation.' },
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="premium-card bg-white p-8 rounded-3xl shadow-lg border border-gray-100 group"
                            >
                                {/* Question Header - Clickable */}
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                    className="w-full p-6 md:p-8 flex items-start justify-between gap-4 text-left hover:bg-gray-50/50 transition-colors duration-300"
                                >
                                    <div className="flex items-start gap-3 flex-1">
                                        <span className="text-brand-purple font-bold text-lg flex-shrink-0 mt-1">Q.</span>
                                        <h3 className="text-lg md:text-xl font-display font-bold text-navy-muted leading-relaxed">
                                            {faq.q}
                                        </h3>
                                    </div>

                                    {/* Plus/Minus Icon */}
                                    <motion.div
                                        animate={{ rotate: openFAQ === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-purple/10 flex items-center justify-center"
                                    >
                                        {openFAQ === index ? (
                                            <svg className="w-5 h-5 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                                            </svg>
                                        )}
                                    </motion.div>
                                </button>

                                {/* Answer - Collapsible */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: openFAQ === index ? 'auto' : 0,
                                        opacity: openFAQ === index ? 1 : 0
                                    }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                                        <div className="pl-8 border-l-2 border-brand-purple/20">
                                            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section with Parallax Background */}
            <section className="relative py-32 md:py-40 overflow-hidden">
                {/* Fixed Parallax Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${ctaBackground})`,
                        backgroundAttachment: 'fixed',
                    }}
                />

                {/* Transparent Glass/Mirror Overlay */}
                <div className="absolute inset-0 bg-white/15" />

                {/* Subtle Gradient for Depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />

                {/* Content - Scrolls Normally */}
                <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                            Ready to Begin Your Journey?
                        </h2>
                        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-white font-light leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                            Schedule a complimentary consultation with our expert counselors today
                        </p>
                        <Link to="/book-consultation">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-5 bg-white/95 backdrop-blur-md text-brand-purple rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all inline-flex items-center gap-3 border border-white/50"
                            >
                                <span>Request Complimentary Session</span>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
