import { useState } from 'react';
import './App.scss'
import { Header } from './Components/Header';
import { Introduction } from './Components/Introduction';
import { ListMoviesHome } from './Components/ListMoviesHome';
import { MoviesProvider } from './Hooks/useMovies';

export function App() {
  const [selectedGenre, setSelectedGenre] = useState('')

  return (
    <MoviesProvider>
      <Header />
      <Introduction />
      <ListMoviesHome />
    </MoviesProvider>
  );
}
