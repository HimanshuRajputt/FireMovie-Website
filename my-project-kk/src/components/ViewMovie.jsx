import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import FirebaseContext from "../ContextApi/FirebaseConfig";
import "../styles/ViewMovie.css";

export const ViewMovie = () => {
  const { id } = useParams();
  const { findMovie, movie } = useContext(FirebaseContext);

  useEffect(() => {
    if (!movie.id) {
      findMovie(id);
    }
  }, [id, movie, findMovie]);

  return (
    <div className="single-movie-container">
      {movie && Object.keys(movie).length > 0 ? (
        <div className="single-movie-details">
          <img className="single-movie-URL" src={movie.poster} alt="" />
          <h2 className="single-movie-title">{movie.movieName}</h2>
          <p className="single-movie-description">{movie.description}</p>
          <strong className="single-movie-year">
            Release Year: {movie.year}
          </strong>
        </div>
      ) : (
        <p className="single-loading-message">Loading movie details...</p>
      )}
    </div>
  );
};
