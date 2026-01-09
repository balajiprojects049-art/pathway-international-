/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#6D28D9', // The Plane color
        'brand-blue': '#7DA5F5',   // The Feather/Text color
        'brand-dark': '#0F172A',   // The Book/Bridge color
        'brand-light': '#F5F3FF',  // Light background tint
        'navy-muted': '#0F172A',   // Keeping alias for compatibility
        'gold-luxury': '#6D28D9',  // Mapping old gold to new purple for immediate effect
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #F5F3FF 0%, #FFFFFF 100%)',
        'gradient-premium': 'linear-gradient(to right, #6D28D9, #7DA5F5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 1.5s infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
