import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import useViewModel from '../useViewModel';
import FullScreenDialog from '@/src/components/FullWidthDialog';
import { MobileCategoryConfig } from '../Configs/category';

export default function MobileScreen() {
  const { classes, handleButtonClick, state } = useViewModel();
  return (
    <>
      <Box className="mobile-screen-container" sx={classes.mobileRoot}>
        <FullScreenDialog>
          {state.dialog.fullWidth.data.type === 'category' && <MobileCategoryConfig />}
          {state.dialog.fullWidth.data.type === 'chart' && <>Chart</>}
        </FullScreenDialog>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item mx={1}>
            <Button
              sx={classes.buttonWrapper}
              onClick={() => handleButtonClick('category')}
              className="category-button"
            >
              <Typography> Category</Typography>
            </Button>
          </Grid>
          <Grid item mx={1}>
            <Button
              sx={classes.buttonWrapper}
              className="category-button"
              onClick={() => handleButtonClick('chart')}
            >
              <Typography> Chart</Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
