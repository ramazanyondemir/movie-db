import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { useContextValue } from '../context/MainContext';
import styles from '../styles/Card.module.css';

export const Card = ({ movie }) => {
  const { BASE_IMG_URL } = useContextValue();
  let generateUrl = generatePath(':id/:name', {
    id: movie.id,
    name: movie.title.replace(/\W+/g, '-'),
  });
  return (
    <Link
      to={generateUrl}
      onClick={() => handleClick(movie)}
      className={styles.Card}
      key={movie.id}
    >
      <img src={BASE_IMG_URL + movie.poster_path} className={styles.movieImg} />
      <div className={styles.movieTitle}>
        <h5>{movie.title}</h5>
      </div>
    </Link>
  );
};
