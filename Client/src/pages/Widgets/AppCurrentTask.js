import { Icon } from '@iconify/react';
import alerttrianglefill from '@iconify/icons-eva/alert-triangle-fill';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, CircularProgress, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../utils/formatNumber';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'Left',
  padding: theme.spacing(4.4, 3),
  color: '#66fcf1',
  backgroundColor: '#1f2833'
}));

// ----------------------------------------------------------------------
const current = 'Moving to Target location';
const next = 'Analysing Target';

export default function CurrentTask() {
  return (
    <RootStyle>
      <Typography variant="h5" sx={{ opacity: 1 }} style={{ fontWeight: 'bold' }}>
        Current Task:
      </Typography>

      <Typography variant="h4" style={{ color: '#45a29e', padding: (5, 5) }}>
        {current}{' '}
        <CircularProgress
          variant="indeterminate"
          disableShrink
          size={18}
          thickness={4}
          style={{ color: '#66fcf1' }}
        />
      </Typography>

      <Typography variant="h5" sx={{ opacity: 1 }} style={{ fontWeight: 'bold' }}>
        Next Task:
      </Typography>

      <Typography variant="h4" style={{ color: '#45a29e', padding: (5, 5) }}>
        {next}
      </Typography>
    </RootStyle>
  );
}
