import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Icon } from '@iconify/react';
import bugFilled from '@iconify/icons-ant-design/bug-filled';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card } from '@mui/material';
// utils
import { fShortenNumber } from '../../utils/formatNumber';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          style={{ padding: '15px' }}
          color="inherit"
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          style={{ color: '#66fcf1' }}
          variant="body2"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(2.3, 2.7),
  color: '#66fcf1',
  backgroundColor: '#1f2833'
}));

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired
};

export default function LinearWithValueLabel() {
  return (
    <RootStyle>
      <Typography
        variant="h5"
        sx={{ opacity: 1 }}
        style={{ fontWeight: 'bold', textAlign: 'Left' }}
      >
        Ressource Monitor
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Typography variant="subtitle2" sx={{ opacity: 1 }} style={{ fontWeight: 'bold' }}>
          CPU:
        </Typography>
        <LinearProgressWithLabel value={40} />
      </Box>
      <Box sx={{ width: '100%' }}>
        <Typography variant="subtitle2" sx={{ opacity: 1 }} style={{ fontWeight: 'bold' }}>
          GPU:
        </Typography>
        <LinearProgressWithLabel value={90} />
      </Box>
      <Box sx={{ width: '100%' }}>
        <Typography variant="subtitle2" sx={{ opacity: 1 }} style={{ fontWeight: 'bold' }}>
          RAM:
        </Typography>
        <LinearProgressWithLabel value={30} />
      </Box>
    </RootStyle>
  );
}
