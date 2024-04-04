import React from 'react';
import { Box, Typography } from '@mui/material';
import useViewModel from '../useViewModel';
import CardItem from '../../CardItem';
import { customTheme } from '@/src/utils/theme';
import { formatCurrency } from '@/src/utils/helper';

export default function CustomMobileTable() {
  const { classes, constants } = useViewModel();
  return (
    <div>
      <Box sx={classes.rootMobile}>
        <Box>
          <Typography>
            Today{'  '}
            <span style={{ color: customTheme.palette.error.main }}>-{formatCurrency(10000)}</span>
          </Typography>
        </Box>
        <Box sx={classes.historyBox}>
          {Object.keys(constants.dashboardData).length !== 0 &&
            constants.dashboardData?.transactions.map((res, id) => {
              return (
                <CardItem
                  key={id}
                  type={res.type}
                  description={res.description}
                  dateAdded={res.dateAdded}
                  categoryName={''}
                  amount={res.amount}
                />
              );
            })}
        </Box>
        <Box>
          <Typography>
            Yesterday{'  '}
            <span style={{ color: customTheme.palette.error.main }}>-{formatCurrency(10000)}</span>
          </Typography>
        </Box>
        <Box sx={classes.historyBox}>
          {Object.keys(constants.dashboardData).length !== 0 &&
            constants.dashboardData?.transactions.map((res, id) => {
              return (
                <CardItem
                  key={id}
                  type={res.type}
                  description={res.description}
                  dateAdded={res.dateAdded}
                  categoryName={''}
                  amount={res.amount}
                />
              );
            })}
        </Box>
      </Box>
    </div>
  );
}
