/** @format */

'use client';
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import useViewModel from './useViewModel';
import { formatCurrencyTotal, useIsMobile } from '@/src/utils/helper';
import CustomPieChart from '../Chart';
import CardChart from '../CardChart';
import { customTheme } from '@/src/utils/theme';

export default function SideNav() {
  const { isMobile } = useIsMobile();
  const { classes, mainData, calculatePercentageSpent, incomeLabels, isMobilV1 } = useViewModel();

  return (
    <Box sx={{ ...classes.container, marginTop: isMobile ? '20px' : '0px' }}>
      <Grid container direction="column" justifyContent="space-between" alignItems="flex-start">
        <Grid item sx={{ width: '100%' }}>
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ textAlign: isMobilV1 ? 'center' : 'left' }}
          >
            Monthly Overview
          </Typography>
          <Box sx={{ margin: '20px 0' }}>
            <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
              <Grid sx={classes.card} item xs={5.8}>
                <Typography sx={classes.cardHeader}>Income</Typography>
                <CustomPieChart
                  color="#1b5e20"
                  type="bar"
                  width="150px"
                  dataChart={[10, 1, 1, 1, 1, 0, 130, 50, 20, 10, 10, 30]}
                  radius={20}
                  labels={incomeLabels}
                  xDisplay={false}
                  height="auto"
                  xGridDisplay={false}
                  yGridDisplay={false}
                  maintainAspectRatio={true}
                  yDisplay={false}
                />
                <Typography sx={classes.incomeAmount} variant="h5">
                  {formatCurrencyTotal(mainData?.income)}
                </Typography>
                <Typography sx={classes.cardSubHeaderIncome}>
                  + {formatCurrencyTotal(300)}
                </Typography>
              </Grid>
              <Grid sx={classes.redCard} item xs={5.8}>
                <Typography sx={classes.cardHeader}>Expense</Typography>
                <CustomPieChart
                  color="#c62828"
                  type="bar"
                  width="150px"
                  dataChart={[30, 50, 20, 1, 10, 30, 7, 1, 1, 1, 1, 1]}
                  radius={20}
                  labels={incomeLabels}
                  xDisplay={false}
                  height="auto"
                  xGridDisplay={false}
                  yGridDisplay={false}
                  maintainAspectRatio={true}
                  yDisplay={false}
                />
                <Typography sx={classes.expenseAmount} variant="h5">
                  {formatCurrencyTotal(mainData?.expenses)}
                </Typography>
                <Typography sx={classes.cardSubHeaderExpense}>
                  + {formatCurrencyTotal(700)}
                </Typography>
              </Grid>
            </Grid>
            {/* <Box sx={classes.card}> Income</Box>
            <Box sx={classes.card}>expense</Box> */}
          </Box>
          <Typography variant="body1">Expense by category</Typography>
          {/* Expense by category chart */}
          <Box>
            <CardChart
              bgColor={customTheme.palette.primary.light}
              chartBg={['#EE9322', '#f6c990']}
              dataChartCrd={[250, mainData.balance]}
              category="Food and Beverage"
              amount={formatCurrencyTotal(250)}
              percentage={calculatePercentageSpent(mainData?.balance, 250)}
            />
            <CardChart
              bgColor={customTheme.palette.secondary.light}
              chartBg={['#141E46', '#727890']}
              dataChartCrd={[500, mainData?.balance]}
              category="Food and Beverage"
              amount={formatCurrencyTotal(500)}
              percentage={calculatePercentageSpent(mainData?.balance, 500)}
            />
            <CardChart
              bgColor={customTheme.palette.primary.light}
              chartBg={['#EE9322', '#f6c990']}
              dataChartCrd={[200, mainData?.balance]}
              category="Food and Beverage"
              amount={formatCurrencyTotal(200)}
              percentage={calculatePercentageSpent(mainData?.balance, 200)}
            />
          </Box>
        </Grid>
        <Grid item>{/* account */}</Grid>
      </Grid>
    </Box>
  );
}
