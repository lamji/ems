'use client';

import React from 'react';
import { Box, Divider, Grid, IconButton, InputBase, Paper, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import useViewModel from './useViewModel';
import AppCalendar from '@/src/components/Calendar';
import AmountCard from '@/src/components/AmountCard';
import { formatCurrencyTotal } from '@/src/utils/helper';
import { dashboardData } from '@/src/utils/constants';
import CardItem from '@/src/components/CardItem';
import SideNav from '@/src/components/ChartNav';

export default function Dashboard() {
  const { classes, handleAddTransaction, isMobile, isMobilV1 } = useViewModel();
  return (
    <div>
      <Box
        sx={{
          paddingRight: {
            xs: '0px',
            md: '20px',
          },
        }}
      >
        <Typography
          className="defaultMobilePadding"
          variant="h5"
          sx={{ fontWeight: 700, mb: 2, marginTop: isMobilV1 ? '50px' : 'unset' }}
        >
          Dashboard
        </Typography>

        <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
          <Grid item xs={12} md={7} sx={classes.transactionsWrapper}>
            {isMobile && (
              <Grid className="sideNav" item xs={12} md={4} mb={5}>
                <SideNav />
              </Grid>
            )}
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
                  />
                  <IconButton type="button" sx={{ p: '10px' }} color="primary" aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Paper>
                <Box>
                  <IconButton
                    type="button"
                    sx={classes.iconSx}
                    aria-label="search"
                    onClick={() => handleAddTransaction()}
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>

            {/* Calendar by week */}
            <Box className="defaultMobilePadding">
              <AppCalendar />
            </Box>
            {/* Total money Expense, Income, Balance */}
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <AmountCard title="Expenses" amount={formatCurrencyTotal(1000)} />
                  <AmountCard title="Income" amount={formatCurrencyTotal(3000)} />
                </Box>
                <AmountCard title="Balance" amount={formatCurrencyTotal(500)} />
              </Box>
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
          </Grid>
          {!isMobile && (
            <Grid className="sideNav" item xs={12} md={5}>
              <SideNav />
            </Grid>
          )}
        </Grid>
      </Box>
    </div>
  );
}
