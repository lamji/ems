import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import useViewModel from '../useViewModel';
import FullScreenDialog from '@/src/components/FullWidthDialog';
import Image from 'next/image';
import { ListSideNav2 } from '@/src/utils/constants';
import EditModeBox from '@/src/components/EditMode';

export default function DesktopScreen() {
  const {
    classes,
    handleButtonClick,
    handleEdit,
    activeId,
    handleSave,
    handleCancel,
    state,
    isPending,
  } = useViewModel();
  return (
    <>
      <FullScreenDialog>
        {ListSideNav2.map((item) => {
          return (
            <Box mt={4} sx={classes.boxInputWrapper} key={item.id}>
              {activeId === (item.id as unknown as string) ? (
                <>
                  <EditModeBox
                    item={item}
                    state={state}
                    handleSave={handleSave}
                    handleCancel={handleCancel}
                    isPending={isPending}
                    type="edit"
                  />
                </>
              ) : (
                <>
                  <Box mr={3}>
                    <Image src={item.icon} width={30} height={30} alt="Picture of the author" />
                  </Box>
                  <TextField
                    id="outlined-basic"
                    label={'Expense Category'}
                    variant="outlined"
                    value={item.label}
                    placeholder={item.label}
                    size="small"
                    disabled
                    sx={{
                      p: 0,
                      '& .MuiInputBase-input.Mui-disabled': {
                        color: 'black', // Override text color
                        '-webkit-text-fill-color': '#070505',
                        backgroundColor: 'initial', // Override background color
                      },
                    }}
                  />
                  <Button
                    sx={{ mx: '4px', textTransform: 'capitalize' }}
                    onClick={() => handleEdit(item.id as unknown as string)}
                    variant="contained"
                  >
                    Update
                  </Button>
                  <Button
                    sx={{ mx: '4px', textTransform: 'capitalize', backgroundColor: 'error.main' }}
                    onClick={() => null}
                    variant="contained"
                  >
                    Delete
                  </Button>
                </>
              )}
            </Box>
          );
        })}
        {state.dialog.isAdd && (
          <EditModeBox
            state={state}
            handleSave={handleSave}
            handleCancel={handleCancel}
            isPending={isPending}
            type="add"
          />
        )}
      </FullScreenDialog>
      <Box sx={classes.mobileRoot}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item mx={1}>
            <Button sx={classes.buttonWrapper} onClick={() => handleButtonClick('category')}>
              <Typography> Category</Typography>
            </Button>
          </Grid>
          <Grid item mx={1}>
            <Button sx={classes.buttonWrapper}>
              <Typography> Chart</Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
