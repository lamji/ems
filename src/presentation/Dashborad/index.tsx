'use client';

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import useViewModel from './useViewModel';
import AmountCard from '@/src/components/AmountCard';
import { formatCurrencyTotal } from '@/src/utils/helper';

import SideNav from '@/src/components/ChartNav';
import FloatingAddButton from '@/src/components/FloatingIcon';
import MobileBackgroundComponent from '@/src/components/MobileHeaderWrapper';
import SwipeableEdgeDrawer from '@/src/components/Puller';
import MobileScreen from './Screen/mobile';
import DesktopView from './Screen/desktop';

export default function Dashboard() {
  const { classes, isMobile, isMobilV1 } = useViewModel();
  return (
    <div>
      <FloatingAddButton
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />

      <Box
        sx={{
          paddingRight: {
            xs: '0px',
            md: '20px',
          },
        }}
      >
        {isMobilV1 ? (
          <>
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
          </>
        ) : (
          <>
            <Typography
              className="defaultMobilePadding"
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: '40px',
                marginTop: isMobilV1 ? '20px' : 'unset',
                color: isMobilV1 ? 'primary.contrastText' : 'unset',
              }}
            >
              Dashboard
            </Typography>
          </>
        )}

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
            {!isMobilV1 && <DesktopView />}
          </Grid>
          {!isMobile && (
            <Grid className="sideNav" item xs={12} md={5} mt={2}>
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
