'use client';

import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import useViewModel from '../useViewModel';
import FullScreenDialog from '@/src/components/FullWidthDialog';
import { ListSideNav2 } from '@/src/utils/constants';

export default function MobileScreen() {
  const { classes, handleButtonClick, handleEdit } = useViewModel();
  return (
    <>
      <Box sx={classes.mobileRoot}>
        <FullScreenDialog>
          {ListSideNav2.map((item, idx) => {
            return (
              <Box className="defaultBoxShadow" sx={classes.tableWrapper} fontSize="12px" key={idx}>
                <Typography fontWeight={700} fontSize="inherit">
                  Name: {item.label}
                </Typography>
                <Box>
                  <Typography fontWeight={700} fontSize="inherit">
                    Icon:
                  </Typography>
                </Box>
                <Button
                  variant="text"
                  sx={classes.tableButton}
                  onClick={() => handleEdit(item.id as unknown as string)}
                >
                  Edit
                </Button>
              </Box>
            );
          })}
        </FullScreenDialog>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item mx={1}>
            <Button sx={classes.buttonWrapper} onClick={() => handleButtonClick('category')}>
              <Typography> Category</Typography>
            </Button>
          </Grid>
          <Grid item mx={1}>
            <Button sx={classes.buttonWrapper}>
              <Typography> Category</Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
