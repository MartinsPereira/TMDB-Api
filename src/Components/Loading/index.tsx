import { useEffect, useState } from 'react';
import styles from './styles.module.scss'

interface PropsLoading {
  numItem: number;
}

export const Loading = ({ numItem }: PropsLoading) => {
  const [qtdItem, setQtdItem] = useState(numItem)

  useEffect(() => {
    setQtdItem(numItem)
  }, [numItem])

  return (
    <section className={styles.loadingMoviesHome}>
      <div className={styles.divMoviesList}>
        <ul className={styles.listMovies}>
          {Array.from({ length: qtdItem }).map((indi, index) => (
            <li key={index}>
              <div className={styles.skeleton} ></div>
              <h5>Lorem ipsum dolor sit amet.</h5>
              <span>14 DE DEZ. DE 2021</span>
            </li>
          ))}
        </ul>
      </div>
    </section >
  );
};
