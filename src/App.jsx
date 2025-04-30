import { useState, useEffect } from 'react'
import './App.css'
import { supabase } from './supabaseClient'; // Import our supabase client
import Auth from './components/Auth';

import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import AddJobPage from './pages/AddJobPage'; // We will create this file next!
import JobDetailPage from './pages/JobDetailPage';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [count, setCount] = useState(0)
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    // Function to fetch session and set listener
    const handleAuthStateChange = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false); // Set loading to false after initial check

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
      });

      return () => subscription.unsubscribe(); // Cleanup
    };

    handleAuthStateChange();

  }, []);

  if (loading) {
    return <div>Loading...</div>; // Or a nice Jobsy loading animation!
  }

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth Routes - Redirect if already logged in */}
        <Route
          path="/login"
          element={!session ? <LoginPage /> : <Navigate to="/app" />} // If session exists, go to app
        />
        <Route
          path="/signup"
          element={!session ? <SignupPage /> : <Navigate to="/app" />} // If session exists, go to app
        />

        {/* Protected Route - Requires session */}
        <Route
          path="/app"
          element={
            <ProtectedRoute session={session}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route // Add the new route for adding jobs
           path="/add-job"
           element={
             <ProtectedRoute session={session}> {/* Protect this route too! */}
               <AddJobPage /> {/* This is the component we create next */}
             </ProtectedRoute>
           }
         />

        <Route
          path="/jobs/:jobId" // <-- Defines a route that matches /jobs/ followed by anything (captured as jobId)
          element={
            <ProtectedRoute session={session}> {/* Protect this route too! */}
               <JobDetailPage /> {/* This is the component we create next */}
            </ProtectedRoute>
           }
         />

        {/* Add a catch-all for 404 maybe later */}
      </Routes>
    </>
  );
}

export default App
