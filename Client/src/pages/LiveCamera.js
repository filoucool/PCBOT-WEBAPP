import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography, TextField, Divider } from '@mui/material';
// components
import { Joystick } from 'react-joystick-component';

import SendIcon from '@mui/icons-material/Send';
import Page from '../components/Page';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../components/_dashboard/blog';
import Image from './dummy.png'; // Import using relative path

export default function LiveCamera() {
  return (
    <Page title="Live View">
      <Container maxWidth="xl" overflow="hidden" minHeight="1800px">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={0}>
          <Typography variant="h4" gutterBottom style={{ color: '#66fcf1' }}>
            Live View
          </Typography>
        </Stack>
        <Grid container columns={{ xs: 8, sm: 8, md: 8, lg: 8 }} minHeight="769px">
          <Grid
            item
            xs={8}
            style={{
              minWidth: '1296px',
              minHeight: '729px',
              maxHeight: '729px',
              backgroundImage: `url(${Image})`
            }}
          >
            <Grid xs={1} style={{ top: '525px', left: '3.6%', position: 'relative' }}>
              <Joystick size={150} baseColor="#45a29e" stickColor="#c5c6c7" />
            </Grid>
            <Grid xs={1} style={{ top: '81%', left: '57.5%', position: 'relative' }}>
              <TextField
                style={{
                  maxWidth: '500px',
                  minWidth: '450px'
                }}
                color="primary"
                textInputStyle={{ color: 'green' }}
                label="Command"
              />
            </Grid>
            <Grid xs={1} style={{ top: '75%', left: '88.5%', position: 'relative' }}>
              <Button variant="contained" endIcon={<SendIcon />} style={{ boxShadow: 'none' }}>
                Send Command
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
