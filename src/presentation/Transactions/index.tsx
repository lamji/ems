import React from 'react';
import useViewModel from './useViewModel';
import { Box } from '@mui/material';
import MobileView from './Screen/mobile';
import DesktopView from './Screen/desktop';

export default function TransactionPresentations() {
  const { classes, isMobilV1 } = useViewModel();
  return (
    <>
      <Box sx={classes.root}>{isMobilV1 ? <MobileView /> : <DesktopView />}</Box>
    </>
  );
}
