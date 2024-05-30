import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from '@/src/utils/redux/store';
import { openPuller } from '@/src/utils/redux/slices/common';

const FloatingAddButton: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch();

  const buttonStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '50px',
    right: '20px',
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (type?: string) => {
    handleClose();
    dispatch(
      openPuller({
        isOpen: true,
        type: type,
      })
    );
  };

  return (
    <React.Fragment>
      <Fab color="primary" aria-label="add" style={buttonStyle} onClick={handleClick}>
        {anchorEl ? <RemoveIcon /> : <AddIcon />}
      </Fab>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            // backgroundColor: 'primary.main',
            // boxShadow: 'none',
            marginTop: '-100px',
          },
        }}
      >
        <MenuItem
          onClick={() => {
            handleMenuClick('openTransaction');
          }}
        >
          Open Transaction
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleMenuClick('addTransaction');
          }}
        >
          Add Transaction
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default FloatingAddButton;
