// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation

function Footer() {
  return (
    <footer className="w-full bg-pastel-purple p-4 text-center mt-auto"> {/* Example pastel footer background */}
      {/* Use Link to navigate to the new Add Job page */}
      <Link
        to="/add-job" // We will create this route next!
        className="inline-block bg-pastel-pink hover:bg-pastel-pink-dark text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300" // Pastel, rounded button styles
      >
        + Add a New Job!
      </Link>
    </footer>
  );
}

export default Footer;