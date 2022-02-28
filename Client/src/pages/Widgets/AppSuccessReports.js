import { Icon } from '@iconify/react';
import alerttrianglefill from '@iconify/icons-eva/alert-triangle-fill';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { fShortenNumber } from '../../utils/formatNumber';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(3, 0),
  color: '#000000',
  backgroundColor: 'green'
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(1),
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  color: '#000000'
}));

// ----------------------------------------------------------------------

export default function AppSuccessReports() {
  const [SUCCESS, setSUCCESS] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:3001/api/getEventCount').then((response) => {
      setSUCCESS(response.data.at(0).SUCCESS);
    });
  }, []);
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon={alerttrianglefill} width={48} height={48} />
      </IconWrapperStyle>
      <Typography variant="h3">{fShortenNumber(SUCCESS)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 1 }} style={{ fontWeight: 'bold' }}>
        Reported Success
      </Typography>
    </RootStyle>
  );
}
