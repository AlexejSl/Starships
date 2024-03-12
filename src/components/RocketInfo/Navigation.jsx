import styles from './RocketInfo.module.scss';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md';
import { useStarshipContext } from '../../store/StarshipContext';

function Navigation() {
  const { starships, currentStarship, setCurrentStarship } =
    useStarshipContext();

  function handlePlusPage() {
    if (currentStarship < 3) {
      setCurrentStarship((currentStarship) => currentStarship + 1);
    }
  }

  function handleMinusPage() {
    if (currentStarship >= 1) {
      setCurrentStarship((currentStarship) => currentStarship - 1);
    }
  }

  return (
    <div className={styles.navigation}>
      <MdOutlineKeyboardArrowLeft
        className={styles.navigation__button}
        onClick={handleMinusPage}
      />
      {starships.map((starship, index) => (
        <span
          className={`${
            index === currentStarship
              ? styles.navigation__ball_active
              : styles.navigation__ball
          }`}
          key={index}
        ></span>
      ))}

      <MdOutlineKeyboardArrowRight
        className={styles.navigation__button}
        onClick={handlePlusPage}
      />
    </div>
  );
}

export default Navigation;
