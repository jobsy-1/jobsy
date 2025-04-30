// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation

function Footer() {
  return (
    // Made the footer fixed at the bottom, full width, with hardcoded colors
    <footer className="fixed bottom-0 left-0 z-10 w-full p-4 text-center"> {/* Fixed position, at the bottom and left, full width, added z-index, hardcoded pastel purple background */}
      {/* Use Link to navigate to the new Add Job page */}
      <Link
        to="/add-job"
        // Hardcoded button colors
        className="inline-block bg-[#F8B195] hover:bg-[#F67280] text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F8B195]" // Hardcoded pastel pink shades, rounded button styles
      >
        + Add a New Job!
      </Link>
    </footer>
  );
}

export default Footer;