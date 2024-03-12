import styles from './RocketInfo.module.scss';
import { Stack, Typography } from '@mui/material';
import ImageGallery from './ImageGallery';
import Navigation from './Navigation';
import { useStarshipContext } from '../../store/StarshipContext.jsx';
import RocketSpecs from './RocketSpecs.jsx';
import Spinner from '../Spinner.jsx';

function RocketInfo() {
  const { starships, currentStarship, isLoading } = useStarshipContext();

  if (!starships || isLoading) return <Spinner />;

  return (
    <div className={styles.RocketInfo}>
      <Stack direction="row" sx={{ width: '100%' }}>
        <Stack
          direction="column"
          sx={{
            margin: '5rem',
            maxWidth: '42%',
          }}
          gap="2rem"
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: '400',
            }}
          >
            {starships[currentStarship].name}
          </Typography>
          <Typography
            sx={{
              fontWeight: '300',
              fontSize: '1.8rem',
            }}
          >
            {starships[currentStarship].description}
          </Typography>
          <RocketSpecs
            starships={starships}
            currentStarship={currentStarship}
          />
        </Stack>
        <Stack
          direction="column"
          justifySelf="center"
          alignSelf="start"
          sx={{ marginTop: '5rem' }}
        >
          <ImageGallery
            images={starships[currentStarship].flickr_images}
            currentStarship={currentStarship}
          />
        </Stack>
      </Stack>
      <Navigation />
    </div>
  );
}

export default RocketInfo;
