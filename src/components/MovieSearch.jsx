import React, { useState } from 'react';
import axios from 'axios';
import './MovieSearch.css';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movieData, setMovieData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://www.omdbapi.com/', {
        params: {
          t: searchTerm,
          apikey: 'dfce653d'
        }
      });
      setMovieData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="movie-search">
      <h1>Movie Search</h1>
      <div className="search-container">
        <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      {movieData && (
        <div className="movie-container">
          <h2>{movieData.Title}</h2>
          <img src={movieData.Poster} alt={movieData.Title} />
          <p>{movieData.Plot}</p>
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
