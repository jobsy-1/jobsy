// src/pages/AddJobPage.jsx
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom'; // We'll use navigate to go back after submitting

function AddJobPage() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState(''); // For the image URL
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');

  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Insert the new job into the 'jobs' table
      const { data, error } = await supabase
        .from('jobs')
        .insert([
          {
            title: title,
            description: description,
            image_url: imageUrl, // Use the state value
            location: location,
            budget: budget,
            // posted_by is automatically handled by the auth.uid() default! 🎉
          },
        ]);

      if (error) throw error;

      console.log('Job added successfully:', data);
      alert('Your job has been posted!'); // Success feedback

      // Redirect back to the dashboard after successful submission
      navigate('/app');

    } catch (error) {
      console.error('Error adding job:', error);
      alert('Failed to add job: ' + error.message); // Show error to the user
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pastel-green p-4"> {/* Example pastel background */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"> {/* Slightly wider form area */}
        <h1 className="text-2xl font-bold mb-6 text-center text-pastel-purple">Post a New Job</h1>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="title">Job Title</label>
            <input
              id="title"
              type="text"
              placeholder="e.g., Help with my garden"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pastel-pink focus:border-pastel-pink"
              required // Make title required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Tell people about the task..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pastel-pink focus:border-pastel-pink"
              required // Make description required
            />
          </div>
           <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="imageUrl">Image URL (Optional)</label>
            <input
              id="imageUrl"
              type="text"
              placeholder="Link to a picture related to the job"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pastel-pink focus:border-pastel-pink"
            />
          </div>
           <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="location">Location (Optional)</label>
            <input
              id="location"
              type="text"
              placeholder="e.g., Downtown, Remote"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pastel-pink focus:border-pastel-pink"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="budget">Budget (Optional)</label>
            <input
              id="budget"
              type="text"
              placeholder="e.g., $150, Negotiable"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pastel-pink focus:border-pastel-pink"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pastel-purple hover:bg-pastel-purple-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pastel-purple"
            disabled={loading}
          >
            {loading ? 'Posting...' : 'Post Job!'}
          </button>
        </form>

      </div>
    </div>
  );
}

export default AddJobPage;