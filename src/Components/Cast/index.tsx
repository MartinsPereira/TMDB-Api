import styles from './styles.module.scss'
import imgDefault from '../../Assets/img/image-default.jpg'
import { useEffect, useState } from 'react';

interface CastInterface {
  id: number;
  name: string;
  profile_path: string;
  character: string;
}

interface CastProps {
  castItems: CastInterface[] | undefined;
  idPage: string | undefined,
}

export const Cast = ({ castItems }: CastProps) => {
  const [cast, setCast] = useState<CastInterface[]>()

  useEffect(() => {
    setCast(castItems)
  }, [castItems])

  if (cast)
    return (
      <div className={styles.wrapperCast}>
        <ul className={styles.listCast}>
          {cast.map(castIn => (
            <li key={`${castIn.id + '1'}`}>
              <img src={castIn.profile_path ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${castIn.profile_path}` : imgDefault} alt={castIn.name} />
              <h5>{castIn.name}</h5>
              <span>{castIn.character}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  else return null
};
