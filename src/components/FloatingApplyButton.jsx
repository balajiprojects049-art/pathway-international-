import { motion } from 'framer-motion';
import { useState } from 'react';

const FloatingApplyButton = ({ onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: 1,
                scale: 1,
                boxShadow: [
                    "0 4px 20px rgba(109, 40, 217, 0.3)",
                    "0 4px 30px rgba(109, 40, 217, 0.5)",
                    "0 4px 20px rgba(109, 40, 217, 0.3)",
                ],
            }}
            transition={{
                boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                opacity: { duration: 0.5 },
                scale: { duration: 0.3 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-24 right-6 z-40 px-6 py-4 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-full font-bold shadow-2xl flex items-center gap-2 cursor-pointer group"
            style={{
                backdropFilter: 'blur(10px)',
            }}
        >
            {/* Ripple effect */}
            <motion.div
                className="absolute inset-0 bg-white rounded-full opacity-20"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0, 0.2],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Icon */}
            <motion.div
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 0.5 }}
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            </motion.div>

            {/* Text */}
            <span className="font-bold text-sm relative z-10">Apply Now</span>

            {/* Arrow */}
            <motion.svg
                className="w-4 h-4 relative z-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                animate={{ x: isHovered ? 3 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
        </motion.button>
    );
};

export default FloatingApplyButton;
