import { Link } from 'react-router-dom';

import Footer from '../components/Footer';

import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient'; // Import our supabase client
// We'll import Header, Footer, and a Job component soon!
import Header from '../components/Header';
// import Footer from '../components/Footer';
import JobCard from '../components/JobCard'; // Import the JobCard component

function Dashboard() {
    const [jobs, setJobs] = useState([]); // State to hold the job data
    const [loading, setLoading] = useState(true); // Loading state
  
    useEffect(() => {
      let ignore = false; // Flag to prevent state update on unmounted component
  
      async function getJobs() {
        setLoading(true);
        // Fetch data from the 'jobs' table
        const { data, error } = await supabase
          .from('jobs') // The table name
          .select('*'); // Select all columns. We could select specific columns if needed!
  
        if (error) {
          console.error('Error fetching jobs:', error);
          // Handle error, maybe show an error message to the user
        } else {
          if (!ignore) { // Only update state if the component is still mounted
            setJobs(data || []); // Set the fetched jobs data
            console.log('Jobs fetched successfully:', data); // Log fetched data
          }
        }
        setLoading(false);
      }
  
      getJobs();
  
      // Cleanup function
      return () => {
        ignore = true; // Set flag to true on unmount
      };
    }, []); // Empty dependency array means this runs once on mount
  
    // --- Render Logic ---
    if (loading) {
      return <div className="flex items-center justify-center min-h-screen">Loading Jobs...</div>; // Simple loading indicator
    }
  
    if (jobs.length === 0 && !loading) {
       return (
         <div className="flex items-center justify-center min-h-screen text-center text-gray-600">
           <p>No jobs posted yet! Be the first to add one!</p>
         </div>
       );
     }
  
  
    return (
      <div className="flex flex-col min-h-screen bg-pastel-yellow"> {/* Dashboard container */}
        {/* Header*/}
        <Header />
  
        <main className="flex-grow p-4"> {/* Main content area, takes available space */}
          <h2 className="text-2xl font-bold mb-6 text-center text-pastel-purple">Available Jobs</h2>
  
          {/* This is where our job grid will go! */}
          {/* For now, let's just list the titles to see if data fetching works */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Example grid layout with Tailwind */}
            {jobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </main>
  
        {/* Footer */}
        <Footer />
      </div>
    );
  }
  
  export default Dashboard;