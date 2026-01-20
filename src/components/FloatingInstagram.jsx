import React from 'react';
import { motion } from 'framer-motion';

const FloatingInstagram = () => {
    // Pathway International Instagram URL
    const instagramUrl = 'https://www.instagram.com/pathway__international/?__pwa=1';

    return (
        <motion.a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-full shadow-[0_4px_14px_0_rgba(220,39,67,0.39)] hover:shadow-[0_6px_20px_rgba(220,39,67,0.23)] transition-all duration-300 group cursor-pointer"
            aria-label="Follow us on Instagram"
        >
            {/* Instagram Icon SVG (White) */}
            <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 stroke-white fill-none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>

            {/* Tooltip */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-sm font-semibold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden md:block">
                Follow on Instagram
            </span>

            {/* Soft Ping animation effect - reusing one of the gradient colors */}
            <span className="absolute -inset-1 rounded-full bg-[#dc2743] opacity-30 animate-ping pointer-events-none"></span>
        </motion.a>
    );
};

export default FloatingInstagram;
