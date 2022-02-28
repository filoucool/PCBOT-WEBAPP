import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../components/_dashboard/blog';
//
import POSTS from '../_mocks_/blog';
import DataTabs from './Widgets/AppDataTabs';

export default function SensorData() {
  return (
    <Page title="Sensor Data">
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom style={{ color: '#66fcf1' }}>
            Sensor Data
          </Typography>
        </Stack>
        <DataTabs />
      </Container>
    </Page>
  );
}
