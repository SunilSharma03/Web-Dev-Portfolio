/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#2E86AB', // Deep ocean blue (primary) - blue-600
        'primary-50': '#EBF4F8', // Light blue (50-level shade) - blue-50
        'primary-100': '#D7E9F3', // Light blue (100-level shade) - blue-100
        'primary-200': '#B0D3E7', // Light blue (200-level shade) - blue-200
        'primary-300': '#88BDDB', // Medium light blue (300-level shade) - blue-300
        'primary-400': '#5DA1C3', // Medium blue (400-level shade) - blue-400
        'primary-500': '#2E86AB', // Primary blue (500-level shade) - blue-500
        'primary-600': '#266B86', // Dark blue (600-level shade) - blue-600
        'primary-700': '#1E5061', // Darker blue (700-level shade) - blue-700
        'primary-800': '#16353C', // Very dark blue (800-level shade) - blue-800
        'primary-900': '#0E1A17', // Darkest blue (900-level shade) - blue-900

        // Secondary Colors
        'secondary': '#F18F01', // Sunset orange (secondary) - orange-500
        'secondary-50': '#FEF7E6', // Light orange (50-level shade) - orange-50
        'secondary-100': '#FDEFCD', // Light orange (100-level shade) - orange-100
        'secondary-200': '#FBDF9B', // Light orange (200-level shade) - orange-200
        'secondary-300': '#F9CF69', // Medium light orange (300-level shade) - orange-300
        'secondary-400': '#F5AF35', // Medium orange (400-level shade) - orange-400
        'secondary-500': '#F18F01', // Secondary orange (500-level shade) - orange-500
        'secondary-600': '#C17301', // Dark orange (600-level shade) - orange-600
        'secondary-700': '#915701', // Darker orange (700-level shade) - orange-700
        'secondary-800': '#613B01', // Very dark orange (800-level shade) - orange-800
        'secondary-900': '#301E00', // Darkest orange (900-level shade) - orange-900

        // Accent Colors
        'accent': '#FF6B6B', // Warm coral (accent) - red-400
        'accent-50': '#FFF0F0', // Light coral (50-level shade) - red-50
        'accent-100': '#FFE1E1', // Light coral (100-level shade) - red-100
        'accent-200': '#FFC3C3', // Light coral (200-level shade) - red-200
        'accent-300': '#FFA5A5', // Medium light coral (300-level shade) - red-300
        'accent-400': '#FF6B6B', // Accent coral (400-level shade) - red-400
        'accent-500': '#FF4757', // Medium coral (500-level shade) - red-500
        'accent-600': '#E63946', // Dark coral (600-level shade) - red-600
        'accent-700': '#CC2936', // Darker coral (700-level shade) - red-700
        'accent-800': '#B31926', // Very dark coral (800-level shade) - red-800
        'accent-900': '#990916', // Darkest coral (900-level shade) - red-900

        // Background Colors
        'background': '#FEFEFE', // Clean canvas (background) - gray-50
        'surface': '#F8F9FA', // Subtle card elevation (surface) - gray-100

        // Text Colors
        'text': {
          'primary': '#2C3E50', // Comfortable reading (text primary) - slate-700
          'secondary': '#6C757D', // Clear hierarchy (text secondary) - gray-500
        },

        // Status Colors
        'success': '#28A745', // Positive confirmation (success) - green-600
        'success-50': '#F0F9F4', // Light success (50-level shade) - green-50
        'success-100': '#E1F3E8', // Light success (100-level shade) - green-100
        'success-200': '#C3E7D1', // Light success (200-level shade) - green-200
        'success-300': '#A5DBBA', // Medium light success (300-level shade) - green-300
        'success-400': '#66C383', // Medium success (400-level shade) - green-400
        'success-500': '#28A745', // Success green (500-level shade) - green-500
        'success-600': '#208637', // Dark success (600-level shade) - green-600
        'success-700': '#186529', // Darker success (700-level shade) - green-700
        'success-800': '#10441B', // Very dark success (800-level shade) - green-800
        'success-900': '#08230D', // Darkest success (900-level shade) - green-900

        'warning': '#FFC107', // Helpful alerts (warning) - yellow-500
        'warning-50': '#FFFBF0', // Light warning (50-level shade) - yellow-50
        'warning-100': '#FFF7E1', // Light warning (100-level shade) - yellow-100
        'warning-200': '#FFEFC3', // Light warning (200-level shade) - yellow-200
        'warning-300': '#FFE7A5', // Medium light warning (300-level shade) - yellow-300
        'warning-400': '#FFD769', // Medium warning (400-level shade) - yellow-400
        'warning-500': '#FFC107', // Warning yellow (500-level shade) - yellow-500
        'warning-600': '#E6AD06', // Dark warning (600-level shade) - yellow-600
        'warning-700': '#CC9A05', // Darker warning (700-level shade) - yellow-700
        'warning-800': '#B38704', // Very dark warning (800-level shade) - yellow-800
        'warning-900': '#997303', // Darkest warning (900-level shade) - yellow-900

        'error': '#DC3545', // Clear problem indication (error) - red-600
        'error-50': '#FDF2F2', // Light error (50-level shade) - red-50
        'error-100': '#FBE5E6', // Light error (100-level shade) - red-100
        'error-200': '#F7CBCD', // Light error (200-level shade) - red-200
        'error-300': '#F3B1B4', // Medium light error (300-level shade) - red-300
        'error-400': '#EB777B', // Medium error (400-level shade) - red-400
        'error-500': '#DC3545', // Error red (500-level shade) - red-500
        'error-600': '#C62D3A', // Dark error (600-level shade) - red-600
        'error-700': '#B0252F', // Darker error (700-level shade) - red-700
        'error-800': '#9A1D24', // Very dark error (800-level shade) - red-800
        'error-900': '#841519', // Darkest error (900-level shade) - red-900

        // Border Colors
        'border': '#E9ECEF', // Minimal borders (border) - gray-200
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'accent': ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '13': '3.25rem',
        '21': '5.25rem',
        '34': '8.5rem',
        '55': '13.75rem',
        '89': '22.25rem',
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'brand': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'brand-lg': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'brand-xl': '0 8px 40px rgba(0, 0, 0, 0.12)',
        'brand-primary': '0 4px 20px rgba(46, 134, 171, 0.08)',
      },
      animation: {
        'search-suggestion': 'searchSuggestion 4s infinite',
        'pulse-brand': 'pulse-brand 2s infinite',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        searchSuggestion: {
          '0%, 25%': { opacity: '1', transform: 'translateY(0)' },
          '30%, 70%': { opacity: '0', transform: 'translateY(-10px)' },
          '75%, 100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-brand': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      aspectRatio: {
        'golden': '1.618',
      },
      gridTemplateColumns: {
        'golden': '1fr 1.618fr',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}