import styles from './styles.module.scss'
import imgIndividual from '../../Assets/img/individual.png'
import imgAvaliacao from '../../Assets/img/avaliacao.png'
import imgtrailer from '../../Assets/img/img-trailer.jpg'
import { Cast } from '../Cast';
import { MoviesList } from '../MoviesList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../Services/api';

interface Movie {
  id: number;
  title: string;
  release_date: string;
  genres: [];
  runtime: number;
  vote_average: number;
  poster_path: string,
  overview: string;
}

interface Genre {
  id: number;
  name: string;
}

export const Movie = () => {
  const params = useParams();

  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    async function callMovie() {
      const response = await api.get(`movie/${params.id}?language=pt-BR`);
      setMovie(response.data);
    }
    callMovie()
  }, [])

  const converter = (minutos: number) => {
    const horas = Math.floor(minutos / 60);
    const min = minutos % 60;
    const textoHoras = (`${horas}`).slice(-2);
    const textoMinutos = (`00${min}`).slice(-2);
    return `${textoHoras}h ${textoMinutos}m`;
  };

  if (movie)
    return (
      <>
        <main className={styles.sectionMovie}>
          <div className="container">
            <div className={styles.individualDetails}>
              <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt={movie.title} />
              <div className={styles.infoMovieRight}>

                <h2 className={styles.title}>{movie.title}</h2>

                <ul className={styles.listDetails}>
                  <li>16 anos</li>
                  <li>{movie.release_date ? new Intl.DateTimeFormat('pt-br', { dateStyle: 'short' }).format(new Date(movie.release_date)) : 'Ainda sem data definida'} (BR)</li>
                  <li>{movie.genres.map((genre: Genre, index) => movie.genres.length === (index + 1) ? `${genre.name}` : `${genre.name}, `)}</li>
                  <li>{converter(movie.runtime)}</li>
                </ul>

                <div className={styles.avaliacao}>
                  <div> <img src={imgAvaliacao} alt="Avaliação" /></div>
                  <span>Avaliação dos <br /> usuários</span>
                </div>

                <h3>Sinopse</h3>
                <p className={styles.pSinopse}>{movie.overview}</p>
                <ul className={styles.cast}>
                  <li>
                    <span>Rob Liefeld</span>
                    <small>Characters</small>
                  </li>
                  <li>
                    <span>Rob Liefeld</span>
                    <small>Characters</small>
                  </li>
                  <li>
                    <span>Rob Liefeld</span>
                    <small>Characters</small>
                  </li>
                  <li>
                    <span>Rob Liefeld</span>
                    <small>Characters</small>
                  </li>
                  <li>
                    <span>Rob Liefeld</span>
                    <small>Characters</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <section className={styles.sectionCast}>
          <div className='container'>
            <h2 className={styles.titleBlack}>Elenco original</h2>
            <Cast />
          </div>
        </section>
        <section className={styles.sectionTrailer}>
          <div className='container'>
            <h2 className={styles.titleBlack}>Trailer</h2>
            <img src={imgtrailer} alt="Trailer Deadpool" />
          </div>
        </section>
        <section >
          <div className='container'>
            <h2 className={styles.titleBlack}>Recomendações</h2>

          </div>
        </section>
      </>
    );
  else return null
};
