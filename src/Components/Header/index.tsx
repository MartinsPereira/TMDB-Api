import logo from '../../Assets/img/logo-tmdb.svg'
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <img src={logo} alt="TMDB" />
      </div>
    </header >
  );
};
