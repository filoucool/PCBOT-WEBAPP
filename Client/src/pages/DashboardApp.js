// material
import { Box, Grid, Container, Typography, Stack, item } from '@mui/material';

// components
import Page from '../components/Page';
import { AppWebsiteVisits, AppWarningsReports } from '../components/_dashboard/app';
import AppSuccessReports from './Widgets/AppSuccessReports';
import CurrentTask from './Widgets/AppCurrentTask';
import LinearWithValueLabel from './Widgets/AppRessourceMonitor';
import AppErrorReports from './Widgets/AppErrorReports';
import AppLatestEvent from './Widgets/AppLatestEvent';
import AppDistributionOfTime from './Widgets/AppDistributionOfTime';
import AppDistributionOfTask from './Widgets/AppDistributionOfTask';
// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography style={{ color: '#66fcf1' }} variant="h4">
            Hi Félix, Here's whats happening!
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 1, sm: 2, lg: 3 }} columns={{ xs: 8, sm: 8, md: 8, lg: 8 }}>
          <Grid item xs={1} sm={1} md={1}>
            <Stack spacing={2}>
              <item>
                <AppErrorReports />
              </item>
              <item>
                <AppWarningsReports />
              </item>
              <item>
                <AppSuccessReports />
              </item>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppLatestEvent />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Stack spacing={2}>
              <item>
                <LinearWithValueLabel />
              </item>
              <item>
                <CurrentTask />
              </item>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} lg={9}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppDistributionOfTime />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppDistributionOfTask />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
