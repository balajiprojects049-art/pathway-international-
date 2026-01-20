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
                            <img src={logo} alt="Pathway International" className="h-32 w-auto object-contain bg-white p-2 rounded-lg" />
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Your trusted partner for international education, empowering students to achieve their academic goals at world-class institutions.
                        </p>
                        <div className="flex gap-3">
                            {[
                                {
                                    name: 'Facebook',
                                    icon: (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                        </svg>
                                    ),
                                    href: 'https://www.facebook.com/people/Pathway-international/61586515402866/'
                                },
                                {
                                    name: 'Instagram',
                                    icon: (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.484 2h.584zm-8.063 2.6c-.95.043-1.468.214-1.812.347-.457.177-.784.385-1.127.728-.344.343-.551.67-.728 1.127-.133.344-.304.862-.347 1.812-.043 1.002-.054 1.311-.054 3.737v.38c0 2.426.011 2.735.054 3.737.043.95.214 1.468.347 1.812.177.457.385.784.728 1.127.343.344.67.551 1.127.728.344.133.862.304 1.812.347 1.002.043 1.311.054 3.737.054h.38c2.426 0 2.735-.011 3.737-.054.95-.043 1.468-.214 1.812-.347.457-.177.784-.385 1.127-.728.343-.344.551-.67.728-1.127.133-.344.304-.862.347-1.812.043-1.002.054-1.311.054-3.737v-.38c0-2.426-.011-2.735-.054-3.737-.043-.95-.214-1.468-.347-1.812-.177-.457-.385-.784-.728-1.127-.343-.344-.67-.551-1.127-.728-.344-.133-.862-.304-1.812-.347-1.002-.043-1.311-.054-3.737-.054h-.38c-2.426 0-2.735.011-3.737.054zm5.732 3.123a5.275 5.275 0 00-1.889 7.002 5.275 5.275 0 007.002 1.889 5.275 5.275 0 00-5.113-8.891zm0 1.957a3.318 3.318 0 110 6.636 3.318 3.318 0 010-6.636zm3.935-4.481a1.305 1.305 0 110 2.61 1.305 1.305 0 010-2.61z" clipRule="evenodd" />
                                        </svg>
                                    ),
                                    href: 'https://www.instagram.com/pathway__international/?__pwa=1'
                                },
                                /*
                                {
                                    name: 'LinkedIn',
                                    icon: (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                        </svg>
                                    ),
                                    href: '#'
                                },
                                {
                                    name: 'Twitter',
                                    icon: (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    ),
                                    href: '#'
                                }
                                */
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-brand-purple flex items-center justify-center transition-all"
                                    aria-label={social.name}
                                >
                                    {social.icon}
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
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-start gap-2">
                                <span>📧</span>
                                <span>Pathwayinternationalnlr@gmail.com</span>
                            </li>
                            <li className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <span>🇮🇳</span> <span>+91 6302 040 874 (India - Main Branch)</span>
                                </div>
                                <div className="flex items-center gap-2 ml-6">
                                    <span>💬</span> <span>+91 95024 08286 (WhatsApp - Nellore)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>🇬🇧</span> <span>+44 7767 934282 (UK - Virtual Office)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>🇨🇦</span> <span>+1 (514) 212-2350 (Canada - Virtual Office)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>🇦🇺</span> <span>+61 416 491 057 (Australia - Virtual Office)</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-2 pt-2">
                                <span>🏢</span>
                                <span>Nellore (Main) | London | Toronto | Melbourne</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>⏰</span>
                                <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
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
