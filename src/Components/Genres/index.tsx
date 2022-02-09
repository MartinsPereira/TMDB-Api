import { useEffect, useState } from 'react';
import { useMovies } from '../../Hooks/useMovies';
import { api } from '../../Services/api';
import styles from './styles.module.scss'

interface Genre {
  id: number;
  name: string;
}

export const Genres = () => {
  const [genres, setGenres] = useState<Genre[]>([])
  const { selectedGenres, setSelectedGenres } = useMovies()

  useEffect(() => {
    async function callGenres() {
      const response = await api.get('genre/movie/list?language=pt-BR')
      setGenres(response.data.genres)
    }
    callGenres()
  }, [])

  useEffect(() => {
    const genresLocal = localStorage.getItem('SelectedGenresHome')
    if (genresLocal) {
      setSelectedGenres(JSON.parse(genresLocal))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('SelectedGenresHome', JSON.stringify(selectedGenres))
  }, [selectedGenres])

  function handleClickGenre(genre: Genre) {
    if (selectedGenres.find(gen => gen.id === genre.id)) {
      const newSelectedGenres = selectedGenres.filter(item => item.id !== genre.id)
      setSelectedGenres([...newSelectedGenres])
    } else {
      setSelectedGenres([...selectedGenres, genre])
    }
  }

  return (
    <>
      <span className={styles.filterSpan}>Filtre por:</span>
      <ul className={styles.listGenres}>
        {genres.map(genre => (
          <li
            key={genre.id}
            className={selectedGenres.find(gen => gen.id === genre.id) && styles.active}
            onClick={() => handleClickGenre(genre)}>
            {genre.name}
          </li>
        ))}
      </ul>
    </>
  );
};
