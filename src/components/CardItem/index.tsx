/* eslint-disable @typescript-eslint/no-explicit-any */
/** @format */

import React from 'react';
import { useStyles } from './useStyles';
import { Box, Typography } from '@mui/material';
import moment from 'moment/moment';

import Image from 'next/image';
import { formatCurrency, useIsMobile } from '@/src/utils/helper';

export default function CardItem({ type, description, dateAdded, categoryName, amount, img }: any) {
  const classes = useStyles();
  const { isMobile } = useIsMobile();

  if (!type) return null;

  return (
    <>
      <Box className="card-item-container" sx={classes.container}>
        <Box className="card-item-first-wrapper" sx={classes.firstWrapper}>
          <Box className="card-image-wrapper" sx={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src={img}
              width={30}
              height={30}
              alt="Picture of the author"
              style={classes.images}
            />

            <Typography
              className="card-item-category-name"
              sx={{ ...classes.income, display: isMobile ? 'none' : 'block' }}
            >
              {categoryName}
            </Typography>
          </Box>

          <Box className="card-item-description-wrapper" sx={classes.descriptionWrapper}>
            <Typography className="card-item-description" sx={classes.title}>
              {description}
            </Typography>
            <Typography sx={classes.date}>
              {moment(dateAdded).format('DD MMM YY, hh:mm A')}
            </Typography>
          </Box>
          <Typography sx={{ ...classes.category, display: isMobile ? 'none' : 'block' }}>
            {type || ''}
          </Typography>
        </Box>
        {type.toLowerCase() === 'income' ? (
          <Box>
            {isMobile && (
              <Typography sx={{ textAlign: 'right', fontSize: '12px', fontWeight: 700 }}>
                {categoryName || ''}
              </Typography>
            )}

            <Typography sx={classes.incomeAmount}>+ {formatCurrency(amount)}</Typography>
          </Box>
        ) : (
          <Box>
            {isMobile && (
              <Typography sx={{ textAlign: 'right', fontSize: '12px', fontWeight: 700 }}>
                {categoryName || ''}
              </Typography>
            )}

            <Typography sx={classes.expenseAmount}>- {formatCurrency(amount)}</Typography>
          </Box>
        )}
      </Box>
    </>
  );
}
