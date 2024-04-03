'use client';
import React from 'react';
import { Box } from '@mui/material';
import ViewModel from './viewModel';
import BasicList from '../List';
import Header from '../Header';
import ResponsiveDrawer from './drawer';

export default function SideNav() {
  const { classes, isMobile, tablet } = ViewModel();
  return (
    <>
      <Box sx={classes.root}>
        {isMobile || tablet ? (
          <ResponsiveDrawer />
        ) : (
          <>
            <Header />
            <BasicList />
          </>
        )}
      </Box>
    </>
  );
}
