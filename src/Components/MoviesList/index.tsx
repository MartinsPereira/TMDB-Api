import styles from './styles.module.scss'
import { InterfaceType, JsxAttribute } from 'typescript';

interface Movie {
  id: number,
  title: string,
  poster_path: string,
  release_date: string,
}

interface MoviesProps {
  movies: Movie[];
}

export const MoviesList = ({ movies }: MoviesProps) => {
  return (
    <ul className={styles.listMovies}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <a href="#">
            <img src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + movie.poster_path} alt="" />
            <h5>{movie.title}</h5>
            <span>{movie.release_date}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
