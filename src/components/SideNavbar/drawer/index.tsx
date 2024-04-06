import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Header from '../../Header';
import BasicList from '../../List';
import { useAppSelector, useAppDispatch } from '@/src/utils/redux/hooks';
import { setDrawerOpen } from '@/src/utils/redux/slices/common';
import useStyles from '../useStyles';

const drawerWidth = 280;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const drawerState = useAppSelector((state) => state.common.drawer);
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { window } = props;

  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    dispatch(setDrawerOpen(false));
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      dispatch(setDrawerOpen(true));
    }
  };

  const drawer = (
    <Box
      style={{
        ...classes.root,
        paddingTop: '10px',
        height: 'auto',
      }}
    >
      <Header />
      <BasicList />
    </Box>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: '100%',
          ml: { sm: `${drawerWidth}px` },
          background: 'white',
          zIndex: 9999999999,
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h5" fontWeight={700} color="primary.main">
                E
              </Typography>
              <Typography variant="h5" fontWeight={700} color="primary.main">
                M
              </Typography>
              <Typography variant="h5" fontWeight={700} color="primary.main">
                S
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={drawerState.isOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 0 },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
