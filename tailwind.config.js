/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 啟用 class-based dark mode
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
          500: '#1867c0', // iVideo 主藍色
          600: '#155a9c',
          700: '#0d47a1',
          800: '#0a3d7a',
          900: '#073066',
        },
        // 次要色 - 青綠色系
        secondary: {
          50: '#e0f2f1',
          100: '#b2dfdb',
          200: '#80cbc4',
          300: '#48a5a6', // iVideo 青綠色
          400: '#3d8a8e',
          500: '#338182',
          600: '#2b6b6d',
          700: '#235557',
          800: '#1b4041',
          900: '#132b2c',
        },
        // 強調色 - 粉紅色
        accent: {
          100: '#fce4ec',
          200: '#f8bbd0',
          300: '#f48fb1',
          400: '#f06292',
          500: '#e83d75', // iVideo 粉紅強調色
          600: '#d81b60',
          700: '#c2185b',
          800: '#ad1457',
          900: '#880e4f',  
        },
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradientShift 15s ease infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
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
