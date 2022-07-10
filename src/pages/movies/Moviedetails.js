import React, { useEffect, useState } from 'react';
import styles from 'styles/Moviedetails.module.css';
import { useParams } from 'react-router-dom';
import { useContextValue } from 'context/MainContext';

export const Moviedetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const { BASE_IMG_URL, API_KEY } = useContextValue();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(data => setMovie(data));
  }, []);

  return (
    <div className={styles.detailContainer}>
      <img src={BASE_IMG_URL + movie.poster_path} />
    </div>
  );
};
