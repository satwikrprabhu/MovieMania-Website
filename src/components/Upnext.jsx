import React from 'react';
import './Upnext.css'

const movies = [  {    id: 1,    title: "Avengers: Endgame",    posterUrl: "https://m.economictimes.com/thumb/msid-68595193,width-1200,height-900,resizemode-4,imgsize-965088/avengers-endgame.jpg",    releaseYear: 2019  },  {    id: 2,    title: "Joker",    posterUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Joker_%282019_film%29_poster.jpg/220px-Joker_%282019_film%29_poster.jpg",    releaseYear: 2019  },  {    id: 3,    title: "The Lion King",    posterUrl: "https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/5239/875239-v",    releaseYear: 2019  },  {    id: 4,    title: "Lucy",    posterUrl: "https://img.etimg.com/thumb/msid-39408434,width-1200,height-900,imgsize-88901,overlay-etpanache/photo.jpg",    releaseYear: 2019  },];

const Upnext = () => {
  return (
    <div className="up-next-movie-bar">
      <h3 >Up Next</h3>
      <ul className="up-next-movie-list">
        {movies.map(movie => (
          <li key={movie.id}>
            <img src={movie.posterUrl} alt={movie.title} />
            <div className="movie-info">
              <h4>{movie.title}</h4>
              <p>{movie.releaseYear}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Upnext;