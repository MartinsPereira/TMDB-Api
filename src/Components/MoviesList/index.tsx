import styles from './styles.module.scss'

interface Movie {
  id: number,
  title: string,
  poster_path: string,
  release_date: string,
}

interface MoviesProps {
  movies: Movie[];
  loading: Boolean,
}

export const MoviesList = ({ movies, loading }: MoviesProps) => {
  return (
    <div className={styles.divMoviesList}>
      {loading &&
        <div className={styles.loading}>
          <span></span>
        </div>
      }
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
    </div>
  );
};
