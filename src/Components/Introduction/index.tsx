import { Genres } from '../Genres';
import { ListMoviesHome } from '../ListMoviesHome';
import styles from './styles.module.scss'


export const Introduction = () => {

  return (
    <>
      <main className={styles.introducao}>
        <div className="container">
          <h1 className={styles.title}>Milhões de filmes, séries e pessoas <br /> para descobrir. Explore já.</h1>
          <Genres />
        </div>
      </main>
      <ListMoviesHome />
    </>
  );
};
