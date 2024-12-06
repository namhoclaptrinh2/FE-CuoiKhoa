const { BorderColor, BorderRight } = require('@mui/icons-material');
const { default: zIndex } = require('@mui/material/styles/zIndex');
const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, #e2e2e2, #c9d6ff)',
      },
      borderRadius: {
        'custom-radius': '10px 100px 110px', // giá trị tuỳ chỉnh
      },
      boxShadow:{
        'box':'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary_tailwind: '#41b294',
        sub: '#f6ba35'
      },
      textShadow: {
        custom: ' 6px -6px 5px rgba(65,178,148,0.87)'
      },
      animation : {
        'caret':  'caret 0.4s linear infinite',
        "typewriter": 'typewriter 3s steps(12) 1s infinite',
        'cloud-move': 'floatRight 5s linear infinite',
        "swing": 'swing 4s linear infinite',
       
      },
      keyframes: {
        caret : {
          '0%' : {borderColor: "transparent"},
          '100%' : {borderColor: '#41b294'}
        },
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '340px' },
        },
        floatRight: {
          '0%': { transform: 'translateX(0)', opacity: '0' },  // Bắt đầu từ ngoài màn hình bên trái và ẩn
          '10%': { opacity: '1' },  // Bắt đầu hiện ra
          '90%': { opacity: '1' },  // Giữ nguyên độ rõ
          '100%': { transform: 'translateX(100%)', opacity: '0' },  // Trôi sang phải và biến mất
        },
        swing: {
          
          '0%': { transform: 'rotate(0deg)', transformOrigin: 'bottom center' },
          '25%': { transform: 'rotate(30deg)', transformOrigin: 'bottom center' },
          '50%': { transform: 'rotate(0deg)', transformOrigin: 'bottom center' },
          '75%': { transform: 'rotate(-30deg)', transformOrigin: 'bottom center' },
          '100%': { transform: 'rotate(0deg)', transformOrigin: 'bottom center' },
        },
        
      }
      
    },
  },
  plugins: [
    function ({ addUtilities }) {
      
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-md': {
          textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-custom': {
          textShadow: ' 6px -6px 5px rgba(65,178,148,0.87)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
        '.custom-after::after':{
          content:'""',
          position:"absolute",
          height: "100%",
          width: '30px',
          background: '#ef4444',
          clipPath:'polygon(100% 0, 75% 50%, 100% 100%, 25% 100%, 25% 54%, 25% 0%)',
          top: "0",
          right: "-20px",
        },
        '.custom-before::before':{
          content:'""',
          position:"absolute",
          height: "40%",
          width: '30px',
          background: '#ef4444',
          clipPath:'polygon(50% 0%, 20% 0, 48% 100%)',
          bottom: "-43%",
          left: "-5px",
        }
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
};
