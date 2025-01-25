/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['californian-fb-regular',],
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-30%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        heroIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-out',
        heroIn: 'slideIn 1.5s ease-out',
      },
    },
  },
  plugins: [],
}

