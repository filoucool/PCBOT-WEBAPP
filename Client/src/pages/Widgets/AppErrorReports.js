import { Icon } from '@iconify/react';
import bugFilled from '@iconify/icons-ant-design/bug-filled';
// material
import { styled } from '@mui/material/styles';
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
  backgroundColor: 'red'
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(1.5),
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  color: '#000000'
}));

// ----------------------------------------------------------------------

export default function AppErrorReports() {
  const [ERRORS, setERRORS] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:3001/api/getEventCount').then((response) => {
      setERRORS(response.data.at(0).ERRORS);
    });
  }, []);
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon={bugFilled} width={48} height={48} />
      </IconWrapperStyle>
      <Typography variant="h3">{fShortenNumber(ERRORS)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 1 }} style={{ fontWeight: 'bold' }}>
        Reported Errors
      </Typography>
    </RootStyle>
  );
}
