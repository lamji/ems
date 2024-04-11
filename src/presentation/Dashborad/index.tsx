'use client';

import React from 'react';
import { Box, Divider, Grid, IconButton, InputBase, Paper, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useViewModel from './useViewModel';
import AppCalendar from '@/src/components/Calendar';
import AmountCard from '@/src/components/AmountCard';
import { formatCurrencyTotal } from '@/src/utils/helper';
import { dashboardData } from '@/src/utils/constants';
import CardItem from '@/src/components/CardItem';
import SideNav from '@/src/components/ChartNav';
import FloatingAddButton from '@/src/components/FloatingIcon';
import MobileBackgroundComponent from '@/src/components/MobileHeaderWrapper';
import SwipeableEdgeDrawer from '@/src/components/Puller';
import MobileScreen from './Screen/mobile';

export default function Dashboard() {
  const { classes, isMobile, isMobilV1 } = useViewModel();
  return (
    <div>
      {isMobilV1 && (
        <FloatingAddButton
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      )}

      <Box
        sx={{
          paddingRight: {
            xs: '0px',
            md: '20px',
          },
        }}
      >
        <MobileBackgroundComponent>
          <Typography
            className="defaultMobilePadding"
            variant="h5"
            sx={{
              fontWeight: 700,

              marginTop: isMobilV1 ? '20px' : 'unset',
              color: isMobilV1 ? 'primary.contrastText' : 'unset',
            }}
          >
            Dashboard
          </Typography>
          <AmountCard
            title="Availbale Funds"
            amount={formatCurrencyTotal(3000) as unknown as number}
            color="white"
            variant="h5"
          />
          <Box className="flexBoxCenter">
            <AmountCard
              amount={formatCurrencyTotal(3000) as unknown as number}
              color={'error.main'}
              variant={undefined}
            />
            <AmountCard
              amount={formatCurrencyTotal(3000) as unknown as number}
              color={'success.main'}
              variant={undefined}
            />
          </Box>
        </MobileBackgroundComponent>

        <Grid
          className="defaultBoxShadow"
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{
            borderTopRightRadius: '40px',
            borderTopLeftRadius: '40px',
            marginTop: '-50px',
            background: 'white',
          }}
        >
          <Grid item xs={12} md={7} sx={classes.transactionsWrapper}>
            {isMobile && (
              <Grid className="sideNav" item xs={12} md={4} mb={5}>
                <SideNav />
              </Grid>
            )}
            {/* <Box className="defaultMobilePadding">
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
            </Box> */}

            {/* Calendar by week */}
            {/* <Box className="defaultMobilePadding">
              <AppCalendar />
            </Box> */}
            {/* Total money Expense, Income, Balance */}
            {/* <Box>
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
            </Box> */}
          </Grid>
          {!isMobile && (
            <Grid className="sideNav" item xs={12} md={5}>
              <SideNav />
            </Grid>
          )}
        </Grid>
      </Box>
      {isMobilV1 && (
        <SwipeableEdgeDrawer>
          <MobileScreen />
        </SwipeableEdgeDrawer>
      )}
    </div>
  );
}
