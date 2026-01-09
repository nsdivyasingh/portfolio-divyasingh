/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aurora: {
          black: '#0a0a0f',
          dark: '#0f1419',
          'midnight-blue': '#1a2332',
          green: '#4ade80',
          'soft-green': '#6ee7b7',
          teal: '#2dd4bf',
          cyan: '#06b6d4',
          'faint-teal': '#5eead4',
        },
        'off-white': '#f5f5f0',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 3s ease-in',
        'aurora-drift': 'auroraDrift 30s infinite ease-in-out',
        'aurora-wave': 'auroraWave 20s infinite ease-in-out',
        'soft-pulse': 'softPulse 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        auroraDrift: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
        auroraWave: {
          '0%, 100%': { opacity: '0.3', transform: 'scaleY(1)' },
          '50%': { opacity: '0.6', transform: 'scaleY(1.1)' },
        },
        softPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}

