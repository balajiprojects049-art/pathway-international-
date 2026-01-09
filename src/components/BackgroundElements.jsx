import { motion } from 'framer-motion';

const BackgroundElements = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Top Left Orb */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-brand-purple/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" />

            {/* Top Right Orb */}
            <div className="absolute top-0 -right-20 w-72 h-72 bg-brand-blue/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '2s' }} />

            {/* Bottom Center Orb */}
            <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-brand-purple/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float" style={{ animationDelay: '4s' }} />

            {/* Small accent orbs */}
            <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-brand-blue/40 rounded-full blur-xl animate-float" style={{ animationDelay: '1s', animationDuration: '4s' }} />
            <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-brand-purple/40 rounded-full blur-xl animate-float" style={{ animationDelay: '3s', animationDuration: '5s' }} />
        </div>
    );
};

export default BackgroundElements;
