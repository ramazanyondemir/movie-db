import React, { useEffect, useState } from 'react';
import styles from 'styles/Moviedetails.module.css';
import { Link, useParams } from 'react-router-dom';
import { useContextValue } from 'context/MainContext';

export const Moviedetails = () => {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);
  const { id } = useParams();
  const { BASE_IMG_URL, API_KEY } = useContextValue();

  useEffect(() => {
    // fetch -> movie
    (async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      const data = await response.json();
      setMovie(data);
    })();
    // fetch -> cast & crew
    (async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
      );
      const data = await response.json();
      console.log(data);
      setCast(data.cast);
    })();
  }, []);

  const castProfileImgPath = cast => {
    if (cast.profile_path) {
      return BASE_IMG_URL + cast.profile_path;
    } else {
      return 'https://via.placeholder.com/210x300';
    }
  };

  return (
    <div className={styles.container}>
      {movie && (
        <>
          <div className={styles.backBtn}>
            <Link to={'/'}>GO BACK</Link>
          </div>

          {/* line */}

          <div className={styles.line}></div>

          <div className={styles.movie}>
            <div className={styles.posterWrapper}>
              <span className={styles.vote}>
                <h3>{movie.vote_average}</h3>
              </span>
              <img
                src={BASE_IMG_URL + movie.poster_path}
                className={styles.poster}
              />
            </div>

            <div className={styles.movieDetail}>
              <div className={styles.detailHeader}>
                <h2 className={styles.movieTitle}>{movie.title}</h2>
                {movie.genres.map(g => (
                  <span key={g.id} className={styles.genre}>
                    {g.name}
                  </span>
                ))}
              </div>
              <p className={styles.movieOverview}>{movie.overview}</p>
            </div>
          </div>
          {/* line */}
          <div className={styles.line}></div>

          <div className={styles.cast}>
            {cast &&
              cast.map(p => (
                <div key={p.id} className={styles.castPosterWrapper}>
                  <img
                    src={castProfileImgPath(p)}
                    className={styles.castPoster}
                  />
                  <div className={styles.castDetail}>
                    <h4 className={styles.name}>{p.name}</h4>
                    {p.character && (
                      <h5 className={styles.character}>{p.character}</h5>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};
