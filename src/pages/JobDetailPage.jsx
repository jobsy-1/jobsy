// src/pages/JobDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
// Decide later if Header/Footer are needed on this page, but polishing current structure:
// import Header from '../components/Header';
// import Footer from '../components/Footer';


function JobDetailPage() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function getJobDetail() {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('id', jobId)
        .single();

      if (error) {
        console.error('Error fetching job details:', error);
        setError('Could not load job details.');
        setJob(null);
      } else {
        setJob(data);
        console.log('Job details fetched:', data);
      }
      setLoading(false);
    }

    if (jobId) {
       getJobDetail();
    } else {
       setError('No job ID provided.');
       setLoading(false);
    }

  }, [jobId]);


  // --- Render Logic (Polished Error/Not Found states) ---
   if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#A8E6CE] to-[#FFDEAD] text-gray-800 text-lg font-semibold">
        Loading Job Details...
      </div>
    );
  }

  if (error || !job) { // Combined error and job not found states for cleaner rendering
     const message = error || 'Job not found.';
     return (
         <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#A8E6CE] to-[#FFDEAD] text-center text-gray-800 p-6"> {/* Themed background */}
              <p className="text-xl font-semibold text-red-600 mb-6">{message}</p> {/* Styled message */}
              <button
                  onClick={() => navigate('/app')}
                  className="py-2 px-6 border border-transparent rounded-full shadow-lg text-base font-medium text-white bg-gray-600 hover:bg-gray-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" // Simple styled button
              >
                  Go Back to Jobs
              </button>
         </div>
     );
  }


  // If job data is loaded successfully, display it!
  return (
    // Main container - Using background from global body, adding padding bottom for fixed apply button
    <div className="flex flex-col items-center"> {/* Added padding bottom equal to fixed button height */}
       {/* Optional: Add Header here if you want */}
       {/* <Header /> */}

       {/* Main content area - Centered, max-width, padding */}
       <main className="flex-grow  container  max-w-4xl mt-8 "> {/* Centered content, wider max-width, vertical margins */}

          {/* Back Button - Styled as an arrow */}
          <button
              onClick={() => navigate('/app')}
              className="flex items-center mb-6 text-[#C06C84] hover:text-[#6C5B7B] transition duration-200 ease-in-out focus:outline-none" // Themed color, hover effect, no button styling
          >
              <span className="text-2xl mr-2">←</span> {/* Arrow icon */}
              <span className="text-lg font-semibold">Back to Jobs</span> {/* Text label */}
          </button>

          {/* Job Details Container - Clean & Modern */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"> {/* Clean background, more rounded, larger/softer shadow, subtle border */}
             {/* Display the job image if it exists */}
             <div className=' flex row'>

             {job.image_url && (
               <img
               src={job.image_url}
               alt={`Image for ${job.title}`}
               className="w-40 h-40 object-cover rounded-xl mb-8 shadow-md" // Increased height, more rounded, larger bottom margin, added shadow
               />
              )}

             {/* Job Title */}
             <h1 className="text-4xl font-bold mb-4 text-[#355C7D] leading-tight"> {/* Larger, bolder title, reduced bottom margin, themed color, tighter line height */}
                 {job.title}
             </h1>
            </div>

             {/* Location and Budget - Improved layout and styling */}
             {(job.location || job.budget) && (
                  <div className="flex flex-wrap items-center text-gray-700 text-lg mb-6 space-x-6"> {/* Increased text size, vertical space, slightly darker text */}
                      {job.location && (
                           <span className="flex items-center">📍 <span className="ml-2">{job.location}</span></span>
                      )}
                       {job.budget && (
                          <span className="flex items-center px-4 py-1 rounded-full text-base font-bold bg-[#A8E6CE] text-gray-800 shadow-sm"> {/* Themed budget chip (pastel blue), larger padding, bolder text, themed text color */}
                             💰 <span className="ml-2">{job.budget}</span> 
                          </span>
                       )}
                  </div>
              )}

             {/* Job Description - Polished */}
             <p className="text-gray-800 text-base mb-8 leading-relaxed"> {/* Standard text color, base font size, increased bottom margin, good line height */}
                 {job.description}
             </p>

             {/* Add other details if needed */}
             {/* <p className="text-sm text-gray-500 mb-4">Posted on: {new Date(job.created_at).toLocaleDateString()}</p> */}

          </div>

       {/* --- Fixed Gradient Apply Button --- */}
       {/* Add padding bottom to the main container div equal to this fixed area's height */}
       <div className="fixed bottom-0 left-0 w-full p-4 text-center shadow-xl z-20"> {/* Fixed position, bottom, full width, padding, GRADIENT background, higher z-index */}
           <button
              // onClick={() => handleApply(job.id)} // Add click handler when implementing apply logic
              className="w-full max-w-sm py-3 px-8 border border-[#C06C84] rounded-full text-lg font-bold shadow-md bg-white text-[#C06C84] hover:bg-gray-100 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white" // White button with themed text color, centered with max-width
           >
              Apply for this Job!
           </button>
       </div>
       {/* --- End Fixed Apply Button --- */}

       </main>

       {/* Optional: Add Footer here if you want */}
       {/* <Footer /> */}



    </div>
  );
}

export default JobDetailPage;