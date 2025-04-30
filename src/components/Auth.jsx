// src/components/Auth.jsx
import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; // Import our supabase client

function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) throw error;
      alert('Logged in successfully!'); // Simple success feedback

    } catch (error) {
      alert(error.error_description || error.message); // Show error to the user
    } finally {
      setLoading(false);
    }
  };

  // We can add a handleSignup later!

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pastel-blue p-4"> {/* Example Tailwind background */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center text-pastel-purple">Jobsy Login</h1>

        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pastel-green focus:border-pastel-green"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pastel-green focus:border-pastel-green"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pastel-pink hover:bg-pastel-pink-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pastel-pink"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>

        {/* We can add a link/button here later to toggle to a signup form */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account? {/** Add link/button here */}
        </p>

      </div>
    </div>
  );
}

export default Auth;