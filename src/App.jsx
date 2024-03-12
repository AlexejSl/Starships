import styles from './App.module.scss';
import RocketInfo from './components/RocketInfo/RocketInfo';
import Globe from './components/Globe/Globe';
import { StarshipProvider } from './store/StarshipContext';
import Spinner from './components/Spinner';

function App() {
  return (
    <StarshipProvider>
      <div className={styles.page_bg}></div>
      <div className={styles.animation_wrapper}>
        <div className={`${styles.particle} ${styles.particle_1}`}></div>
      </div>
      <RocketInfo />
      <Globe />
      {/* This spinner is only imported because the fetching from API is too fast */}
      {/* <Spinner /> */}
    </StarshipProvider>
  );
}

export default App;
