import styles from './styles.module.scss'
import { Cast } from '../Cast';
import { MoviesList } from '../MoviesList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../Services/api';
import { ChartMovie } from '../ChartMovie';
import { useMovies } from '../../Hooks/useMovies';
import imgDefault from '../../Assets/img/image-default.jpg'

interface MovieType {
  id: number;
  title: string;
  release_date: string;
  genres: Genre[];
  runtime: number;
  vote_average: number;
  poster_path: string,
  overview: string;
  releases: { countries: Countries[] };
}

interface Countries {
  certification: string;
  iso_3166_1: string,
  release_date: string,
}

interface Crew {
  id: number;
  name: string;
  job: any;
}

interface CastInterface {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

interface Genre {
  id: number;
  name: string;
}

interface Credits {
  crew: Crew[];
  cast: CastInterface[];
}

interface Trailer {
  id: string;
  key: string;
  official: boolean;
  type: string;
}

interface RecommendationsMovie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

export const Movie = () => {
  const params = useParams();
  const { imgUrl } = useMovies()

  const [movie, setMovie] = useState<MovieType>();
  const [credits, setCredits] = useState<Credits>();
  const [crew, setCrew] = useState<Crew[]>();
  const [trailers, setTrailers] = useState<Trailer[]>();
  const [recommendations, setRecommendations] = useState<RecommendationsMovie[]>();
  const [loadingMovies, setLoadingMovies] = useState(false)
  const [loadingMovie, setLoadingMovie] = useState(false)
  const [loadingCrew, setLoadingCrew] = useState(false)

  useEffect(() => {
    async function callMovieDetails() {
      setLoadingMovie(true)
      const response = await api.get(`movie/${params.id}?language=pt-BR&append_to_response=releases`);
      setMovie(response.data);
      setLoadingMovie(false);
    }
    async function callCreditsDetails() {
      setLoadingCrew(true);
      const response = await api.get(`movie/${params.id}/credits?language=pt-BR`);
      setCredits(response.data);
      setLoadingCrew(false);
    }
    callMovieDetails();
    callCreditsDetails();
  }, [params.id])

  useEffect(() => {
    if (credits) {
      const filteredCrew: Crew[] = [];
      const finalCrew: Crew[] = []

      credits.crew.filter((crewIn) => {
        const attribute = {
          id: crewIn.id,
          name: crewIn.name,
          job: [crewIn.job]
        }
        switch (crewIn.job) {
          case 'Writer':
            filteredCrew.push(attribute)
            break;
          case 'Director':
            filteredCrew.push({ ...attribute })
            break;
          case 'Characters':
            filteredCrew.push({ ...attribute })
            break;
          case 'Screenplay':
            filteredCrew.push({ ...attribute })
            break;
          case 'Story':
            filteredCrew.push({ ...attribute })
            break;
          case 'Novel':
            filteredCrew.push({ ...attribute })
            break;
          case 'Teleplay':
            filteredCrew.push({ ...attribute })
            break;
        }
        return null;
      })

      filteredCrew.reduce((acc: Crew, item: Crew, index) => {
        if (acc.id !== item.id) {
          finalCrew.push(item)
          return item;
        } else {
          index === 0 && finalCrew.push(item)
          if (acc.job !== item.job) {
            finalCrew.forEach((e) => {
              if (e.id === item.id) {
                let newJob = [...e.job, ...item.job]
                e.job = newJob;
              }
            })
          }
          return item;
        }
      }, filteredCrew[0])
      setCrew(finalCrew)
    }
  }, [credits])

  useEffect(() => {
    async function callTrailer() {
      const response = await api.get(`movie/${params.id}/videos?language=pt-BR`);
      setTrailers(response.data.results);
    }
    callTrailer()
  }, [params.id])

  useEffect(() => {
    async function callRecomendations() {
      setLoadingMovies(true)
      const response = await api.get(`movie/${params.id}/recommendations?&language=pt-BR&page=1`);
      setRecommendations(response.data.results);
      setLoadingMovies(false)
    }
    callRecomendations()

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [params.id])

  const converter = (minutos: number) => {
    const horas = Math.floor(minutos / 60);
    const min = minutos % 60;
    const textoHoras = (`${horas}`).slice(-2);
    const textoMinutos = (`00${min}`).slice(-2);
    return `${textoHoras}h ${textoMinutos}m`;
  };


  if (movie && credits && trailers)
    return (
      <>
        <main className={styles.sectionMovie}>
          <div className="container">
            <div className={styles.individualDetails}>

              <img src={movie.poster_path ? `${imgUrl?.images.secure_base_url}${imgUrl?.images.poster_sizes[4]}${movie.poster_path}` : imgDefault} alt={movie.title} />

              <div className={styles.infoMovieRight}>

                <h2 className={loadingMovie ? `${styles.title}  skeleton_text` : `${styles.title}`}>{movie.title}</h2>

                <ul className={styles.listDetails}>
                  <li className={loadingMovie ? `  skeleton_text` : ``}>{`${movie.releases.countries.find(countrie => countrie.iso_3166_1 === "BR")?.certification !== "L" ? movie.releases.countries.find(countrie => countrie.iso_3166_1 === "BR")?.certification + ' anos' : 'Livre'}`} </li>

                  <li className={loadingMovie ? `  skeleton_text` : ``}>{movie.release_date ? new Intl.DateTimeFormat('pt-br', { dateStyle: 'short' }).format(new Date(movie.release_date)) : 'Ainda sem data definida'} (BR)</li>

                  <li className={loadingMovie ? `  skeleton_text` : ``}>{movie.genres.map((genre: Genre, index) => movie.genres.length === (index + 1) ? `${genre.name}` : `${genre.name}, `)}</li>

                  <li className={loadingMovie ? `  skeleton_text` : ``}>{converter(movie.runtime)}</li>
                </ul>

                <div className={styles.avaliacao}>
                  <div><ChartMovie vote={movie.vote_average} /></div>
                  <span>Avaliação dos <br /> usuários</span>
                </div>

                <h3>Sinopse</h3>
                <p className={loadingMovie ? `  skeleton_text` : ` ${styles.pSinopse}`}>{movie.overview}</p>

                <ul className={loadingCrew ? `${styles.cast} skeleton_text` : `${styles.cast}`} >
                  {crew?.map(liCrew => (
                    <li key={liCrew.id}>
                      <span>{liCrew.name}</span>
                      <small>{liCrew.job.map((IndiJob: string, index: number) => liCrew.job.length === (index + 1) ? `${IndiJob}` : `${IndiJob}, `)}</small>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </div>
        </main>

        <section className={styles.sectionCast}>
          <div className='container'>
            <h2 className={styles.titleBlack}>Elenco original</h2>
            <Cast castItems={credits.cast} idPage={params.id} />
          </div>
        </section>

        <section className={styles.sectionTrailer}>
          <div className='container'>
            <h2 className={styles.titleBlack}>Trailer</h2>
            <iframe frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title={movie.title} allowFullScreen src={`https://www.youtube.com/embed/${trailers.find((trailer: Trailer) => trailer.official === true ? trailer.type === 'Trailer' || trailer.type === 'Teaser' : '')?.key}`} ></iframe>
          </div>
        </section>

        <section >
          <div className='container'>
            <h2 className={styles.titleBlack}>Recomendações</h2>
            <MoviesList movies={recommendations} loading={loadingMovies} />
          </div>
        </section>
      </>
    );
  else return null
};
