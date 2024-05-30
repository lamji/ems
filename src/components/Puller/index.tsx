/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAppSelector, useAppDispatch } from '@/src/utils/redux/hooks';
import { openPuller } from '@/src/utils/redux/slices/common';

function SwipeableModal({ children }: any) {
  const [open, setOpen] = useState(false);
  const state = useAppSelector((state) => state.common);
  const dispatch = useAppDispatch();

  const toggleDrawer = (open: any) => (event: any) => {
    console.log('open', open);
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  useEffect(() => {
    if (state.puller.isOpen) {
      console.log('state.puller.isOpen', state.puller.isOpen);
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [state.puller.isOpen]);

  return (
    <div
      style={{
        marginTop: '-40px',
        background: 'red',
        backgroundColor: 'white',
        textAlign: 'center',
        position: 'relative',
        zIndex: open ? 0 : 999999,
        borderTopRightRadius: '10px',
      }}
    >
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={() => dispatch(openPuller(false))}
        onOpen={toggleDrawer(true)}
        sx={{
          '& .MuiDrawer-paper': {
            background: 'transparent', // Set background of the drawer paper to transparent
          },
        }}
      >
        <div
          role="presentation"
          style={{
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '10px 20px',
            maxHeight: '600px',
            overflow: 'auto',
          }}
        >
          <div style={{ position: 'fixed', textAlign: 'right', right: 0, paddingRight: '20px' }}>
            <IconButton
              onClick={() => {
                dispatch(openPuller(false));
                toggleDrawer(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div>{children}</div>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default SwipeableModal;
