import React from 'react';
import useViewModel from '../useViewModel';
import { Grid, Typography } from '@mui/material';
import OptionCard from '../../OptionCard';

export default function MobileViewTransaction() {
  const { classes, handleSelectTransaction, isActive } = useViewModel();
  return (
    <div>
      <Typography variant="h4" sx={classes.selectTransaction}>
        Select Transaction
      </Typography>
      <Grid container justifyContent="space-between">
        <Grid item>
          <OptionCard
            icon={'/images/addFunds.png'}
            title="Add Funds"
            onClickCard={(i) => handleSelectTransaction(i)}
            isActive={isActive.add_funds}
            description={''}
          />
        </Grid>
        <Grid item>
          <OptionCard
            icon={'/images/send-money.png'}
            title="Transfer Funds"
            onClickCard={(i) => handleSelectTransaction(i)}
            isActive={isActive.transfer_funds}
            description={''}
          />
        </Grid>
        <Grid item>
          <OptionCard
            icon={'/images/split-money.png'}
            title="Split Funds"
            onClickCard={(i) => handleSelectTransaction(i)}
            isActive={isActive.split_funds}
            description={''}
          />
        </Grid>
        <Grid item>
          <OptionCard
            icon={'/images/spend-money.png'}
            title="Spend"
            onClickCard={(i) => handleSelectTransaction(i)}
            isActive={isActive.spend}
            description={''}
          />
        </Grid>
        <Grid item>
          <OptionCard
            icon={'/images/pay.png'}
            title="Pay"
            onClickCard={(i) => handleSelectTransaction(i)}
            isActive={isActive.pay}
            description={''}
          />
        </Grid>
      </Grid>
    </div>
  );
}
