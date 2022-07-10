import React, { useState, useRef, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { Card } from './Card';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useContextValue } from '../context/MainContext';
import styles from '../styles/Slider.module.css';

export const Slider = () => {
  const { movies } = useContextValue();
  const [next, setNext] = useState(true);
  const [prev, setPrev] = useState(false);

  const handleClickNext = () => {
    console.log(sliderRef.current.offsetWidth);
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth + 20; // offsetwidth + gap
  };

  const handleClickPrev = () => {
    console.log(sliderRef.current.offsetWidth);
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth + 20; // offsetwidth + gap
  };

  const sliderRef = useRef();

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.addEventListener('scroll', () => {
        const isEnd =
          sliderRef.current.scrollLeft + sliderRef.current.offsetWidth ===
          sliderRef.current.scrollWidth;
        const isBegin = sliderRef.current.scrollLeft === 0; // boolean
        setNext(!isEnd);
        setPrev(!isBegin);
      });
    }
  }, [sliderRef]);

  return (
    <div className={styles.sliderContainer}>
      {prev && (
        <button className={styles.prev} onClick={handleClickPrev}>
          <FiChevronLeft size={34} />
        </button>
      )}
      {next && (
        <button className={styles.next} onClick={handleClickNext}>
          <FiChevronRight size={34} />
        </button>
      )}
      <ScrollContainer className={styles.sliderWrapper} innerRef={sliderRef}>
        {movies.map(movie => (
          <Card key={movie.id} movie={movie} />
        ))}
      </ScrollContainer>
    </div>
  );
};
