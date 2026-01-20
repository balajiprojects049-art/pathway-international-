import { useState, useEffect } from 'react';
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
        secondaryEducation: '',

        // Test Scores
        englishTest: '',
        englishScore: '',
        greGmat: '',
        greGmatScore: '',
        noTests: false,

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

    // Comprehensive body scroll lock when modal is open
    useEffect(() => {
        if (isOpen) {
            // Save current scroll position
            const scrollY = window.scrollY;
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

            // Lock body scroll and prevent layout shift
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';

            // Compensate for scrollbar width to prevent layout shift
            if (scrollbarWidth > 0) {
                document.body.style.paddingRight = `${scrollbarWidth}px`;
            }

            // Cleanup function
            return () => {
                // Restore scroll position
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                document.body.style.overflow = '';
                document.body.style.paddingRight = '';

                // Restore scroll position without jump
                window.scrollTo(0, scrollY);
            };
        }
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
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
                    highestQualification: '', fieldOfStudy: '', graduationYear: '', gpa: '', secondaryEducation: '',
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
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl z-10 flex flex-col"
                        style={{
                            maxHeight: '90vh',
                            height: 'auto'
                        }}
                    >
                        {/* Close Button - Fixed position */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-20 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-full p-1 shadow-md"
                            aria-label="Close form"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Scrollable Content */}
                        <div
                            className="overflow-y-auto p-8 md:p-10 flex-1 min-h-0"
                            onWheel={(e) => e.stopPropagation()}
                            onTouchMove={(e) => e.stopPropagation()}
                            style={{
                                WebkitOverflowScrolling: 'touch'
                            }}
                        >
                            {/* Header */}
                            <div className="mb-8 pr-8">
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
                                        <select
                                            name="fieldOfStudy"
                                            value={formData.fieldOfStudy}
                                            onChange={handleChange}
                                            required
                                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all"
                                        >
                                            <option value="">Field of Study *</option>
                                            <optgroup label="Engineering & Technology">
                                                <option value="Computer Science">Computer Science & IT</option>
                                                <option value="Mechanical Engineering">Mechanical Engineering</option>
                                                <option value="Electrical Engineering">Electrical Engineering</option>
                                                <option value="Civil Engineering">Civil Engineering</option>
                                                <option value="Aerospace Engineering">Aerospace Engineering</option>
                                                <option value="Chemical Engineering">Chemical Engineering</option>
                                                <option value="Data Science">Data Science & Analytics</option>
                                                <option value="Artificial Intelligence">Artificial Intelligence & ML</option>
                                            </optgroup>
                                            <optgroup label="Business & Management">
                                                <option value="Business Administration">Business Administration (MBA)</option>
                                                <option value="Finance">Finance & Accounting</option>
                                                <option value="Marketing">Marketing & Sales</option>
                                                <option value="Human Resources">Human Resources</option>
                                                <option value="International Business">International Business</option>
                                                <option value="Entrepreneurship">Entrepreneurship</option>
                                            </optgroup>
                                            <optgroup label="Health & Medicine">
                                                <option value="Medicine">Medicine (MD)</option>
                                                <option value="Nursing">Nursing</option>
                                                <option value="Pharmacy">Pharmacy</option>
                                                <option value="Public Health">Public Health</option>
                                                <option value="Dentistry">Dentistry</option>
                                                <option value="Biotechnology">Biotechnology</option>
                                            </optgroup>
                                            <optgroup label="Arts & Humanities">
                                                <option value="Psychology">Psychology</option>
                                                <option value="Economics">Economics</option>
                                                <option value="Political Science">Political Science</option>
                                                <option value="Communications">Communications & Media</option>
                                                <option value="Law">Law (LLB/JD)</option>
                                                <option value="Education">Education</option>
                                            </optgroup>
                                            <optgroup label="Sciences">
                                                <option value="Physics">Physics</option>
                                                <option value="Chemistry">Chemistry</option>
                                                <option value="Biology">Biology</option>
                                                <option value="Mathematics">Mathematics</option>
                                                <option value="Environmental Science">Environmental Science</option>
                                            </optgroup>
                                            <optgroup label="Creative Arts">
                                                <option value="Architecture">Architecture</option>
                                                <option value="Graphic Design">Graphic Design</option>
                                                <option value="Fashion Design">Fashion Design</option>
                                                <option value="Film & Media">Film & Media Production</option>
                                                <option value="Music">Music</option>
                                            </optgroup>
                                            <option value="Other">Other (Please Specify in Additional Info)</option>
                                        </select>
                                        <input
                                            type="text"
                                            name="graduationYear"
                                            value={formData.graduationYear}
                                            onChange={handleChange}
                                            placeholder="Graduation Year (e.g., 2024)"
                                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all"
                                        />
                                        <input
                                            type="text"
                                            name="gpa"
                                            value={formData.gpa}
                                            onChange={handleChange}
                                            placeholder="GPA / Percentage (e.g., 3.5/4.0 or 85%)"
                                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all"
                                        />
                                        <input
                                            type="text"
                                            name="secondaryEducation"
                                            value={formData.secondaryEducation}
                                            onChange={handleChange}
                                            placeholder="Secondary Education (%)"
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
                                            <option value="">English Proficiency Test</option>
                                            <option value="IELTS">IELTS (Academic)</option>
                                            <option value="TOEFL">TOEFL iBT</option>
                                            <option value="PTE">PTE Academic</option>
                                            <option value="Duolingo">Duolingo English Test</option>
                                            <option value="Cambridge">Cambridge English (CAE/CPE)</option>
                                            <option value="Planning">Planning to Take Soon</option>
                                            <option value="Not Required">Not Required/Native Speaker</option>
                                        </select>
                                        <input
                                            type="text"
                                            name="englishScore"
                                            value={formData.englishScore}
                                            disabled={formData.noTests}
                                            onChange={handleChange}
                                            placeholder="Score (e.g., 7.5 for IELTS, 100 for TOEFL)"
                                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all disabled:opacity-50 disabled:bg-gray-100"
                                        />
                                        <select
                                            name="greGmat"
                                            value={formData.greGmat}
                                            disabled={formData.noTests}
                                            onChange={handleChange}
                                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all disabled:opacity-50 disabled:bg-gray-100"
                                        >
                                            <option value="">Graduate Entrance Test</option>
                                            <option value="GRE">GRE (Graduate Record Exam)</option>
                                            <option value="GMAT">GMAT (Business Schools)</option>
                                            <option value="SAT">SAT (Undergraduate)</option>
                                            <option value="ACT">ACT (Undergraduate)</option>
                                            <option value="Planning">Planning to Take</option>
                                            <option value="Not Required">Not Required for My Program</option>
                                            <option value="Waived">Score Requirement Waived</option>
                                        </select>
                                        <input
                                            type="text"
                                            name="greGmatScore"
                                            value={formData.greGmatScore}
                                            disabled={formData.noTests}
                                            onChange={handleChange}
                                            placeholder="Score (e.g., 320 for GRE, 700 for GMAT)"
                                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all disabled:opacity-50 disabled:bg-gray-100"
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                name="noTests"
                                                checked={formData.noTests}
                                                onChange={handleChange}
                                                className="w-5 h-5 text-brand-purple border-gray-300 rounded focus:ring-brand-purple transition-colors cursor-pointer"
                                            />
                                            <span className="text-gray-600 group-hover:text-brand-purple transition-colors">
                                                None of the above / I have not taken any tests yet
                                            </span>
                                        </label>
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
                                            placeholder="Interested Program/Major *"
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
                                            <option value="Foundation">Foundation/Pathway Program</option>
                                            <option value="Undergraduate">Undergraduate (Bachelor's)</option>
                                            <option value="Postgraduate">Postgraduate (Master's)</option>
                                            <option value="PhD">Doctoral (PhD)</option>
                                            <option value="Diploma">Diploma/Certificate</option>
                                            <option value="Associate">Associate Degree</option>
                                        </select>
                                        <select
                                            name="preferredIntake"
                                            value={formData.preferredIntake}
                                            onChange={handleChange}
                                            required
                                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all"
                                        >
                                            <option value="">Preferred Intake *</option>
                                            <option value="January 2025">January 2025 (Spring)</option>
                                            <option value="May 2025">May 2025 (Summer)</option>
                                            <option value="September 2025">September 2025 (Fall)</option>
                                            <option value="January 2026">January 2026 (Spring)</option>
                                            <option value="September 2026">September 2026 (Fall)</option>
                                            <option value="Flexible">Flexible/Not Sure Yet</option>
                                        </select>
                                        <select
                                            name="budgetRange"
                                            value={formData.budgetRange}
                                            onChange={handleChange}
                                            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all"
                                        >
                                            <option value="">Annual Budget (USD)</option>
                                            <option value="<10k">Under $10,000</option>
                                            <option value="10k-20k">$10,000 - $20,000</option>
                                            <option value="20k-30k">$20,000 - $30,000</option>
                                            <option value="30k-50k">$30,000 - $50,000</option>
                                            <option value="50k-70k">$50,000 - $70,000</option>
                                            <option value=">70k">Above $70,000</option>
                                            <option value="Scholarship">Seeking Full Scholarship</option>
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
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence >
    );
};

export default StudentInquiryForm;
