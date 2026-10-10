import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        mist: '#888888',
        paper: '#f5f5f5',
        rule: '#e0e0e0',
        accent: '#0066FF',
      },
      fontFamily: {
        montserrat: ['Segoe UI', 'Arial', 'sans-serif'],
        lato: ['Segoe UI', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
        'fade-in-delay': 'fadeIn 1.2s ease-out 0.4s forwards',
        'slide-up-delay': 'slideUp 1s ease-out 0.3s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}
export default config
