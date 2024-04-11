/* eslint-disable @typescript-eslint/no-explicit-any */
/** @format */

import { Box, Typography, TypographyProps } from '@mui/material';
import React from 'react';

interface cardTypeInline {
  title?: string;
  amount: number;
  color: string;
  variant: TypographyProps['variant'];
}

export default function AmountCard({ title, amount, color, variant }: cardTypeInline) {
  return (
    <div>
      <Box
        sx={{
          marginRight: '5px',
          px: 2,
          mt: 0,
          color: 'primary.contrastText',
          textAlign: 'center',
        }}
      >
        <Box>
          <Typography>{title ? title : ''}</Typography>
          <Typography sx={{ fontWeight: 700, color: color }} variant={variant}>
            {color === 'white' ? amount : color === 'error.dark' ? `- ${amount}` : `+ ${amount}`}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
