import { motion } from 'framer-motion';
import logo from '../assets/pathway_logo.png';

const Footer = () => {
    return (
        <footer className="bg-brand-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="mb-6">
                            <img src={logo} alt="Pathway International" className="h-24 w-auto object-contain bg-white p-2 rounded-lg" />
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Your trusted partner for international education, empowering students to achieve their academic goals at world-class institutions.
                        </p>
                        <div className="flex gap-3">
                            {['F', 'I', 'L', 'T'].map((letter, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-brand-purple flex items-center justify-center transition-all"
                                >
                                    {letter}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Destinations', 'Services', 'Success Stories', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-brand-blue transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Study Destinations */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Study Destinations</h3>
                        <ul className="space-y-2">
                            {['United States', 'United Kingdom', 'Canada', 'Australia', 'Europe', 'New Zealand'].map((dest) => (
                                <li key={dest}>
                                    <a href="#destinations" className="text-gray-400 hover:text-brand-blue transition-colors">
                                        {dest}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start gap-2">
                                <span>📧</span>
                                <span>info@pathwayglobal.com</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>📞</span>
                                <span>+44 7392 093146</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>🏢</span>
                                <span>New York | London | Dubai</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>⏰</span>
                                <span>Mon - Sat: 9:00 AM - 6:00 PM EST</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
                    <p>© 2026 Pathway International Educational Consulting. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
