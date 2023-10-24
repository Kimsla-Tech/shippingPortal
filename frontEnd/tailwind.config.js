/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D3E8FA',
        secondary: '#1E50A0',
        tertiary: '#D9D9D9',
      },
      backgroundImage: {
        'authBg': "url('/images/authBg.png')",
      },
    },
  },
  plugins: [],
}