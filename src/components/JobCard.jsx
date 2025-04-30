// src/components/JobCard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { supabase } from '../supabaseClient'; // Assuming you'll add Apply logic later

// We'll receive the job data as a prop
function JobCard({ job }) {
  const navigate = useNavigate();
  // No pastelColors object in this version as we are hardcoding hex values directly in classes


  // Function to handle "More Info" click
  const handleMoreInfoClick = () => {
    navigate(`/jobs/${job.id}`);
  };

  // Placeholder for Apply button logic (from previous discussion)
  // const [isApplying, setIsApplying] = useState(false);
  // const handleApplyClick = async () => { /* ... apply logic using supabase ... */ };


  return (
    // Enhanced Card Container - Using arbitrary colors
    // Added text-left here to ensure all text inside aligns left, though often default
    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col h-full border border-transparent hover:border-[#A8E6CE] transition duration-300 ease-in-out transform hover:-translate-y-1 text-left"> {/* Increased padding, more rounded, larger shadow, subtle hover effect, ENSURED text-left */}
      {/* Job Image/Thumbnail */}
      {job.image_url && (
        <div className="relative w-full h-48 mb-5 rounded-lg overflow-hidden shadow-md"> {/* Increased height, more rounded corners, added shadow */}
          <img
            src={job.image_url}
            alt={`Image for job: ${job.title}`}
            className="absolute inset-0 w-full h-full object-cover filter brightness-90" // Added brightness filter for a softer look
          />
           {/* Optional: Add an overlay or gradient */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div> {/* Slightly darker gradient */}
        </div>
      )}
       {/* If no image, use a themed placeholder - Center the text WITHIN this div */}
       {!job.image_url && (
           <div className="relative w-full h-48 mb-5 rounded-lg overflow-hidden bg-[#FFDEAD] flex items-center justify-center shadow-md"> {/* Hardcoded pastel yellow, flex items-center justify-center centers the content */}
               <span className="text-[#C06C84] text-lg font-bold text-center">No Image</span> {/* Hardcoded pastel purple, explicitly centered text */}
           </div>
       )}

      {/* Job Details */}
      {/* Increased bottom margin for better separation */}
      <h3 className="text-xl font-bold mb-3 text-[#355C7D] leading-tight"> {/* Hardcoded pastel green, slightly increased bottom margin, tighter line height for title */}
        {job.title}
      </h3>
      <p className="text-gray-600 text-sm mb-5 line-clamp-3 leading-relaxed"> {/* Slightly softer text color, better line height, increased bottom margin */}
          {job.description}
      </p>

      {/* Optional Info - Improved Layout and Styling */}
      {/* Increased bottom margin for better separation */}
      {(job.location || job.budget) && (
          <div className="flex flex-wrap items-center text-gray-600 text-sm mb-5 space-x-4"> {/* Use flex-wrap for smaller screens, increased bottom margin */}
              {job.location && (
                   <span className="flex items-center text-gray-700"> {/* Slightly darker text for location */}
                      {/* Placeholder icon - replace with actual icon if you have one */}
                      📍 <span className="ml-1">{job.location}</span>
                   </span>
              )}
               {job.budget && (
                  <span className="flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#6cc073] text-white shadow-sm"> {/* Hardcoded pastel green background, used 6cc073 from your snippet */}
                     {/* Placeholder icon */}
                     💰 <span className="ml-1">{job.budget}</span> {/* Display budget */}
                  </span>
               )}
          </div>
      )}


      {/* The Awesome Buttons! - Refined */}
      {/* Added padding top and border for separation */}
      <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-200">
        {/* Apply Button */}
        <button
          // onClick={handleApplyClick} // Add click handler when implementing apply logic
          className="flex-1 py-3 px-4 border border-transparent rounded-full text-sm font-bold shadow-md bg-[#60a09b] text-white hover:bg-[#4a807a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#60a09b] transition duration-200 ease-in-out" // Hardcoded pastel colors
          // disabled={isApplying} // Disable logic when implementing apply
        >
          {/* {isApplying ? 'Applying...' : 'Apply'} */} Apply {/* Keep text simple for now */}
        </button>
        {/* More Info Button */}
        <button
          onClick={handleMoreInfoClick} // Already functional
          className="flex-1 py-3 px-4 border border-transparent rounded-full text-sm font-bold shadow-md bg-[#C06C84] text-white hover:bg-[#6C5B7B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C06C84] transition duration-200 ease-in-out" // Hardcoded pastel purple shades
        >
          More Info
        </button>
      </div>
    </div>
  );
}

export default JobCard;