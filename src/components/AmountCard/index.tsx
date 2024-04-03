/* eslint-disable @typescript-eslint/no-explicit-any */
/** @format */

import { Box, Typography } from '@mui/material';
import React from 'react';

export default function AmountCard({ title, amount }: any) {
  return (
    <div>
      <Box sx={{ marginRight: '5px', p: 2, mt: 4 }}>
        <Typography sx={{ color: 'gray', fontSize: '12px', mb: '1px' }}>{title}</Typography>
        <Typography sx={{ fontWeight: 700 }}>{amount}</Typography>
      </Box>
    </div>
  );
}
