import React from 'react';
import  movies  from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => <div className="movies">
          {movie.title}
          <br />
          {movie.time}
          <br />
          {movie.genres.join(", ")}
          <br />
          {movie.metascore}
          </div>)}
    </div>
  );
};

export default Movies;
