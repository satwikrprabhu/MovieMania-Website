import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Movie.css'
const OMDB_API_KEY = 'dfce653d';

function Movie() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${searchTerm}&plot=full`);
      setMovie(response.data);
      setError(null);
    } catch (error) {
      setMovie(null);
      setError('Movie not found!');
    }
  };

  const handleSuggestions = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${searchTerm}`);
      if (response.data && response.data.Search) {
        setSuggestions(response.data.Search.map((result) => result.Title));
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error(error);
      setSuggestions([]);
    }
  };

  useEffect(() => {
    if (searchTerm && searchTerm.length > 2) {
      handleSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} autoComplete="off" className='MovieInput'/>
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion) => (
            <li key={suggestion} onClick={() => setSearchTerm(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      {movie && (
        <div className='MovieDiv'>
          <h2 className='MovieHead'>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <p className='MoviePara'><span className='MovieHeadings'>Year:</span> {movie.Year}</p>
          <p className='MoviePara'><span className='MovieHeadings'>Director:</span> {movie.Director}</p>
          <p className='MoviePara'><span className='MovieHeadings'>Plot:</span> {movie.Plot}</p>
          <p className='MoviePara'><span className='MovieHeadings'>Actors:</span> {movie.Actors}</p>
          <p className='MoviePara'><span className='MovieHeadings'>Genre:</span> {movie.Genre}</p>
          <p className='MoviePara'><span className='MovieHeadings'>Runtime:</span> {movie.Runtime}</p>
          <p className='MoviePara'><span className='MovieHeadings'>Language:</span> {movie.Language}</p>
          <p className='MoviePara'><span className='MovieHeadings'>Country:</span> {movie.Country}</p>
        </div>
      )}
    </div>
  );
}

export default Movie;
