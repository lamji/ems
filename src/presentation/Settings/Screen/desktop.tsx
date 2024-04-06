import { Box } from '@mui/material';
import React from 'react';
import useViewModel from '../useViewModel';

export default function DesktopScreen() {
  const { classes } = useViewModel();
  return (
    <>
      <Box sx={classes.mobileRoot}>Mobile</Box>
    </>
  );
}
