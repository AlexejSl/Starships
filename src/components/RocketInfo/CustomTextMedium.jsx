import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

function CustomTextMedium({ children }) {
  return (
    <Typography
      sx={{
        fontWeight: '500',
        fontSize: '1.8rem',
        marginRight: 'auto',
      }}
    >
      {children}
    </Typography>
  );
}

CustomTextMedium.propTypes = {
  children: PropTypes.string,
};

export default CustomTextMedium;
