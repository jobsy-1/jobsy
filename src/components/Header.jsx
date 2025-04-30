import React from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export default function Header() {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) alert('Logout failed: ' + error.message);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white  z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-[#60a09b]">
          Jobsy
        </Link>

        <div className="flex items-center space-x-4">
          <button
            onClick={handleLogout}
            className="py-2 px-4 rounded-full bg-[#60a09b] hover:bg-[#d0c6de] text-white font-medium transition"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}