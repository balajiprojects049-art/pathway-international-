import logo from '../assets/pathway_logo.png';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    const studyAbroadLinks = [
        { name: 'USA', path: '/country/usa', icon: '🇺🇸' },
        { name: 'Canada', path: '/country/canada', icon: '🇨🇦' },
        { name: 'UK', path: '/country/uk', icon: '🇬🇧' },
        { name: 'Australia', path: '/country/australia', icon: '🇦🇺' },
        { name: 'New Zealand', path: '/country/new-zealand', icon: '🇳🇿' },
        { name: 'Germany', path: '/country/germany', icon: '🇩🇪' },
        { name: 'Ireland', path: '/country/ireland', icon: '🇮🇪' },
        { name: 'Other Countries', path: '/destinations', icon: 'OC' },
    ];

    const isActive = (path) => location.pathname === (path === '/' && location.pathname !== '/' ? false : path);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'glass-nav shadow-xl py-3'
                : 'bg-white/90 backdrop-blur-md py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex flex-col items-center ml-8 group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="cursor-pointer"
                        >
                            <img src={logo} alt="Pathway International" className="h-16 w-auto object-contain" />
                        </motion.div>
                        <span className="text-xs md:text-sm font-bold bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:opacity-100">
                            Pathway International
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className={`transition-colors font-medium ${isActive(link.path)
                                        ? 'text-brand-purple font-semibold'
                                        : 'text-gray-700 hover:text-brand-purple'
                                        }`}
                                >
                                    {link.name}
                                </motion.div>
                            </Link>
                        ))}

                        {/* Study Abroad Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center space-x-1 text-gray-700 hover:text-brand-purple font-medium transition-colors"
                            >
                                <span>Study Abroad</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </motion.button>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {isDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
                                    >
                                        {studyAbroadLinks.map((link, index) => (
                                            <Link
                                                key={link.name}
                                                to={link.path}
                                                className="block"
                                            >
                                                <motion.div
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    whileHover={{ backgroundColor: '#F5F3FF', x: 5 }}
                                                    className="px-5 py-3.5 flex items-center space-x-3 text-gray-700 hover:text-brand-purple transition-all border-b border-gray-50 last:border-b-0"
                                                >
                                                    <span className="text-xl">{link.icon}</span>
                                                    <span className="font-medium">{link.name}</span>
                                                </motion.div>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link to="/book-consultation">
                            <motion.div
                                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(109, 40, 217, 0.3)' }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2.5 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-full font-medium shadow-lg transition-all cursor-pointer"
                            >
                                Schedule Consultation
                            </motion.div>
                        </Link>
                    </div>

                    {/* Mobile Menu Button - No changes needed here logic wise */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-gray-700 focus:outline-none z-50"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden glass-card mt-4 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 space-y-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`block py-2 transition-colors font-medium ${isActive(link.path)
                                        ? 'text-brand-purple font-semibold'
                                        : 'text-gray-700 hover:text-brand-purple'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {/* Mobile Study Abroad Section */}
                            <div>
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center justify-between w-full py-2 text-gray-700 font-medium"
                                >
                                    <span>Study Abroad</span>
                                    <svg
                                        className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="ml-4 mt-2 space-y-2 overflow-hidden"
                                        >
                                            {studyAbroadLinks.map((link) => (
                                                <Link
                                                    key={link.name}
                                                    to={link.path}
                                                    className="flex items-center space-x-2 py-2 text-gray-600 hover:text-brand-purple transition-colors"
                                                >
                                                    <span>{link.icon}</span>
                                                    <span>{link.name}</span>
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link
                                to="/book-consultation"
                                className="block text-center px-6 py-2.5 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-full font-medium shadow-lg"
                            >
                                Book Consultation
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navigation;
