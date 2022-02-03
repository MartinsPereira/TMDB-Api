import styles from './styles.module.scss'
import imgDefault from '../../Assets/img/image-default.jpg'
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
  const options = { year: 'numeric', month: 'short', day: 'numeric' }


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
              <img src={movie.poster_path ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}` : imgDefault} alt="" />
              <h5>{movie.title}</h5>
              <span>{movie.release_date ? new Intl.DateTimeFormat('pt-br', { dateStyle: 'medium' }).format(new Date(movie.release_date)) : 'Ainda sem data definida'}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
