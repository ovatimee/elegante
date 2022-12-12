/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  images: {
    domains: ['eimages.valtim.com'],
  },
  theme: {
    extend: {
      colors: {
        "primary-color": "#ff6b6b",
        "secondary-color": "#794afa",
        "secondary-dark-color": "#453c5c",
        "light-bg-color": "#f2f3f5",
        "light-text-color": "#7c899a",
        "border-color": "#e5e8ec",
      },
    },
  },
  plugins: [],
};
