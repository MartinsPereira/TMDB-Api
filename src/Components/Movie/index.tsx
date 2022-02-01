import styles from './styles.module.scss'
import imgIndividual from '../../Assets/img/individual.png'
import imgAvaliacao from '../../Assets/img/avaliacao.png'
import imgtrailer from '../../Assets/img/img-trailer.jpg'
import { Cast } from '../Cast';
import { MoviesList } from '../MoviesList';

export const Movie = () => {
  return (
    <>
      <main className={styles.sectionMovie}>
        <div className="container">
          <div className={styles.individualDetails}>
            <img src={imgIndividual} alt="Deadpool" />
            <div className={styles.infoMovieRight}>
              <h2 className={styles.title}>Deadpool (2016)</h2>
              <ul className={styles.listDetails}>
                <li>16 anos</li>
                <li>11/02/2016 (BR)</li>
                <li>Ação, Aventura, Comédia, Ficcão científica</li>
                <li>1h 47m</li>
              </ul>
              <div className={styles.avaliacao}>
                <div> <img src={imgAvaliacao} alt="Avaliação" /></div>
                <span>Avaliação dos <br /> usuários</span>
              </div>
              <h3>Sinopse</h3>
              <p className={styles.pSinopse}>Baseado no anti-herói não convencional da Marvel Comics, Deadpool conta a história da origem do ex-agente das Forças Especiais que se tornou o mercenário Wade Wilson. Depois de ser submetido a um desonesto experimento que o deixa com poderes de cura acelerada, Wade adota o alter ego de Deadpool. Armado com suas novas habilidades e um senso de humor negro e distorcido, Deadpool persegue o homem que quase destruiu sua vida.</p>
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
};
