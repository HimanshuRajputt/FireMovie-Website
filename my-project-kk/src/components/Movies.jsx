import { useContext, useEffect, useState } from "react";
import FirebaseContext from "../ContextApi/FirebaseConfig";
import { Link } from "react-router-dom";
import "../styles/Movies.css";

export const Movies = () => {
  const { data, deleteData, editMovie, editingMovie, setEditingMovie } =
    useContext(FirebaseContext);
  //temporary edits for a movie so that we update it accordingly
  const [editedFields, setEditedFields] = useState({});

  useEffect(() => {
    console.log(data);
  }, [data]);

  // Start editing a movie
  const handleEditStart = (movie) => {
    setEditingMovie(movie.id); 
    setEditedFields(movie); 
  };

  // Handle input changes for the form
  const handleInputChange = (field, value) => {
    setEditedFields((prev) => ({ ...prev, [field]: value }));
  };

  // Save the updated movie
  const handleSaveChanges = () => {
    editMovie(editingMovie, [editedFields]);
    setEditingMovie(null); 
    setEditedFields({});
  };

  return (
    <div className="movies-container">
      <h1 className="movies-heading">Movies Collection</h1>
      <div className="movies-grid">
        {data.map((movie) => (
          <div className="movie-card" key={movie.id}>
            {editingMovie === movie.id ? (
              <div className="EditMovieContainer">
                <input
                  className="EditMovie-input"
                  value={editedFields.movieName || ""}
                  placeholder="Name"
                  onChange={(e) =>
                    handleInputChange("movieName", e.target.value)
                  }
                />
                <textarea
                  type="text"
                  className="EditMovie-textarea"
                  value={editedFields.description || ""}
                  placeholder="Description"
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                />
                <input
                  type="text"
                  className="EditMovie-input"
                  value={editedFields.year || ""}
                  placeholder="Year"
                  onChange={(e) => handleInputChange("year", e.target.value)}
                />
                <input
                  type="text"
                  className="EditMovie-input"
                  value={editedFields.poster || ""}
                  placeholder="Poster URL"
                  onChange={(e) => handleInputChange("poster", e.target.value)}
                />
                <button className="save-button" onClick={handleSaveChanges}>
                  ✓
                </button>
                <button
                  className="cancel-button"
                  onClick={() => {
                    setEditingMovie(null);
                    setEditedFields({});
                  }}
                >
                  𐌗
                </button>
              </div>
            ) : (
              <>
                <img
                  src={movie.poster}
                  alt={`${movie.movieName} poster`}
                  className="movie-poster"
                />
                <h2 className="movie-title">{movie.movieName}</h2>
                <p className="movie-description">{movie.description}</p>
                <strong className="movie-year">{movie.year}</strong>
              </>
            )}
            <div className="movie-buttons">
              <Link to={`/Movies/${movie.id}`}>
                <button className="details-button">DETAILS</button>
              </Link>
              <button
                onClick={() => handleEditStart(movie)}
                className="Edit-button"
              >
                EDIT
              </button>
              <button
                className="delete-button"
                onClick={() => deleteData(movie.id)}
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
