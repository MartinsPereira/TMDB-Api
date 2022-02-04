import { Link } from 'react-router-dom';
import logo from '../../Assets/img/logo-tmdb.svg'
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <Link to="/">
          <img src={logo} alt="TMDB" />
        </Link>
      </div>
    </header >
  );
};
