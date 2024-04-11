/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DragHandleIcon from '@mui/icons-material/DragHandle';
function SwipeableModal({ children }: any) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: any) => (event: any) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

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
      {!open && (
        <Button onClick={toggleDrawer(true)}>
          <DragHandleIcon />
        </Button>
      )}

      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
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
            <IconButton onClick={toggleDrawer(false)}>
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
