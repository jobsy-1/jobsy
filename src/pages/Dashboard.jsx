// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobCard from '../components/JobCard';

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function fetchJobs() {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase.from('jobs').select('*');
      if (!mounted) return;

      if (error) {
        console.error(error);
        setError('Could not fetch jobs.');
        setJobs([]);
      } else {
        setJobs(data || []);
      }
      setLoading(false);
    }

    fetchJobs();
    return () => { mounted = false; };
  }, []);

  return (
    <div className="flex flex-col min-h-screen pt-20 bg ">
      <Header />

      <main className="flex-grow p-4">
        <h2 className="px-2 text-2xl font-bold text-left text-[#8e82b4] mb-6">
          Available Jobs:
        </h2>

        {loading ? (
          <div className="flex items-center justify-center">Loading jobs…</div>
        ) : error ? (
          <div className="flex items-center justify-center text-red-600">
            {error}
          </div>
        ) : jobs.length === 0 ? (
          <div className="flex items-center justify-center text-gray-600">
            No jobs posted yet!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}