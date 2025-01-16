import axios from "axios";
import { useEffect, useState, createContext } from "react";

const FirebaseContext = createContext();

// eslint-disable-next-line react/prop-types
export const FirebaseConfig = ({ children }) => {
  const [editingMovie, setEditingMovie] = useState(null);
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState({});
  const apiURL =
    "https://firemovieapp-ea176-default-rtdb.firebaseio.com/Movies.json";

  // Fetch data
  const fetchData = async () => {
    try {
      const response = await axios.get(apiURL);
      const fetchedData = response.data;
      const formattedData = fetchedData
        ? Object.entries(fetchedData).map(([id, value]) => ({
            id,
            ...value,
          }))
        : [];
      console.log(formattedData);
      setData(formattedData);
    } catch (error) {
      console.log(error);
    }
  };

  // Add Data
  const addData = async (newMovie) => {
    try {
      const response = await axios.post(apiURL, newMovie);
      const newId = response.data.name;
      setData([...data, { id: newId, ...newMovie }]);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Data
  const deleteData = async (id) => {
    try {
      await axios.delete(
        `https://firemovieapp-ea176-default-rtdb.firebaseio.com/Movies/${id}.json`
      );
      setData(data.filter((movie) => movie.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // Find Movie
  const findMovie = async (id) => {
    try {
      const response = await axios.get(
        `https://firemovieapp-ea176-default-rtdb.firebaseio.com/Movies/${id}.json`
      );
      setMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // Edit movie
  const editMovie = async (id, updatedFieldsArray) => {
    try {
      const updatedMovie = updatedFieldsArray[0];
      await axios.put(
        `https://firemovieapp-ea176-default-rtdb.firebaseio.com/Movies/${id}.json`,
        updatedMovie
      );
      const newUpdatedMovies = data.map((movie) =>
        movie.id === id ? updatedMovie : movie
      );
      setData(newUpdatedMovies);
      setEditingMovie(null);
    } catch (error) {
      console.error("Error editing movie:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FirebaseContext.Provider
      value={{
        data,
        movie,
        editMovie,
        editingMovie,
        setEditingMovie,
        fetchData,
        addData,
        deleteData,
        findMovie,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContext;
