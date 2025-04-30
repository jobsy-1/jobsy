// src/components/JobCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


// We'll receive the job data as a prop
function JobCard({ job }) {
  const navigate = useNavigate(); // Initialize navigate hook
  // Placeholder pastel colors - make sure these are defined in your tailwind.config.js!
  const pastelColors = {
    pink: 'bg-pastel-pink', // For Apply button
    pinkHover: 'hover:bg-pastel-pink-dark',
    green: 'text-pastel-green', // For title/text
    purple: 'bg-pastel-purple', // For More Info button
    purpleHover: 'hover:bg-pastel-purple-dark',
    yellow: 'bg-pastel-yellow', // Maybe for budget chip?
    blue: 'bg-pastel-blue', // Maybe for card background or accents
  };

  // Function to handle "More Info" click
  const handleMoreInfoClick = () => {
    // Navigate to a specific route for this job's details
    // We'll use a route like /jobs/YOUR_JOB_ID
    navigate(`/jobs/${job.id}`);
  };  

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col h-full "> {/* Card container with rounded corners and border */}
      {/* Job Image/Thumbnail */}
      {job.image_url && (
        <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden"> {/* Container for image */}
          <img
            src={job.image_url}
            alt={`Image for job: ${job.title}`}
            className="absolute inset-0 w-full h-full object-cover" // Cover the container
          />
           {/* Optional: Add an overlay or gradient */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      )}
       {/* If no image, maybe a placeholder div */}
       {!job.image_url && (
           <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden bg-pastel-yellow flex items-center justify-center">
               <span className="text-pastel-purple text-lg font-semibold">No Image</span>
           </div>
       )}

      {/* Job Details */}
      <h3 className={`text-xl font-semibold mb-2 ${pastelColors.green}`}>{job.title}</h3>
      <p className="text-gray-700 text-sm mb-4 line-clamp-3">{job.description}</p> {/* Use line-clamp if you have it setup */}

      {/* Optional Info */}
      {(job.location || job.budget) && (
          <div className="flex items-center text-gray-600 text-sm mb-4 space-x-4">
              {job.location && (
                   <span className="flex items-center">
                      {/* Placeholder icon - replace with actual icon if you have one */}
                      📍 <span className="ml-1">{job.location}</span>
                   </span>
              )}
               {job.budget && (
                  <span className={`flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${pastelColors.yellow} text-gray-800`}>
                     {/* Placeholder icon */}
                     💰 <span className="ml-1">{job.budget}</span> {/* Display budget */}
                  </span>
               )}
          </div>
      )}


      {/* The Awesome Buttons! */}
      <div className="flex space-x-4 mt-auto"> {/* mt-auto pushes buttons to the bottom */}
        <button
          // onClick={() => handleApply(job.id)} // We'll add this later!
          className={`flex-1 py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white ${pastelColors.pink} ${pastelColors.pinkHover} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pastel-pink transition duration-200 ease-in-out`} // Pastel, rounded, vibrant button!
        >
          Apply
        </button>
        <button
          onClick={handleMoreInfoClick} // We'll add this later!
          className={`flex-1 py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white ${pastelColors.purple} ${pastelColors.purpleHover} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pastel-purple transition duration-200 ease-in-out`} // Another pastel, rounded, vibrant button!
        >
          More Info
        </button>
      </div>
    </div>
  );
}

export default JobCard;