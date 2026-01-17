import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import examsHeroImage from '../assets/images/exams_hero_background.png';
import globalCtaImage from '../assets/images/global_cta_background.png';

const Exams = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const exams = [
        {
            name: 'IELTS',
            fullName: 'International English Language Testing System',
            color: 'border-blue-500',
            description: 'The IELTS test is the world\'s most popular English language proficiency test for study, work, and migration. Accepted by over 11,000 organizations globally including universities, employers, professional bodies, and immigration authorities.',
            whoShouldTake: 'Students planning to study in UK, Australia, Canada, New Zealand, or seeking immigration. Also required for UK visa applications and professional registration.',
            testFormat: [
                'Listening (30 minutes): 40 questions on 4 recordings',
                'Reading (60 minutes): 40 questions on 3 passages',
                'Writing (60 minutes): 2 tasks including essay writing',
                'Speaking (11-14 minutes): Face-to-face interview with examiner'
            ],
            details: [
                'Score range: 0-9 bands (9 being the highest)',
                'Two types: Academic & General Training',
                'Total duration: 2 hrs 45 mins',
                'Validity: 2 years from test date',
                'Fee: ₹16,250 (approx.)',
                'Results: Available in 3-5 days (computer) or 13 days (paper)'
            ],
            preparationTips: [
                'Practice all four skills daily for balanced improvement',
                'Take regular mock tests under timed conditions',
                'Focus on academic vocabulary and formal writing style',
                'Record yourself speaking to identify pronunciation issues'
            ]
        },
        {
            name: 'TOEFL',
            fullName: 'Test of English as a Foreign Language',
            color: 'border-purple-500',
            description: 'TOEFL iBT measures your ability to use and understand English at the university level. It evaluates how well you combine listening, reading, speaking, and writing skills to perform academic tasks. Accepted by 160+ countries and 11,500+ universities.',
            whoShouldTake: 'Students applying to American, Canadian universities, or English-speaking institutions. Required for undergraduate, graduate programs, scholarships, and student visas.',
            testFormat: [
                'Reading (54-72 minutes): 3-4 passages with comprehension questions',
                'Listening (41-57 minutes): Academic lectures and conversations',
                'Speaking (17 minutes): 4 tasks expressing opinions on familiar topics',
                'Writing (50 minutes): 2 tasks - integrated and independent essay'
            ],
            details: [
                'Score range: 0-120 (30 points per section)',
                'Fully internet-based test (iBT)',
                'Duration: ~3 hours',
                'Validity: 2 years',
                'Fee: $185-220 USD (varies by location)',
                'Accepted by 160+ countries worldwide',
                'Results: Available in 4-8 days'
            ],
            preparationTips: [
                'Master note-taking skills for integrated tasks',
                'Build stamina for the 3-hour computer-based test',
                'Practice typing for writing section (saves time)',
                'Use official ETS materials for authentic practice'
            ]
        },
        {
            name: 'GRE',
            fullName: 'Graduate Record Examination',
            color: 'border-indigo-500',
            description: 'The GRE General Test measures verbal reasoning, quantitative reasoning, critical thinking, and analytical writing skills. Required for admission to graduate and business schools worldwide, it\'s accepted by thousands of programs globally.',
            whoShouldTake: 'Students applying for Master\'s, PhD, MBA, and other graduate programs. Required by most US universities and increasingly accepted in Europe, Canada, and Australia.',
            testFormat: [
                'Analytical Writing (60 minutes): 2 essays analyzing arguments',
                'Verbal Reasoning (60 minutes): 2 sections with 20 questions each',
                'Quantitative Reasoning (70 minutes): 2 sections with 20 questions each',
                'Unscored Research Section: May appear in any order'
            ],
            details: [
                'Score range: 260-340 (Verbal & Quant: 130-170 each)',
                'Analytical Writing: 0-6 in half-point increments',
                'Sections: Verbal, Quantitative, Analytical Writing',
                'Duration: ~3 hours 45 minutes',
                'Validity: 5 years',
                'Fee: $220 USD worldwide',
                'Computer-adaptive test (difficulty adjusts)'
            ],
            preparationTips: [
                'Master high-frequency vocabulary (1000+ words)',
                'Practice mental math to save time in Quant section',
                'Learn to identify question patterns and shortcuts',
                'Take full-length adaptive practice tests regularly'
            ]
        },
        {
            name: 'PTE',
            fullName: 'Pearson Test of English Academic',
            color: 'border-green-500',
            description: 'PTE Academic is a computer-based English language test for study abroad and immigration. Known for fast results and unbiased AI scoring, it assesses real-life English used in academic settings and is trusted by universities, governments worldwide.',
            whoShouldTake: 'Students seeking faster results and computer-based testing. Popular for Australia, New Zealand immigration and widely accepted for UK, Canadian student visas.',
            testFormat: [
                'Speaking & Writing (54-67 minutes): Personal introduction, read aloud, essay',
                'Reading (29-30 minutes): Multiple choice, reorder paragraphs',
                'Listening (30-43 minutes): Summarize spoken text, multiple choice',
                'All sections integrated with AI scoring'
            ],
            details: [
                'Score range: 10-90 points (90 being highest)',
                'Fully computer-based test with AI scoring',
                'Duration: ~2 hours',
                'Validity: 2 years',
                'Fee: ₹15,900 (India) / $245 USD',
                'Results: Within 48 hours (usually 24 hours)',
                'Unlimited score sending to institutions'
            ],
            preparationTips: [
                'Get comfortable with computerized testing interface',
                'Practice speaking into a microphone clearly',
                'Learn template-based approaches for speaking/writing',
                'Master time management - no breaks between sections'
            ]
        },
        {
            name: 'Duolingo English Test',
            fullName: 'Duolingo English Test',
            color: 'border-emerald-500',
            description: 'The Duolingo English Test is an affordable, convenient online English proficiency test. Completed entirely online in under an hour, it\'s increasingly accepted by universities worldwide as an alternative to IELTS/TOEFL, especially post-pandemic.',
            whoShouldTake: 'Students looking for a quick, affordable, online alternative to traditional tests. Ideal for those unable to access test centers or needing urgent results. Accepted by 4,000+ institutions including Yale, Columbia.',
            testFormat: [
                'Adaptive Quick Setup (5 minutes): Camera, microphone, ID verification',
                'Graded Test (45 minutes): Reading, writing, listening, speaking tasks',
                'Video Interview (10 minutes): Unscored but sent to institutions',
                'All sections computer-adaptive based on your responses'
            ],
            details: [
                'Score range: 10-160 (160 being highest proficiency)',
                'Completely online - take from anywhere',
                'Duration: Under 1 hour total',
                'Validity: 2 years',
                'Fee: $59 USD (highly affordable)',
                'Available 24/7 - test on-demand',
                'Results: Within 48 hours',
                'Unlimited free official practice tests'
            ],
            preparationTips: [
                'Use the free practice test multiple times',
                'Ensure stable internet and quiet environment',
                'Practice speaking naturally about various topics',
                'Familiarize yourself with adaptive question format'
            ]
        },
    ];

    return (
        <div>
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
                            backgroundImage: `url(${examsHeroImage})`,
                            backgroundAttachment: 'fixed',
                        }}
                    />
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
                                English Proficiency &{' '}
                                <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                                    Entrance Exams
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed max-w-3xl drop-shadow-md">
                                Prepare for globally recognized tests that open pathways to international education and career opportunities
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Exams Grid Section */}
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
                            Test Preparation <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">Programs</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Expert coaching and comprehensive study materials to help you achieve your target scores
                        </p>
                    </motion.div>

                    <div className="space-y-12 max-w-6xl mx-auto">
                        {exams.map((exam, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className={`bg-white border-l-4 ${exam.color} rounded-2xl shadow-xl overflow-hidden relative group hover:shadow-2xl transition-all duration-500`}
                            >
                                {/* Gradient Top Border - Appears on Hover */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-purple to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Header */}
                                <div className={`p-8 bg-gradient-to-r ${exam.name === 'IELTS' ? 'from-blue-50 to-blue-100' :
                                    exam.name === 'TOEFL' ? 'from-purple-50 to-purple-100' :
                                        exam.name === 'GRE' ? 'from-indigo-50 to-indigo-100' :
                                            exam.name === 'PTE' ? 'from-green-50 to-green-100' :
                                                'from-emerald-50 to-emerald-100'
                                    }`}>
                                    <div className="mb-3">
                                        <h3 className="text-3xl font-bold text-brand-purple">{exam.name}</h3>
                                        <p className="text-sm text-gray-600 font-medium">{exam.fullName}</p>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">{exam.description}</p>
                                </div>

                                {/* Content Grid */}
                                <div className="p-8 grid md:grid-cols-2 gap-8">
                                    {/* Who Should Take */}
                                    <div>
                                        <h4 className="text-lg font-bold text-navy-muted mb-3">
                                            Who Should Take This
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed text-sm">{exam.whoShouldTake}</p>
                                    </div>

                                    {/* Key Details */}
                                    <div>
                                        <h4 className="text-lg font-bold text-navy-muted mb-3">
                                            Key Details
                                        </h4>
                                        <ul className="space-y-2">
                                            {exam.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-gray-700">
                                                    <span className="text-brand-purple mr-2 mt-0.5">✓</span>
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Test Format */}
                                    <div>
                                        <h4 className="text-lg font-bold text-navy-muted mb-3">
                                            Test Format
                                        </h4>
                                        <ul className="space-y-2">
                                            {exam.testFormat.map((format, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-gray-700">
                                                    <span className="text-brand-purple mr-2 mt-0.5">•</span>
                                                    <span>{format}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Preparation Tips */}
                                    <div>
                                        <h4 className="text-lg font-bold text-navy-muted mb-3">
                                            Preparation Tips
                                        </h4>
                                        <ul className="space-y-2">
                                            {exam.preparationTips.map((tip, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-gray-700">
                                                    <span className="text-brand-purple mr-2 mt-0.5">★</span>
                                                    <span>{tip}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
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
                            Ready to Ace Your Exams?
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                            Get personalized coaching and study plans to achieve your target scores
                        </p>
                        <Link to="/book-consultation">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-5 bg-white text-brand-purple rounded-full font-bold text-lg shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all border border-white/50"
                            >
                                Schedule Free Consultation
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Exams;
