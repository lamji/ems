import React from 'react';
import AppCalendar from '@/src/components/Calendar';
import CardItem from '@/src/components/CardItem';
import { dashboardData } from '@/src/utils/constants';
import { Box, Divider, IconButton, InputBase, Paper, Typography } from '@mui/material';
import useViewModel from '../useViewModel';
import SearchIcon from '@mui/icons-material/Search';

export default function DesktopView() {
  const { classes } = useViewModel();
  return (
    <div>
      <Box className="defaultMobilePadding">
        <Typography variant="h5" fontWeight={700}>
          Daily Transactions
        </Typography>
        <Box sx={classes.searchWrapper}>
          <Paper component="form" sx={classes.PaperSx}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search "
              inputProps={{ 'aria-label': 'search google maps' }}
              fullWidth
            />
            <IconButton type="button" sx={{ p: '10px' }} color="primary" aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
      </Box>

      {/* Calendar by week */}
      <Box className="defaultMobilePadding">
        <AppCalendar />
      </Box>
      {/* Total money Expense, Income, Balance */}
      <Box>
        <Divider sx={{ mb: 2 }} />
        <Box>
          {Object.keys(dashboardData).length !== 0 &&
            dashboardData?.transactions.map((res, id) => {
              console.log('hahahhahha', res.image);
              return (
                <CardItem
                  key={id}
                  type={res.type}
                  description={res.description}
                  dateAdded={res.dateAdded}
                  categoryName={res.categoryName}
                  amount={res.amount}
                  img={res.image}
                />
              );
            })}
        </Box>
      </Box>
    </div>
  );
}
