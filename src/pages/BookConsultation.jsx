import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import bookingHeroImage from '../assets/images/booking_hero_background_1767880663649.png';

const BookConsultation = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you! Our counselors will contact you within 24 hours.');
        setFormData({ name: '', email: '', phone: '', country: '', preferredDate: '', preferredTime: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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
                            backgroundImage: `url(${bookingHeroImage})`,
                            backgroundAttachment: 'fixed',
                        }}
                    />
                    {/* Luxury Overlay */}

                </motion.div>

                {/* Content */}
                <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 py-32">
                    <div className="max-w-4xl bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-3xl">
                        <motion.div
                            ref={heroRef}
                            initial={{ opacity: 0, y: 30 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-navy-muted mb-6 leading-tight drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                                Book Your Free{' '}
                                <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                                    Consultation
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed max-w-3xl drop-shadow-md">
                                Schedule a personalized session with our expert counselors to discuss your study abroad goals
                            </p>
                        </motion.div>
                    </div>
                </div>


            </section>

            {/* Booking Form */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="max-w-3xl mx-auto">
                        <div className="glass-card p-10 md:p-12 rounded-3xl shadow-2xl">
                            <div className="mb-8 text-center">
                                <h2 className="text-3xl font-display font-bold text-navy-muted mb-3">
                                    Schedule Your Session
                                </h2>
                                <p className="text-gray-600">
                                    🔒 Your information is completely confidential and secure
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                            className="w-full px-5 py-3.5 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
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
                                            className="w-full px-5 py-3.5 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                            className="w-full px-5 py-3.5 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                                            placeholder="+1 234 567 8900"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Preferred Study Destination *
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            required
                                            value={formData.country}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3.5 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                                        >
                                            <option value="">Select a country</option>
                                            <option value="usa">United States</option>
                                            <option value="uk">United Kingdom</option>
                                            <option value="canada">Canada</option>
                                            <option value="australia">Australia</option>
                                            <option value="europe">Europe</option>
                                            <option value="other">Not Sure Yet</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Preferred Date
                                        </label>
                                        <input
                                            type="date"
                                            id="preferredDate"
                                            name="preferredDate"
                                            value={formData.preferredDate}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3.5 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Preferred Time
                                        </label>
                                        <select
                                            id="preferredTime"
                                            name="preferredTime"
                                            value={formData.preferredTime}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3.5 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                                        >
                                            <option value="">Select time slot</option>
                                            <option value="morning">Morning (9 AM - 12 PM)</option>
                                            <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                                            <option value="evening">Evening (4 PM - 7 PM)</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Your Questions or Goals
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3.5 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none bg-white"
                                        placeholder="Tell us about your educational goals, preferred courses, or any specific questions..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full px-10 py-4 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
                                >
                                    📅 Confirm Free Consultation
                                </motion.button>

                                <p className="text-center text-sm text-gray-500 mt-4">
                                    Our expert counselors will contact you within 24 hours to confirm your appointment
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reassurance Section */}
            <section className="py-20 bg-gradient-to-b from-white to-sky-soft/20">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { icon: '🔒', title: 'Confidential', text: 'Your information is 100% secure' },
                            { icon: '👨‍🎓', title: 'Expert Counselors', text: 'Certified professionals with 10+ years' },
                            { icon: '💯', title: 'Free of Charge', text: 'No hidden fees, completely free' },
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="font-display font-bold text-xl text-navy-muted mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookConsultation;
