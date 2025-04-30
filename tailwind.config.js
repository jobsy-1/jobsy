/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        // Add your pastel colors here!
        colors: {
          'pastel-pink': '#F8B195', // Example hex code - replace with your desired shades!
          'pastel-pink-dark': '#F67280', // A slightly darker shade for hover
          'pastel-purple': '#C06C84',
          'pastel-purple-dark': '#6C5B7B',
          'pastel-green': '#355C7D',
          'pastel-green-dark': '#2A4D69',
          'pastel-blue': '#A8E6CE',
          'pastel-yellow': '#FFDEAD',
          // Add more pastel shades if you like!
        },
      },
    },
    plugins: [
      // Add plugins here
      require('@tailwindcss/line-clamp'), // Uncomment and add this line if you install the line-clamp plugin
    ],
  }