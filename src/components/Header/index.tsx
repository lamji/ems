import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Header() {
  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h3" fontWeight={700}>
          E
        </Typography>
        <Typography variant="h3" fontWeight={700} color="primary.contrastText">
          M
        </Typography>
        <Typography variant="h3" fontWeight={700}>
          S
        </Typography>
      </Box>
      <Typography fontSize="12px" color="primary.contrastText" sx={{ textAlign: 'center', mb: 2 }}>
        Expense managment Syatem (v1.0.0)
      </Typography>
    </div>
  );
}
