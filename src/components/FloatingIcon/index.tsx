import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

interface FloatingAddButtonProps {
  onClick: () => void;
  type?: string;
}

const FloatingAddButton: React.FC<FloatingAddButtonProps> = ({ onClick }) => {
  const buttonStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '50px',
    right: '20px',
  };

  return (
    <Fab color="primary" aria-label="add" style={buttonStyle} onClick={onClick}>
      <AddIcon />
    </Fab>
  );
};

export default FloatingAddButton;
