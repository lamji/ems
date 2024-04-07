import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/src/utils/redux/hooks';
import { setAddDialog, setFullWidthOpen } from '@/src/utils/redux/slices/common';
import AddIcon from '@mui/icons-material/Add';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface FullScreenDialogProps {
  children: React.ReactNode;
}

export default function FullScreenDialog({ children }: FullScreenDialogProps) {
  const state = useAppSelector((state) => state.common.dialog);
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(
      setFullWidthOpen({
        isOpen: false,
        data: {},
      })
    );
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={state.fullWidth.isOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'fixed', background: 'white' }} elevation={0}>
          <Toolbar>
            <IconButton edge="start" color="primary" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div" color="primary">
              Config
            </Typography>
            <Button autoFocus onClick={handleClose} color="primary">
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Box className="content" sx={{ padding: '20px', mt: '40px' }}>
          {children}
        </Box>
        {state.fullWidth.data.type !== 'chart' && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto', mb: 2 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ width: '60px', height: '60px', borderRadius: '100px' }}
              onClick={() => {
                dispatch(setAddDialog(true));
              }}
            >
              <AddIcon />
            </Button>
          </Box>
        )}
      </Dialog>
    </React.Fragment>
  );
}
