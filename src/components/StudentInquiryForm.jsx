import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StudentInquiryForm = ({ isOpen, onClose, country }) => {
    const [formData, setFormData] = useState({
        // Personal Information
        fullName: '',
        email: '',
        phone: '',
        country: '',
        city: '',

        // Academic Background
        highestQualification: '',
        fieldOfStudy: '',
        graduationYear: '',
        gpa: '',

        // Test Scores
        englishTest: '',
        englishScore: '',
        greGmat: '',
        greGmatScore: '',

        // Study Preferences
        interestedCourse: '',
        degreeLevel: '',
        preferredIntake: '',
        budgetRange: '',

        // Additional Information
        workExperience: '',
        studyDestination: country || '',
        additionalInfo: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            console.log('Form Data:', formData);
            setSubmitStatus('success');
            setIsSubmitting(false);

            // Reset form after 2 seconds
            setTimeout(() => {
                onClose();
                setSubmitStatus(null);
                setFormData({
                    fullName: '', email: '', phone: '', country: '', city: '',
                    highestQualification: '', fieldOfStudy: '', graduationYear: '', gpa: '',
                    englishTest: '', englishScore: '', greGmat: '', greGmatScore: '',
                    interestedCourse: '', degreeLevel: '', preferredIntake: '', budgetRange: '',
                    workExperience: '', studyDestination: country || '', additionalInfo: ''
                });
            }, 2000);
        }, 1500);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <div className="flex min-h-full items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-8 md:p-10"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Header */}
                            <div className="mb-8">
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-muted mb-2">
                                    Start Your Journey to <span className="text-brand-purple">{country}</span>
                                </h2>
                                <p className="text-gray-600">Fill in your details and our expert counselors will get in touch with you within 24 hours.</p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Personal Information */}
                                <div>
                                    <h3 className="text-lg font-bold text-navy-muted mb-4 flex items-center gap-2">
                                        <span className="text-brand-purple">📋</span> Personal Information
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Full Name *"
                                            required
                                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all"
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address *"
                                            required
                                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all"
                                        />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone Number *"
                                            required
                                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all"
                                        />
                                        <input
                                            type="text"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            placeholder="Current Country *"
                                            required
                                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Academic Background */}
                                <div>
                                    <h3 className="text-lg font-bold text-navy-muted mb-4 flex items-center gap-2">
                                        <span className="text-brand-purple">🎓</span> Academic Background
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <select
                                            name="highestQualification"
                                            value={formData.highestQualification}
                                            onChange={handleChange}
                                            required
                                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all"
                                        >
                                            <option value="">Highest Qualification *</option>
                                            <option value="High School">High School</option>
                                            <option value="Diploma">Diploma</option>
                                            <option value="Bachelor's">Bachelor's Degree</option>
                                            <option value="Master's">Master's Degree</option>
                                            <option value="PhD">PhD</option>
                                        </select>
                                        <input
                                            type="text"
                                            name="fieldOfStudy"
                                            value={formData.fieldOfStudy}
                                            onChange={handleChange}
                                            placeholder="Field of Study *"
                                            required
                                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all"
                                        />
                                        <input
                                            type="text"
                                            name="graduationYear"
                                            value={formData.graduationYear}
                                            onChange={handleChange}
                                            placeholder="Graduation Year"
                                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all"
                                        />
                                        <input
                                            type="text"
                                            name="gpa"
                                            value={formData.gpa}
                                            onChange={handleChange}
                                            placeholder="GPA / Percentage"
                                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Test Scores */}
                                <div>
                                    <h3 className="text-lg font-bold text-navy-muted mb-4 flex items-center gap-2">
                                        <span className="text-brand-purple">📝</span> Test Scores
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <select
                                            name="englishTest"
                                            value={formData.englishTest}
                                            onChange={handleChange}
                                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all"
                                        >
                                            <option value="">English Test</option>
                                            <option value="IELTS">IELTS</option>
                                            <option value="TOEFL">TOEFL</option>
                                            <option value="PTE">PTE</option>
                                            <option value="Duolingo">Duolingo</option>
                                            <option value="Not Taken">Not Taken Yet</option>
                                        </select>
                                        <input
                                            type="text"
                                            name="englishScore"
                                            value={formData.englishScore}
                                            onChange={handleChange}
                                            placeholder="English Test Score"
                                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all"
                                        />
                                        <select
                                            name="greGmat"
                                            value={formData.greGmat}
                                            onChange={handleChange}
                                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all"
                                        >
                                            <option value="">GRE/GMAT</option>
                                            <option value="GRE">GRE</option>
                                            <option value="GMAT">GMAT</option>
                                            <option value="Not Required">Not Required</option>
                                            <option value="Not Taken">Not Taken Yet</option>
                                        </select>
                                        <input
                                            type="text"
                                            name="greGmatScore"
                                            value={formData.greGmatScore}
                                            onChange={handleChange}
                                            placeholder="GRE/GMAT Score"
                                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Study Preferences */}
                                <div>
                                    <h3 className="text-lg font-bold text-navy-muted mb-4 flex items-center gap-2">
                                        <span className="text-brand-purple">🎯</span> Study Preferences
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="interestedCourse"
                                            value={formData.interestedCourse}
                                            onChange={handleChange}
                                            placeholder="Interested Course *"
                                            required
                                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all"
                                        />
                                        <select
                                            name="degreeLevel"
                                            value={formData.degreeLevel}
                                            onChange={handleChange}
                                            required
                                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all"
                                        >
                                            <option value="">Degree Level *</option>
                                            <option value="Bachelor's">Bachelor's</option>
                                            <option value="Master's">Master's</option>
                                            <option value="PhD">PhD</option>
                                            <option value="Diploma">Diploma</option>
                                        </select>
                                        <select
                                            name="preferredIntake"
                                            value={formData.preferredIntake}
                                            onChange={handleChange}
                                            required
                                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all"
                                        >
                                            <option value="">Preferred Intake *</option>
                                            <option value="Fall 2024">Fall 2024</option>
                                            <option value="Spring 2025">Spring 2025</option>
                                            <option value="Fall 2025">Fall 2025</option>
                                            <option value="Not Decided">Not Decided Yet</option>
                                        </select>
                                        <select
                                            name="budgetRange"
                                            value={formData.budgetRange}
                                            onChange={handleChange}
                                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all"
                                        >
                                            <option value="">Budget Range (USD)</option>
                                            <option value="<20k">Less than $20,000</option>
                                            <option value="20k-40k">$20,000 - $40,000</option>
                                            <option value="40k-60k">$40,000 - $60,000</option>
                                            <option value=">60k">More than $60,000</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Additional Information */}
                                <div>
                                    <h3 className="text-lg font-bold text-navy-muted mb-4 flex items-center gap-2">
                                        <span className="text-brand-purple">💼</span> Additional Information
                                    </h3>
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            name="workExperience"
                                            value={formData.workExperience}
                                            onChange={handleChange}
                                            placeholder="Work Experience (in years)"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all"
                                        />
                                        <textarea
                                            name="additionalInfo"
                                            value={formData.additionalInfo}
                                            onChange={handleChange}
                                            placeholder="Additional Information or Questions"
                                            rows="4"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all resize-none"
                                        ></textarea>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="flex gap-4 pt-4">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex-1 px-6 py-4 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Submitting...' : submitStatus === 'success' ? '✓ Submitted!' : 'Submit Application'}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default StudentInquiryForm;
