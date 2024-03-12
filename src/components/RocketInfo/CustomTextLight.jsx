import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

function CustomTextLight({ children }) {
  return (
    <Typography
      sx={{
        fontWeight: '400',
        fontSize: '1.8rem',
        marginLeft: 'auto',
      }}
    >
      {children}
    </Typography>
  );
}

CustomTextLight.propTypes = {
  children: PropTypes.string,
};

export default CustomTextLight;
