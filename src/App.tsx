import './App.scss'
import { Header } from './Components/Header';
import { Introduction } from './Components/Introduction';
import { ListMoviesHome } from './Components/ListMoviesHome';
import { Movie } from './Components/Movie';

export function App() {
  return (
    <>
      <Header />
      <Introduction />
      <ListMoviesHome />
    </>
  );
}
