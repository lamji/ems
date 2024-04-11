import AppCalendar from '@/src/components/Calendar';
import { Box, IconButton, InputBase, Paper, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import useViewModel from '../useViewModel';
import { dashboardData } from '@/src/utils/constants';
import CardItem from '@/src/components/CardItem';

export default function MobileScreen() {
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
        <Box className="defaultMobilePadding">
          <AppCalendar />
        </Box>
        <Box my={5}>
          {Object.keys(dashboardData).length !== 0 &&
            dashboardData?.transactions.map((res, id) => {
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
