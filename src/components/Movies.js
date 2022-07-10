import React from 'react';
import styles from '../styles/Movies.module.css';
import { useContextValue } from '../context/MainContext';
import { Card } from './Card';

export const Movies = () => {
  const { discoverMovies } = useContextValue();
  return (
    <div className={styles.movies}>
      {/* reverse to not see the same data */}
      {discoverMovies.reverse().map(movie => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
