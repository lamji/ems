/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';

import useViewModel from './useViewModel';
import CustomPieChart from '@/src/components/Chart';
import { labels } from '@/src/components/Chart/utils';

import CategoryDesktop from './Screen/desktop';
import { CardMobile, ChartMobile } from './Screen/mobile';
import Table from '@/src/components/Table';
import { customTheme } from '@/src/utils/theme';

export default function CategoryPresentation() {
  const { classes, columns, rows, isMobilV1 } = useViewModel();

  console.log(isMobilV1);

  return (
    <div>
      <Box sx={classes.root}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, mb: 2, marginTop: isMobilV1 ? '50px' : 'unset' }}
        >
          Category
        </Typography>

        {/* <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem>
            <Box>
              <Typography>Select Type</Typography>
              <DateRangePicker
                onChange={(item) => handleChange(item)}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={state}
                direction="horizontal"
              />
            </Box>
          </MenuItem>
        </Menu> */}
        {isMobilV1 ? <CardMobile /> : <CategoryDesktop />}

        <Box sx={{ ...classes.chartWrapper, height: isMobilV1 ? 'auto' : '470px' }}>
          <Box sx={{ width: '400px' }}>
            {isMobilV1 ? (
              <ChartMobile />
            ) : (
              <CustomPieChart
                color={customTheme.palette.primary.dark}
                type="bar"
                width="100%"
                height="370px"
                dataChart={[10, 1, 1, 1, 1, 0, 130, 50, 20, 10, 10, 30]}
                radius={20}
                labels={labels}
                xDisplay={true}
                xGridDisplay={true}
                yGridDisplay={true}
                maintainAspectRatio={false}
                yDisplay={true}
              />
            )}
          </Box>
        </Box>
        <Typography mb={2} fontWeight={700}>
          History
        </Typography>
        <Table columns={columns} rows={rows} />
      </Box>
    </div>
  );
}
