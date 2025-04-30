// src/pages/JobDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useParams to get the ID, useNavigate to go back
import { supabase } from '../supabaseClient';
// Maybe import Header and Footer if you want them on this page too
// import Header from '../components/Header';
// import Footer from '../components/Footer';


function JobDetailPage() {
  const { jobId } = useParams(); // Get the jobId from the URL parameters!
  const navigate = useNavigate(); // To potentially navigate back
  const [job, setJob] = useState(null); // State to hold the specific job data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function getJobDetail() {
      setLoading(true);
      setError(null); // Clear previous errors

      // Fetch the job from the 'jobs' table using its ID
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('id', jobId) // Filter by the jobId from the URL
        .single(); // Use .single() because we expect only one job with this ID

      if (error) {
        console.error('Error fetching job details:', error);
        setError('Could not load job details.'); // Set error state
        setJob(null); // Clear job state on error
      } else {
        setJob(data); // Set the fetched job data
        console.log('Job details fetched:', data);
      }
      setLoading(false);
    }

    if (jobId) { // Only fetch if we have a jobId from the URL
       getJobDetail();
    } else {
       setError('No job ID provided.'); // Handle case where jobId is missing (shouldn't happen with our route)
       setLoading(false);
    }

  }, [jobId]); // Re-run effect if jobId changes (though in this case it's static for the page)


  // --- Render Logic ---
  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading Job Details...</div>;
  }

  if (error) {
     return (
         <div className="flex flex-col items-center justify-center min-h-screen text-center text-red-600">
             <p>{error}</p>
             <button
                 onClick={() => navigate('/app')} // Button to go back to the dashboard
                 className="mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-500 hover:bg-gray-600"
             >
                 Go Back to Jobs
             </button>
         </div>
     );
  }

  if (!job) {
       // This case might be hit if error occurred or if single() returns null
       return (
           <div className="flex flex-col items-center justify-center min-h-screen text-center text-gray-600">
               <p>Job not found.</p>
                <button
                  onClick={() => navigate('/app')}
                  className="mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-500 hover:bg-gray-600"
              >
                  Go Back to Jobs
              </button>
           </div>
       );
   }


  // If job data is loaded successfully, display it!
  return (
    <div className="flex flex-col min-h-screen bg-pastel-blue"> {/* Example pastel background */}
       {/* Optional: Add Header here */}
       {/* <Header /> */}

       <main className="flex-grow p-4 container mx-auto max-w-2xl"> {/* Center content */}
          <button
              onClick={() => navigate('/app')} // Button to go back to the dashboard
              className="mb-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pastel-purple hover:bg-pastel-purple-dark rounded-full" // Use Jobsy button style
          >
              ← Back to Jobs
          </button>

          <div className="bg-white p-6 rounded-lg shadow-md">
             {/* Display the job image if it exists */}
             {job.image_url && (
                <img src={job.image_url} alt={`Image for ${job.title}`} className="w-full h-64 object-cover rounded-md mb-6" />
             )}

             <h1 className="text-3xl font-bold mb-4 text-pastel-green">{job.title}</h1>

             {(job.location || job.budget) && (
                  <div className="flex items-center text-gray-700 text-md mb-4 space-x-6">
                      {job.location && (
                           <span className="flex items-center">📍 <span className="ml-1">{job.location}</span></span>
                      )}
                       {job.budget && (
                          <span className={`flex items-center px-3 py-1 rounded-full text-sm font-medium text-gray-800`}>
                             💰 <span className="ml-1">{job.budget}</span>
                          </span>
                       )}
                  </div>
              )}

             <p className="text-gray-800 text-lg mb-6">{job.description}</p>

             {/* Add other details if needed */}
             {/* <p className="text-sm text-gray-500">Posted on: {new Date(job.created_at).toLocaleDateString()}</p> */}
             {/* Display posted_by? Might need to fetch user details if we want more than just the ID */}
          </div>

          {/* Maybe add the "Apply" button again here? */}
           <div className="mt-6 text-center">
               <button
                 // onClick={() => handleApply(job.id)} // Apply button placeholder
                 className={`py-3 px-8 border border-transparent rounded-full shadow-sm text-lg font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pastel-pink transition duration-200 ease-in-out`}
               >
                 Apply for this Job!
               </button>
           </div>

       </main>

       {/* Optional: Add Footer here */}
       {/* <Footer /> */}
    </div>
  );
}

export default JobDetailPage;