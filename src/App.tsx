import './App.scss'
import { Header } from './Components/Header';
import { Introduction } from './Components/Introduction';
import { MoviesProvider } from './Hooks/useMovies';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { Movie } from './Components/Movie';

export function App() {

  return (
    <MoviesProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Introduction />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
        </Routes>
      </BrowserRouter>
    </MoviesProvider>
  );
}
