import { Cast } from './pages/Cast';
import { Error } from './pages/Error';
import { MovieLayout } from './pages/movies';
import { Moviedetails } from './pages/movies/Moviedetails';
import { Tvshows } from './pages/Tvshows';
import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <NavLink to="/">Movies</NavLink>
        <NavLink to="tv-shows">TV Shows</NavLink>
        <NavLink to="cast">Cast</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<MovieLayout />} />
        <Route path="/movies" element={<MovieLayout />} />
        <Route path="/players" element={<Cast />} />
        <Route path="/:id/:name" element={<Moviedetails />} />
        <Route path="/tv-shows" element={<Tvshows />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
