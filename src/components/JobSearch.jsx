// src/components/JobSearch.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './JobSearch.css'; // שמור את העיצוב הקיים

const JobSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const API_ID = '51206c69';
      const API_KEY = '49926983cdd3b7de367c20914dff389e';
      // השתמש בקוד מדינה הנתמך על ידי Adzuna, לדוגמה 'us'
      const country = 'us';
      const endpoint = `https://api.adzuna.com/v1/api/jobs/${country}/search/1`;

      const params = {
        app_id: API_ID,
        app_key: API_KEY,
        results_per_page: 10,
        what: keyword,
        where: location,
      };

      const response = await axios.get(endpoint, { params });
      setJobs(response.data.results);
    } catch (err) {
      console.error(err);
      setError('An error occurred while searching for jobs.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="job-search">
      <h2>Job Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Keyword (e.g. React)"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location (e.g. Tel Aviv)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <a href={job.redirect_url} target="_blank" rel="noopener noreferrer">
              {job.title} - {job.location.display_name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobSearch;
