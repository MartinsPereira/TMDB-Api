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
  const [totalPages, setTotalPages] = useState(500)
  const [pagination, setPagination] = useState(1)
  const [loadingMovies, setLoadingMovies] = useState(false)
  const { selectedGenres } = useMovies()

  useEffect(() => {
    const genresLocal = localStorage.getItem('currentPageHome')
    if (genresLocal) {
      if (totalPages < JSON.parse(genresLocal)) {
        setPagination(1)
      } else {
        setPagination(JSON.parse(genresLocal))
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('currentPageHome', JSON.stringify(pagination))
  }, [pagination])

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
    if (totalPages < pagination) {
      setPagination(1)
    }
  }, [selectedGenres, totalPages])



  return (
    <section className={styles.ListMoviesSection}>
      <div className="container">
        <MoviesList loading={loadingMovies} movies={movies} />
        <Pagination totalPages={totalPages} currentPage={pagination} setPagination={setPagination} />
      </div>
    </section>
  );
};
