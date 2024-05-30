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
import DesktopView from './Screen/desktop';
import { dashBoardTotal } from '@/src/utils/constants';
import { MobileScreenAddTransation, MobileScreenOPenTransation } from './Screen/mobile';

export default function Dashboard() {
  const { classes, isMobile, isMobilV1, state } = useViewModel();
  return (
    <div>
      <FloatingAddButton />

      <Box
        sx={{
          paddingRight: {
            xs: '0px',
            md: '20px',
          },
        }}
      >
        {!isMobilV1 && (
          <>
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
            <Box sx={classes.amountCardWrapper}>
              {dashBoardTotal.map((item, idx) => {
                return (
                  <Box
                    key={idx}
                    sx={{
                      ...classes.amountCard,
                      borderColor: item.color,
                    }}
                  >
                    <Typography fontWeight={700}>{item.label}</Typography>
                    <Typography color={item.color}>
                      {item.sign + ' '}
                      {formatCurrencyTotal(item.amount)}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </>
        )}
        {isMobilV1 && (
          <>
            <MobileBackgroundComponent>
              <Typography
                className="defaultMobilePadding"
                variant="h5"
                sx={{
                  fontWeight: 700,
                  marginTop: isMobilV1 ? '20px' : 'unset',
                  color: 'white',
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
        )}

        <Grid
          className={`${isMobilV1 ? 'defaultBoxShadow' : ''}`}
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
          {state.puller.type === 'openTransaction' ? (
            <MobileScreenOPenTransation />
          ) : (
            <MobileScreenAddTransation />
          )}
        </SwipeableEdgeDrawer>
      )}
    </div>
  );
}
