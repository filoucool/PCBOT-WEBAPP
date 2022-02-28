import {
  Grid,
  Button,
  Container,
  Stack,
  Typography,
  TextField,
  Divider,
  Card
} from '@mui/material';
// components

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
export default function AppVoltageGrids() {
  const [MIN, setMIN] = useState('');
  const [AVG, setAVG] = useState('');
  const [MAX, setMAX] = useState('');
  const [CURRENT, setCURRENT] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:3001/api/getVoltage').then((response) => {
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
                Current Voltage:
              </Typography>
              <Typography variant="h2" gutterBottom style={{ color: '#66fcf1' }}>
                {CURRENT}V
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
                Minimum Voltage:
              </Typography>
              <Typography variant="h2" gutterBottom style={{ color: '#66fcf1' }}>
                {MIN}V
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
                Average Voltage:
              </Typography>
              <Typography variant="h2" gutterBottom style={{ color: '#66fcf1' }}>
                {AVG}V
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
                Maximum Voltage:
              </Typography>
              <Typography variant="h2" gutterBottom style={{ color: '#66fcf1' }}>
                {MAX}V
              </Typography>
            </Grid>
          </RootStyle>
        </Grid>
      </Container>
    </Page>
  );
}
