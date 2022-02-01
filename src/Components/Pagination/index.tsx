import styles from './styles.module.scss'
import arrowImg from '../../Assets/img/Arrow-left.svg'
import { Dispatch, SetStateAction } from 'react';

interface PaginationProps {
  totalPages: number,
  currentPage: number,
  setPagination: Dispatch<SetStateAction<number>>;
}

export const Pagination = ({ totalPages, currentPage, setPagination }: PaginationProps) => {
  const pages = [];
  const max_pages = 5;

  function handleChangePage(page: number) {
    setPagination(page)
  }

  for (let i = currentPage; i < currentPage + max_pages && i < totalPages; i++) {
    if (currentPage > Math.floor(max_pages / 2)) {
      pages.push(
        <li key={i - Math.floor(max_pages / 2)}
          onClick={() => handleChangePage(i - Math.floor(max_pages / 2))}
          className={i - Math.floor(max_pages / 2) == currentPage ? `${styles.active} ${styles.number}` : `${styles.number}`}
        >{i - Math.floor(max_pages / 2)}</li>)
    } else {
      pages.push(
        <li key={i}
          onClick={() => handleChangePage(i)}
          className={i == currentPage ? `${styles.active} ${styles.number}` : `${styles.number}`}
        >{i}</li>)
    }
  }

  return (
    <ul className={styles.pagination}>
      {currentPage > 2 && <li onClick={() => setPagination(1)}>Primeira</li>}
      {currentPage > 1 && <li><img src={arrowImg} alt="Anterior" /></li>}
      {pages.map(page => page)}
      {currentPage < totalPages && <li><img src={arrowImg} alt="Próximo" /></li>}
      {currentPage < totalPages && <li onClick={() => setPagination(totalPages)}>Última</li>}
    </ul>
  );
};
