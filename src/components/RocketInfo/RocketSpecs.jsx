import { Stack } from '@mui/material';
import PropTypes from 'prop-types';
import CustomStackRow from './StackRow';
import CustomTextMedium from './CustomTextMedium';
import CustomTextLight from './CustomTextLight';
import CustomDivider from './CustomDivider';
import styles from './RocketInfo.module.scss';

function RocketSpecs({ starships, currentStarship }) {
  return (
    <Stack direction="column" className={styles.specs}>
      <CustomStackRow>
        <CustomTextMedium>Height</CustomTextMedium>
        <CustomTextLight>
          {starships[currentStarship].height.meters} m
        </CustomTextLight>
      </CustomStackRow>
      <CustomDivider />
      <CustomStackRow>
        <CustomTextMedium>Mass</CustomTextMedium>
        <CustomTextLight>
          {starships[currentStarship].mass.kg} kg
        </CustomTextLight>
      </CustomStackRow>
      <CustomDivider />
      <CustomStackRow>
        <CustomTextMedium>Engine Type</CustomTextMedium>
        <CustomTextLight>
          {starships[currentStarship].engines.type}
        </CustomTextLight>
      </CustomStackRow>
      {starships[currentStarship].engines.version ? (
        <CustomStackRow>
          <CustomTextMedium>Version</CustomTextMedium>
          <CustomTextLight>
            {starships[currentStarship].engines.version}
          </CustomTextLight>
        </CustomStackRow>
      ) : null}
      <CustomDivider />
      <CustomStackRow>
        <CustomTextMedium>Propellants</CustomTextMedium>
        <CustomTextLight>
          {starships[currentStarship].engines.propellant_1}
        </CustomTextLight>
      </CustomStackRow>
      <CustomStackRow>
        <CustomTextLight>
          {starships[currentStarship].engines.propellant_2}
        </CustomTextLight>
      </CustomStackRow>
    </Stack>
  );
}

RocketSpecs.propTypes = {
  starships: PropTypes.array.isRequired,
  currentStarship: PropTypes.number,
};

export default RocketSpecs;
