/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // iVideo 品牌主色 - 藍色系
        primary: {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#1867c0', // 主藍色
          600: '#1565c0',
          700: '#0d47a1',
          800: '#0a3d8f',
          900: '#072f6d',
        },
        // 次要色 - 青綠色系
        secondary: {
          50: '#e0f7f7',
          100: '#b3ebec',
          200: '#80dde0',
          300: '#48a5a6', // 青綠色
          400: '#3d9394',
          500: '#338182',
          600: '#2d7374',
          700: '#256163',
          800: '#1e4f51',
          900: '#163a3b',
        },
        // 強調色 - 粉紅色
        accent: {
          50: '#fce4ec',
          100: '#f8bbd0',
          200: '#f48fb1',
          300: '#f06292',
          400: '#ec407a',
          500: '#e83d75', // 粉紅強調色
          600: '#d81b60',
          700: '#c2185b',
          800: '#ad1457',
          900: '#880e4f',  
        },
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 15s ease infinite',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradientShift: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glass-lg': '0 12px 40px 0 rgba(31, 38, 135, 0.25)',
      },
    },
  },
  plugins: [],
}
