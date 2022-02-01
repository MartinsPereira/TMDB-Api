import { useEffect, useState } from 'react';
import { api } from '../../Services/api';
import styles from './styles.module.scss'

interface Genre {
  id: number;
  name: string;
}

export const Genres = () => {
  const [genres, setGenres] = useState<Genre[]>([])

  useEffect(() => {
    async function callGenres() {
      const response = await api.get('genre/movie/list?language=pt-BR')
      setGenres(response.data.genres)
    }
    callGenres()
  }, [])

  return (
    <>
      <span className={styles.filterSpan}>Filtre por:</span>
      <ul className={styles.listGenres}>
        {genres.map(genre => (
          <li key={genre.id}><a href="#">{genre.name}</a></li>
        ))}
      </ul>
    </>
  );
};
