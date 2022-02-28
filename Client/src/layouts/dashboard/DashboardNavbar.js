import PropTypes from 'prop-types';
import React from 'react';

import { Icon } from '@iconify/react';
import BellFill from '@iconify/icons-eva/bell-fill';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Badge } from '@mui/material';
// components
import { useNavigate } from 'react-router-dom';
import { MHidden } from '../../components/@material-extend';
//
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationsPopover from './NotificationsPopover';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: '#1f2833',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
  }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func
};

export default function DashboardNavbar({ onOpenSidebar }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/dashboard/EventViewer');
  }
  return (
    <RootStyle>
      <ToolbarStyle>
        <MHidden width="lgUp">
          <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
            <Icon icon={BellFill} />
          </IconButton>
        </MHidden>

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          <IconButton
            aria-label="Notifications"
            onClick={() => {
              handleClick();
            }}
          >
            <Badge badgeContent={99} color="secondary">
              <Icon icon={BellFill} />
            </Badge>
          </IconButton>
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
