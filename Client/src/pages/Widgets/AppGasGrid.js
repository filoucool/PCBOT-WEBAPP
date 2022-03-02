import { Grid, Container, Typography, Card } from '@mui/material';
// components

import { styled } from '@mui/material/styles';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import Page from '../../components/Page';

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  color: '#000000',
  width: '20%',
  height: '169px',
  backgroundColor: 'transparent'
}));
export default function AppGasGrids() {
  const [GAS1, setGAS1] = useState('');
  const [GAS2, setGAS2] = useState('');
  const [GAS3, setGAS3] = useState('');
  const [GAS4, setGAS4] = useState('');
  const [GAS5, setGAS5] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:3001/api/getGas').then((response) => {
      setGAS1(response.data.at(0).GAS1);
      setGAS2(response.data.at(0).GAS2);
      setGAS3(response.data.at(0).GAS3);
      setGAS4(response.data.at(0).GAS4);
      setGAS5(response.data.at(0).GAS5);
    });
  }, []);
  return (
    <Page>
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 0 }} columns={{ xs: 8, sm: 8, md: 8, lg: 8 }}>
          <RootStyle item xs={1.6} align="center">
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
                GAS 1
              </Typography>
              <Typography variant="h2" gutterBottom style={{ color: '#66fcf1' }}>
                {GAS1}ppm
              </Typography>
            </Grid>
          </RootStyle>
          <RootStyle item xs={1.6} align="center">
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
                GAS 2
              </Typography>
              <Typography variant="h2" gutterBottom style={{ color: '#66fcf1' }}>
                {GAS2}ppm
              </Typography>
            </Grid>
          </RootStyle>
          <RootStyle item xs={1.6} align="center">
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
                GAS 3
              </Typography>
              <Typography variant="h2" gutterBottom style={{ color: '#66fcf1' }}>
                {GAS3}ppm
              </Typography>
            </Grid>
          </RootStyle>
          <RootStyle item xs={1.6} align="center">
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
                GAS 4
              </Typography>
              <Typography variant="h2" gutterBottom style={{ color: '#66fcf1' }}>
                {GAS4}ppm
              </Typography>
            </Grid>
          </RootStyle>
          <RootStyle item xs={1.6} align="center">
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
                GAS 5
              </Typography>
              <Typography variant="h2" gutterBottom style={{ color: '#66fcf1' }}>
                {GAS5}ppm
              </Typography>
            </Grid>
          </RootStyle>
        </Grid>
      </Container>
    </Page>
  );
}
