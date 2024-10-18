/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'myred': 'var(--mybg-red)', // Reference your CSS variable
        'mylight': 'var(--mybg-light)', // Reference your CSS variable
        'myblue': 'var(--mybg-blue)', // Reference your CSS variable
        
      }, keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
