import styles from './styles.module.scss'
import { Pagination } from '../Pagination';
import { MoviesList } from '../MoviesList';
import { useEffect, useState } from 'react';
import { api } from '../../Services/api';
import { useMovies } from '../../Hooks/useMovies';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

export const ListMoviesHome = () => {
  const [movies, setMovie] = useState<Movie[]>([])
  const [pagination, setPagination] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [loadingMovies, setLoadingMovies] = useState(false)
  const { selectedGenres } = useMovies()

  useEffect(() => {
    async function callMovies() {
      setLoadingMovies(true);
      const response = await api.get(`discover/movie?language=pt-BR&sort_by=popularity.desc&page=${pagination}&with_genres=${selectedGenres.map((e) => e.id).join(',')}`);
      setMovie(response.data.results);
      setLoadingMovies(false);
      response.data.total_pages > 500 ? setTotalPages(500) : setTotalPages(response.data.total_pages);
    }
    callMovies()
  }, [pagination, selectedGenres])

  useEffect(() => {
    setPagination(1)
  }, [selectedGenres])


  return (
    <section className={styles.ListMoviesSection}>
      <div className="container">
        <MoviesList loading={loadingMovies} movies={movies} />
        <Pagination totalPages={totalPages} currentPage={pagination} setPagination={setPagination} />
      </div>
    </section>
  );
};
