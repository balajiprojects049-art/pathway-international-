import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import contactImage from '../assets/images/contact_support_visual.png';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        alert('Thank you for your interest! We will contact you shortly.');
        setFormData({ name: '', email: '', phone: '', country: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-white to-brand-light">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-brand-purple font-semibold text-sm uppercase tracking-wider">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                        Start Your <span className="text-brand-purple">Journey</span> Today
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Schedule a complimentary consultation with our expert counselors and take the first step towards your global education.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Contact Image Card */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] group">
                            <img
                                src={contactImage}
                                alt="Customer Support"
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <h3 className="text-2xl font-bold mb-2">We're Here to Help</h3>
                                <p className="text-white/80">Our expert counselors are ready to guide you through every step of your journey.</p>
                            </div>
                        </div>

                        {/* Contact Details & Social Section */}
                        <div className="glass-card p-6 md:p-8 rounded-2xl shadow-lg">
                            <div className="space-y-6">
                                {/* Top Row: Email and Hours */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Email */}
                                    <div className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-xl border border-blue-100 hover:bg-blue-50 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-lg shrink-0">
                                            📧
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Email Us</p>
                                            <p className="font-medium text-gray-900 break-all text-xs sm:text-sm">Pathwayinternationalnlr@gmail.com</p>
                                        </div>
                                    </div>

                                    {/* Hours */}
                                    <div className="flex items-center gap-3 p-3 bg-purple-50/50 rounded-xl border border-purple-100 hover:bg-purple-50 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-lg shrink-0">
                                            ⏰
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Working Hours</p>
                                            <p className="font-medium text-gray-900 text-xs sm:text-sm">Mon-Sat: 10AM-7PM</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Global Numbers Grid */}
                                <div>
                                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-3">Global Support Lines</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                                            <span className="text-2xl">🇮🇳</span>
                                            <div>
                                                <p className="text-xs text-brand-purple font-bold uppercase">India (Main Branch)</p>
                                                <p className="font-medium text-gray-900 text-sm">+91 6302 040 874</p>
                                                <p className="text-[10px] text-gray-500">Nellore</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                                            <span className="text-2xl">🇬🇧</span>
                                            <div>
                                                <p className="text-xs text-brand-purple font-bold uppercase">UK (Virtual Office)</p>
                                                <p className="font-medium text-gray-900 text-sm">+44 7767 934282</p>
                                                <p className="text-[10px] text-gray-500">London</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                                            <span className="text-2xl">🇨🇦</span>
                                            <div>
                                                <p className="text-xs text-brand-purple font-bold uppercase">Canada (Virtual Office)</p>
                                                <p className="font-medium text-gray-900 text-sm">+1 (514) 212-2350</p>
                                                <p className="text-[10px] text-gray-500">Toronto</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                                            <span className="text-2xl">🇦🇺</span>
                                            <div>
                                                <p className="text-xs text-brand-purple font-bold uppercase">Australia (Virtual Office)</p>
                                                <p className="font-medium text-gray-900 text-sm">+61 416 491 057</p>
                                                <p className="text-[10px] text-gray-500">Melbourne</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 pt-6">
                                    <h3 className="text-center text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
                                        Follow Us
                                    </h3>
                                    <div className="flex gap-4 justify-center">
                                        {[
                                            { name: 'Facebook', icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />, href: 'https://www.facebook.com/people/Pathway-international/61586515402866/' },
                                            { name: 'Instagram', icon: <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />, href: 'https://www.instagram.com/pathway__international/?__pwa=1' }
                                        ].map((social) => (
                                            <motion.a
                                                key={social.name}
                                                href={social.href}
                                                whileHover={{ scale: 1.1, y: -5 }}
                                                className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue text-white flex items-center justify-center font-semibold shadow-md hover:shadow-lg transition-all"
                                                aria-label={social.name}
                                            >
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    stroke="currentColor"
                                                    strokeWidth="0"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="w-5 h-5"
                                                >
                                                    {social.name === 'Instagram' ? (
                                                        <>
                                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" fill="none"></rect>
                                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2" fill="none"></path>
                                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2"></line>
                                                        </>
                                                    ) : (
                                                        social.icon
                                                    )}
                                                </svg>
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl shadow-lg">
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        placeholder="+1 234 567 8900"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Preferred Study Destination
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                    >
                                        <option value="">Select a country</option>
                                        <option value="usa">United States</option>
                                        <option value="uk">United Kingdom</option>
                                        <option value="canada">Canada</option>
                                        <option value="australia">Australia</option>
                                        <option value="europe">Europe</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                                        placeholder="Tell us about your educational goals..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                                >
                                    📅 Schedule Consultation
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
