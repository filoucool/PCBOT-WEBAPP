import {
  Grid,
  Button,
  Container,
  Stack,
  Typography,
  TextField,
  Divider,
  Card,
  Icon
} from '@mui/material';
// components
import SendIcon from '@mui/icons-material/Send';
import Refresh from '@iconify/icons-eva/refresh-fill';

import { alpha, styled } from '@mui/material/styles';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import Page from '../../components/Page';

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  color: '#000000',
  width: '25%',
  height: '169px',
  backgroundColor: 'transparent'
}));
export default function AppPhotoresistorGrid() {
  const [MIN, setMIN] = useState('');
  const [AVG, setAVG] = useState('');
  const [MAX, setMAX] = useState('');
  const [CURRENT, setCURRENT] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:3001/api/getPhotoresistor').then((response) => {
      setAVG(response.data.at(0).AVERAGE);
      setMIN(response.data.at(0).MINIMUM);
      setMAX(response.data.at(0).MAXIMUM);
      setCURRENT(response.data.at(0).CURRENT);
    });
  }, []);
  return (
    <Page>
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 0 }} columns={{ xs: 8, sm: 8, md: 8, lg: 8 }}>
          <RootStyle item xs={2} align="center">
            <Grid
              style={{
                color: '#45a29e',
                borderRadius: '20px',
                backgroundColor: '#1f2833',
                width: '90%',
                height: '80%',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <Typography variant="h4" gutterBottom style={{ color: '#45a29e' }}>
                Current Luminosity:
              </Typography>
              <Typography variant="h2" gutterBottom style={{ color: '#66fcf1' }}>
                {CURRENT}Lm
              </Typography>
            </Grid>
          </RootStyle>
          <RootStyle item xs={2} align="center">
            <Grid
              style={{
                color: '#45a29e',
                borderRadius: '20px',
                backgroundColor: '#1f2833',
                width: '90%',
                height: '80%',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <Typography variant="h4" gutterBottom style={{ color: '#45a29e' }}>
                Minimum Luminosity:
              </Typography>
              <Typography variant="h2" gutterBottom style={{ color: '#66fcf1' }}>
                {MIN}Lm
              </Typography>
            </Grid>
          </RootStyle>
          <RootStyle item xs={2} align="center">
            <Grid
              style={{
                color: '#45a29e',
                borderRadius: '20px',
                backgroundColor: '#1f2833',
                width: '90%',
                height: '80%',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <Typography variant="h4" gutterBottom style={{ color: '#45a29e' }}>
                Average Luminosity:
              </Typography>
              <Typography variant="h2" gutterBottom style={{ color: '#66fcf1' }}>
                {AVG}Lm
              </Typography>
            </Grid>
          </RootStyle>
          <RootStyle item xs={2} align="center">
            <Grid
              style={{
                color: '#45a29e',
                borderRadius: '20px',
                backgroundColor: '#1f2833',
                width: '90%',
                height: '80%',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <Typography variant="h4" gutterBottom style={{ color: '#45a29e' }}>
                Maximum Luminosity:
              </Typography>
              <Typography variant="h2" gutterBottom style={{ color: '#66fcf1' }}>
                {MAX}Lm
              </Typography>
            </Grid>
          </RootStyle>
        </Grid>
      </Container>
    </Page>
  );
}
