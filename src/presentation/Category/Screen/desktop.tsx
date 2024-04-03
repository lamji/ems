/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import moment from 'moment';
import useViewModel from '../useViewModel';
import { Box, Typography } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { formatCurrency } from '@/src/utils/helper';

export default function CategoryDesktop() {
  const { classes, handleClick, state } = useViewModel();
  return (
    <div>
      <Box sx={classes.headerWrapper}>
        <Box>
          <Box sx={classes.filterWrapper} onClick={(event: any) => handleClick(event)}>
            <FilterAltIcon /> <Typography>Filter by</Typography>
          </Box>

          <Typography fontWeight={700}>Chart by filter</Typography>
          <Typography fontSize={'12px'} mb={2}>
            Date from{' '}
            <span style={{ fontWeight: 700 }}>{moment(state[0].startDate).format('LL')}</span> To{' '}
            <span style={{ fontWeight: 700 }}>{moment(state[0].endDate).format('LL')}</span>
          </Typography>
        </Box>
        <Box sx={classes.filterBoxWrapper}>
          <Box sx={classes.expenseWrapper} mx={1}>
            <Typography fontSize={'13px'} fontWeight={700}>
              Total expenses by filter
            </Typography>
            <Typography fontWeight={700} sx={{ color: 'error.main' }}>
              - {formatCurrency(7000)}
            </Typography>
          </Box>
          <Box sx={classes.balanceWrapper}>
            <Typography fontSize={'13px'} fontWeight={700}>
              Balance for Restaurants
            </Typography>
            <Typography fontWeight={700} sx={{ color: 'success.main' }}>
              {formatCurrency(600)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
