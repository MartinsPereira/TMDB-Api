import styles from './styles.module.scss'
import arrowImg from '../../Assets/img/Arrow-left.svg'
import { Dispatch, SetStateAction } from 'react';

interface PaginationProps {
  totalPages: number,
  currentPage: number,
  setPagination: Dispatch<SetStateAction<number>>;
}


export const Pagination = ({ totalPages, currentPage, setPagination }: PaginationProps) => {
  const max_pages = 5; // Apenas números impares
  const max_left = totalPages <= max_pages ? 0 : ((max_pages - 1) / 2);

  let first = 1;
  if (max_left > 0) {
    Math.max(currentPage + Math.min(totalPages - currentPage, max_left), 0) === totalPages
      ? first = totalPages - (max_pages - 1)
      : first = Math.max(currentPage - max_left, 1)
  } else {
    first = 1;
  }

  return (
    <ul className={styles.pagination}>
      <li
        onClick={() => setPagination(1)}
        className={currentPage === 1 ? styles.disabled : ''}>
        Primeira
      </li>
      <li
        className={currentPage === 1 ? styles.disabled : ''}
        onClick={() => setPagination(currentPage === 1 ? 1 : currentPage = currentPage - 1)} >
        <img src={arrowImg} alt="Anterior" />
      </li>

      {Array.from({ length: Math.min(max_pages, totalPages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page} className={page === currentPage ? styles.active : ''} onClick={() => setPagination(page)}>{page}</li>
        ))}

      <li onClick={() => setPagination(currentPage === totalPages ? totalPages : currentPage = currentPage + 1)} className={currentPage < totalPages ? '' : styles.disabled}>
        <img src={arrowImg} alt="Próximo" />
      </li>
      <li onClick={() => setPagination(totalPages)} className={currentPage < totalPages ? ' ' : styles.disabled}>Última</li>
    </ul >
  );
};
