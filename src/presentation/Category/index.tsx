/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import CustomTable from '@/src/components/Table';
import { Box, Typography } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import useViewModel from './useViewModel';
import CustomPieChart from '@/src/components/Chart';
import { labels } from '@/src/components/Chart/utils';
import moment from 'moment';
import { formatCurrency } from '@/src/utils/helper';

export default function CategoryPresentation() {
  const { classes, state, columns, rows, handleClick } = useViewModel();

  console.log(state);

  return (
    <div>
      <Box sx={classes.root}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
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
        <Box sx={classes.headerWrapper}>
          <Box>
            <Box sx={classes.filterWrapper} onClick={(event: any) => handleClick(event)}>
              <FilterAltIcon /> <Typography>Filter by</Typography>
            </Box>

            <Typography fontWeight={700}>Chart by filter</Typography>
            <Typography fontSize={'12px'} mb={2}>
              Date from{' '}
              <span style={{ fontWeight: 700 }}>{moment(state[0].startDate).format('LL')}</span> To{' '}
              <span style={{ fontWeight: 700 }}>{moment(state[0].endDate).format('LL')}</span>
            </Typography>
          </Box>
          <Box sx={classes.filterBoxWrapper}>
            <Box sx={classes.expenseWrapper} mx={1}>
              <Typography fontSize={'13px'} fontWeight={700}>
                Total expenses by filter
              </Typography>
              <Typography fontWeight={700} sx={{ color: 'error.main' }}>
                - {formatCurrency(7000)}
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
          </Box>
        </Box>

        <Box
          sx={{
            border: '1px solid',
            borderColor: 'primary.dark',
            borderRadius: '10px',
            mb: '20px',
            padding: '20px',
            py: 3,
            width: '100%',
            height: '470px',
          }}
        >
          <CustomPieChart
            color="#1b5e20"
            type="line"
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
        </Box>
        <Typography mb={2}>History</Typography>
        <CustomTable columns={columns} rows={rows} />
      </Box>
    </div>
  );
}
