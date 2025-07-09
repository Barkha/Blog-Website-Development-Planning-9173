/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['Roboto Mono', 'monospace'],
        'display': ['Playfair Display', 'serif'],
      },
      colors: {
        baseline: {
          black: '#000000',
          white: '#FFFFFF',
          // New color palette
          primary: '#f26627',
          'mountain-view': '#2a4029',
          'vivid-red-tangelo': '#d95e25',
          'casting-shadow': '#9da6a1',
          'october-haze': '#f9ae8f',
          // Shades for better design flexibility
          gray: {
            50: '#f9f9f9',
            100: '#f3f3f3',
            200: '#e7e7e7',
            300: '#d1d1d1',
            400: '#9da6a1', // casting-shadow
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#2a4029', // mountain-view
            900: '#1f2937',
          },
          orange: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#f9ae8f', // october-haze
            500: '#f26627', // primary
            600: '#d95e25', // vivid-red-tangelo
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
          }
        },
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#f9ae8f',
          500: '#f26627',
          600: '#d95e25',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      spacing: {
        '4xs': '0.125rem',  // 2px
        '3xs': '0.25rem',   // 4px
        '2xs': '0.375rem',  // 6px
        'xs': '0.5rem',     // 8px
        'sm': '0.75rem',    // 12px
        'md': '1rem',       // 16px
        'lg': '1.25rem',    // 20px
        'xl': '1.5rem',     // 24px
        '2xl': '2rem',      // 32px
        '3xl': '2.5rem',    // 40px
        '4xl': '3rem',      // 48px
      },
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',    // 4px
        'md': '0.375rem',   // 6px
        'lg': '0.5rem',     // 8px
        'xl': '1rem',       // 16px
        'full': '9999px',
      }
    },
  },
  plugins: [],
}