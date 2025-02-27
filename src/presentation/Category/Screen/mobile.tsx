/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import moment from 'moment';
import useViewModel from '../useViewModel';
import { Box, Typography } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { formatCurrency } from '@/src/utils/helper';
import { labels } from '@/src/components/Chart/utils';
import CustomPieChart from '@/src/components/Chart';
import { customTheme } from '@/src/utils/theme';

export function CardMobile() {
  const { classes, handleClick, state } = useViewModel();
  return (
    <div>
      <Box sx={classes.expenseWrapper} mb={2}>
        <Typography fontSize={'13px'} fontWeight={700}>
          Total expenses by filter
        </Typography>
        <Typography fontWeight={700} sx={{ color: 'error.main' }}>
          {formatCurrency(7000)}
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
      <Box>
        <Box sx={classes.filterWrapper} onClick={() => handleClick()}>
          <FilterAltIcon /> <Typography>Filter by Date</Typography>
        </Box>

        <Typography fontWeight={700}>Chart by filter</Typography>
        <Typography fontSize={'12px'} mb={2}>
          Date from{' '}
          <span style={{ fontWeight: 700 }}>
            {moment(state?.date?.selectedDate[0]?.startDate).format('LL')}
          </span>{' '}
          To{' '}
          <span style={{ fontWeight: 700 }}>
            {moment(state?.date?.selectedDate[0]?.endDate).format('LL')}
          </span>
        </Typography>
      </Box>
    </div>
  );
}

export const ChartMobile = () => {
  const width = labels.length * 50;
  return (
    <CustomPieChart
      color={customTheme.palette.primary.dark}
      type="bar"
      width={`${width}px`}
      height="170px"
      dataChart={[
        10, 1, 1, 1, 1, 0, 130, 50, 20, 10, 10, 30, 10, 1, 1, 1, 1, 0, 130, 50, 20, 10, 10, 30,
      ]}
      radius={20}
      labels={labels}
      xDisplay={true}
      xGridDisplay={true}
      yGridDisplay={true}
      maintainAspectRatio={false}
      yDisplay={true}
    />
  );
};
