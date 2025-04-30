import { Link } from 'react-router-dom';

// src/pages/SignupPage.jsx
import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; // Make sure the path is correct relative to this file
import { useNavigate } from 'react-router-dom'; // Can use navigate if needed, but router handles redirect

function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   // const navigate = useNavigate(); // Not strictly needed

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      // Supabase signUp function
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) throw error;

      // If signup is successful and email confirmation is OFF, Supabase logs the user in
      // and App.jsx useEffect will catch it and redirect.
      // If email confirmation is ON, the user needs to check their email.
      console.log('Signup successful. Check email if confirmation is required.');
      alert('Check your email for the confirmation link!'); // Or redirect to a "Check Email" page

      // Optionally, if email confirmation is off, you could explicitly navigate
      // navigate('/app'); // But the App.jsx redirect is already handling this

    } catch (error) {
      console.error('Signup Error:', error);
      alert(error.error_description || error.message); // Show error to the user
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pastel-green p-4"> {/* Example Tailwind background */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center text-pastel-purple">Jobsy Sign Up</h1>

        <form onSubmit={handleSignup} className="flex flex-col space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pastel-pink focus:border-pastel-pink"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pastel-pink focus:border-pastel-pink"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pastel-purple hover:bg-pastel-purple-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pastel-purple"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <a href="/login" className="font-medium text-pastel-green hover:text-pastel-green-dark">Login</a> {/* Link to Login */}
        </p>

      </div>
    </div>
  );
}

export default SignupPage;
  