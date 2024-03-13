import { useEffect, useState } from 'react';
import { useStarshipContext } from '../../store/StarshipContext';
import styles from './Globe.module.scss';
import { Link } from '@mui/material';

function Globe() {
  const { starships, currentStarship } = useStarshipContext();
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const newRotation = currentStarship * -90;
    setRotation(newRotation);
  }, [currentStarship]);

  if (!starships) return;

  return (
    <>
      <div className={styles.globe_container}>
        <div
          className={styles.globe}
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {starships.map((starship, index) => {
            const className = `globe__item_${index + 1}`;
            return (
              <Link
                href={starship.wikipedia}
                underline="none"
                sx={{ textDecoration: 'none', color: 'inherit' }}
                key={starship.name}
              >
                <div className={styles[className]}>{starship.name}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Globe;
