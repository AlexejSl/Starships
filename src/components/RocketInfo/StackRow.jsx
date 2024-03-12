import { Stack } from '@mui/material';
import PropTypes from 'prop-types';

function StackRow({ children }) {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      sx={{ margin: '0 1rem 0 1rem' }}
    >
      {children}
    </Stack>
  );
}

StackRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StackRow;
