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
import Page from '../../components/Page';

const ram1 = 6.2;
const ram2 = 5.8;
const cpu1 = 43;
const cpu2 = 51;
const gpu1 = 48;
const gpu2 = 57;

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  color: '#000000',
  width: '33%',
  height: '129px',
  backgroundColor: 'transparent',
  overflow: 'hidden'
}));
export default function HealthGrid() {
  return (
    <Page overflow="hidden">
      <Container maxWidth="xl" overflow="hidden">
        <Grid
          container
          spacing={{ xs: 2 }}
          columns={{ xs: 8, sm: 8, md: 8, lg: 8 }}
          overflow="hidden"
        >
          <RootStyle item xs={2.6} align="center" overflow="hidden">
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
                transform: 'translate(-50%, -50%)',
                overflow: 'hidden'
              }}
            >
              <Typography variant="h4" gutterBottom style={{ color: '#45a29e' }}>
                Current Cpu Temperature:
              </Typography>
              <Typography variant="h2" gutterBottom style={{ color: '#66fcf1' }}>
                {cpu1}°C
              </Typography>
            </Grid>
          </RootStyle>
          <RootStyle item xs={2.6} align="center" overflow="hidden">
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
                transform: 'translate(-50%, -50%)',
                overflow: 'hidden'
              }}
            >
              <Typography variant="h4" gutterBottom style={{ color: '#45a29e' }}>
                Current Gpu Temperature:
              </Typography>
              <Typography variant="h2" gutterBottom style={{ color: '#66fcf1' }}>
                {gpu1}°C
              </Typography>
            </Grid>
          </RootStyle>
          <RootStyle item xs={2.6} align="center" overflow="hidden">
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
                transform: 'translate(-50%, -50%)',
                overflow: 'hidden'
              }}
            >
              <Typography variant="h4" gutterBottom style={{ color: '#45a29e' }}>
                Current Ram Usage:
              </Typography>
              <Typography variant="h2" gutterBottom style={{ color: '#66fcf1' }}>
                {ram1}Gb
              </Typography>
            </Grid>
          </RootStyle>
          <RootStyle item xs={2.6} align="center" overflow="hidden">
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
                transform: 'translate(-50%, -50%)',
                overflow: 'hidden'
              }}
            >
              <Typography variant="h4" gutterBottom style={{ color: '#45a29e' }}>
                Average Cpu Temperature:
              </Typography>
              <Typography variant="h2" gutterBottom style={{ color: '#66fcf1' }}>
                {cpu2}°C
              </Typography>
            </Grid>
          </RootStyle>
          <RootStyle item xs={2.6} align="center" overflow="hidden">
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
                transform: 'translate(-50%, -50%)',
                overflow: 'hidden'
              }}
            >
              <Typography variant="h4" gutterBottom style={{ color: '#45a29e' }}>
                Average Gpu Temperature:
              </Typography>
              <Typography variant="h2" gutterBottom style={{ color: '#66fcf1' }}>
                {gpu2}°C
              </Typography>
            </Grid>
          </RootStyle>
          <RootStyle item xs={2.6} align="center" overflow="hidden">
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
                transform: 'translate(-50%, -50%)',
                overflow: 'hidden'
              }}
            >
              <Typography variant="h4" gutterBottom style={{ color: '#45a29e' }}>
                Average Ram usage:
              </Typography>
              <Typography variant="h2" gutterBottom style={{ color: '#66fcf1' }}>
                {ram2}Gb
              </Typography>
            </Grid>
          </RootStyle>
        </Grid>
      </Container>
    </Page>
  );
}
