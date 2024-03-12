import styles from './Spinner.module.scss';
import rocket from '../assets/rocket.svg';

function Spinner() {
  return (
    <div className={styles.loading}>
      <div className={styles.loading__spinner}>
        <img src={rocket} alt="Loading" className={styles.rocket} />
      </div>
      <p className={styles.loading__text}>Loading...</p>
    </div>
  );
}

export default Spinner;
