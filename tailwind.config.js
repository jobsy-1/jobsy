/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ADD YOUR PASTEL COLORS HERE!
      colors: {
        'pastel-pink': '#F8B195', // <-- Your chosen hex code
        'pastel-pink-dark': '#F67280', // <-- Your chosen darker hex code for hover
        'pastel-purple': '#C06C84', // <-- Your chosen hex code
        'pastel-purple-dark': '#6C5B7B', // <-- Your chosen darker hex code for hover
        'pastel-green': '#355C7D', // <-- Your chosen hex code
        'pastel-green-dark': '#2A4D69', // <-- Your chosen darker hex code for hover
        'pastel-blue': '#A8E6CE', // <-- Your chosen hex code
        'pastel-blue-border': '#A8E6CE', // <-- Example if you want a specific border shade
        'pastel-yellow': '#FFDEAD', // <-- Your chosen hex code for the budget chip background etc.
        'pastel-red': '#E57373', // Example for logout button
        'pastel-red-dark': '#EF5350', // Example darker red
        // Add any other specific pastel shades you want to use!
      },
    },
  },
  plugins: [
    // require('@tailwindcss/line-clamp'), // Uncomment if you installed the plugin
  ],
}