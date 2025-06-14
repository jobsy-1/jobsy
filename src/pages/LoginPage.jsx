import { Link } from 'react-router-dom';

// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; // Make sure the path is correct relative to this file
import { useNavigate } from 'react-router-dom'; // We can use navigate for extra control if needed, but router handles redirect here

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const navigate = useNavigate(); // Not strictly needed due to App.jsx redirect logic, but good to know

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) throw error;

      // If login is successful, the onAuthStateChange listener in App.jsx
      // will detect the session and the router will redirect to /app.
      // No explicit navigate() needed here because App.jsx handles it!
      console.log('Login successful, App.jsx useEffect should redirect');

    } catch (error) {
      console.error('Login Error:', error);
      alert(error.error_description || error.message); // Show error to the user
    } finally {
      setLoading(false);
    }
  };

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

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account? <a href="/signup" className="font-medium text-pastel-purple hover:text-pastel-purple-dark">Sign Up</a> {/* Link to Signup */}
        </p>

      </div>
    </div>
  );
}

export default LoginPage;
  