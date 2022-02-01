import styles from './styles.module.scss'
import { Pagination } from '../Pagination';
import { MoviesList } from '../MoviesList';
import { useEffect, useState } from 'react';
import { api } from '../../Services/api';

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

  useEffect(() => {
    async function callMovies() {
      const response = await api.get(`movie/popular?language=pt-BR&page=${pagination}`)
      setMovie(response.data.results)
      setTotalPages(response.data.total_pages)
    }
    callMovies()
  }, [])


  function handleNextPage() {
    setPagination((number) => number + 1)
  }

  function handlePrevPage() {
    setPagination((number) => number != 0 ? number - 1 : number)
  }

  return (
    <section className={styles.ListMoviesSection}>
      <div className="container">
        <MoviesList movies={movies} />
        <Pagination totalPages={totalPages} currentPage={pagination} setPagination={setPagination} />
      </div>
    </section>
  );
};
