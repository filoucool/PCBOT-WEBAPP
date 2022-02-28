import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';

import CpuTemp from './Widgets/AppCpuTemp';
import RamUsage from './Widgets/AppRamUsage';
import GpuTemp from './Widgets/AppGpuTemp';
import HealthGrid from './Widgets/HealthGrid';

export default function SystemHealth() {
  return (
    <Page title="System Health">
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom style={{ color: '#66fcf1' }}>
            System Health and Monitoring
          </Typography>
        </Stack>
        <Grid container spacing={{ xs: 1, sm: 2, lg: 3 }} columns={{ xs: 8, sm: 8, md: 8, lg: 8 }}>
          <Grid item xs={12} md={6} lg={2.6}>
            <CpuTemp />
          </Grid>
          <Grid item xs={12} md={6} lg={2.6}>
            <GpuTemp />
          </Grid>
          <Grid item xs={12} md={6} lg={2.6}>
            <RamUsage />
          </Grid>
          <Grid item xs={8}>
            <HealthGrid />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
