// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Useful if the logo links home

function Header() {
  // The lovely teal color you like for the logo!
  const logoColorClass = 'text-[#60a09b]'; // Using the hex code directly as a Tailwind class

  return (
    <header className="w-full bg-white p-4 shadow-md"> {/* Header container with light background and shadow */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Area - Using the style you love! */}
        <div className={`text-2xl font-bold ${logoColorClass}`}>
          {/* You can make this a Link to the landing page if you want */}
          <Link to="/">Jobsy</Link>
        </div>

        {/* Search Input Area */}
        <div className="flex-grow mx-4 max-w-sm"> {/* flex-grow allows it to take space, max-w limits width */}
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-pastel-green focus:border-pastel-green" // Simple input styling
          />
          {/* Search functionality will come later! */}
        </div>

        {/* Account/User Area */}
        <div className="text-gray-700">
          {/* Placeholder for account icon or user name */}
          {/* Maybe an icon like 👤 or a simple text like "Account" */}
          <span>Account</span> {/* Or a User Icon component */}
          {/* We can add a link to a profile/dashboard or logout here later */}
        </div>
      </div>
    </header>
  );
}

export default Header;