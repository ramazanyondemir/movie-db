import { createContext, useContext, useState, useEffect } from 'react';

const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [discoverMovies, setDiscoverMovies] = useState([]);
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300/';
  const API_KEY = process.env.REACT_APP_API_TOKEN;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
      });

    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    )
      .then(response => response.json())
      .then(data => {
        setDiscoverMovies(data.results);
      });
  }, []);

  const data = {
    API_KEY,
    BASE_IMG_URL,
    movies,
    setMovies,
    discoverMovies,
  };

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export const useContextValue = () => useContext(MainContext);

export default MainProvider;
