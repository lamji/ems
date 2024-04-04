import React from 'react';
import useViewModel from './useViewModel';
import { Box } from '@mui/material';

export default function TransactionPresentations() {
  const { classes } = useViewModel();
  return (
    <>
      <Box sx={classes.root}>TransactionPresentations</Box>;
    </>
  );
}
