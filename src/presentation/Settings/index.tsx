'use client';
import React from 'react';
import useViewModel from './useViewModel';
import { Box, Typography } from '@mui/material';
import MobileScreen from './Screen/mobile';
import DesktopScreen from './Screen/desktop';

export default function SettingsPresentations() {
  const { classes, isMobilV1 } = useViewModel();
  return (
    <>
      <Typography variant="h6" fontWeight={700} mt={isMobilV1 ? 8 : 1} pl={'10px'}>
        Config
      </Typography>
      <Box sx={classes.root}>{isMobilV1 ? <MobileScreen /> : <DesktopScreen />}</Box>
    </>
  );
}
