/** @format */

import { Box, Typography, IconButton } from '@mui/material';
import React from 'react';
import CustomPieChart from '../Chart';
import { useStyles } from './useStyles';
import { formatCurrency } from '@/src/utils/helper';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function CardChart({
  bgColor,
  chartBg,
  dataChartCrd,
  category,
  amount,
  percentage,
}) {
  const classes = useStyles();
  if (dataChartCrd[1] === undefined) return null;
  return (
    <>
      <Box sx={{ marginTop: '10px' }}>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            background: bgColor,
            justifyContent: 'space-between',
            padding: '10px',
            borderRadius: 2,
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <Box sx={{ width: '100px', marginRight: '20px' }}>
              <CustomPieChart
                color={chartBg}
                type="doughnut"
                width="50px"
                dataChart={dataChartCrd}
                radius={2}
                labels={['Spent', 'Total']}
                maintainAspectRatio={true}
                xDisplay={false}
                xGridDisplay={false}
                yGridDisplay={false}
                yDisplay={false}
              />
            </Box>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography fontSize="17px" fontWeight={700} sx={{ marginRight: '10px' }}>
                  {category}
                </Typography>
                <IconButton>
                  <RemoveRedEyeIcon style={{ color: 'gray', fontSize: '18px' }} />
                </IconButton>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  sx={{
                    ...classes.primaryText,
                    fontWeight: 700,
                    color: 'success.dark',
                  }}
                >
                  {formatCurrency(dataChartCrd[1])}
                </Typography>
                <Typography sx={{ ...classes.primaryText, color: 'error.dark' }}>
                  -{amount}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box fontWeight={700}>{percentage}</Box>
        </Box>
      </Box>
    </>
  );
}
