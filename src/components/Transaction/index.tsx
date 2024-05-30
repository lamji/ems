import React from 'react';
import MobileViewTransaction from './Screen/mobile';
import { Box, Typography } from '@mui/material';
import useViewModel from './useViewModel';
import AddFunds from '../AddFunds';
import PayFunds from '../PayFunds';

export default function Transaction() {
  const { classes, state, isMobilV1 } = useViewModel();

  return (
    <div>
      <Box sx={classes.container}>
        {isMobilV1 ? <MobileViewTransaction /> : <>Desktop</>}
        <Typography sx={classes.description}>{state.transaction.description}</Typography>
        <Box sx={classes.formContainer}>
          {state.transaction.active.add_funds && <AddFunds />}
          {state.transaction.active.pay && <PayFunds />}
          {/* {isActive.add_funds && <AddFunds />}
          {isActive.transfer_funds && <TransferFunds />}
          {isActive.split_funds && <SplitFunds />}
          {isActive.spend && <SpendFunds />} */}
        </Box>
      </Box>
    </div>
  );
}
