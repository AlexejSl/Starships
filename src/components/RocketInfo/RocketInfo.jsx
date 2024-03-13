import styles from './RocketInfo.module.scss';
import { Link, Stack, Typography } from '@mui/material';
import ImageGallery from './ImageGallery';
import Navigation from './Navigation';
import { useStarshipContext } from '../../store/StarshipContext.jsx';
import RocketSpecs from './RocketSpecs.jsx';
import Spinner from '../Spinner.jsx';
import { useMediaQuery } from '@mui/material';

function RocketInfo() {
  const { starships, currentStarship, isLoading } = useStarshipContext();
  const columnBreakpoint = useMediaQuery('(max-width: 1150px)');

  //render spinner if data not arrived yet
  if (!starships || isLoading) return <Spinner />;

  return (
    <div className={styles.rocketInfo}>
      <Stack
        direction={columnBreakpoint ? 'column' : 'row'}
        justifyContent="center"
        sx={{
          width: '100%',
          alignItems: columnBreakpoint ? 'center' : 'start',
        }}
      >
        <Stack
          direction="column"
          gap="2rem"
          className={styles.rocketInfo__innerFlex}
        >
          <Link
            href={starships[currentStarship].wikipedia}
            underline="none"
            sx={{ textDecoration: 'none', color: 'inherit' }}
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
          </Link>
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
          sx={{
            marginTop: columnBreakpoint ? '0' : '5rem',
            alignSelf: columnBreakpoint ? 'center' : 'start',
          }}
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
