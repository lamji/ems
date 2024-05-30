import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { useStyles } from './useStyles';

interface OptionCardProps {
  title: string;
  icon: string;
  description: string;
  onClickCard: (dataOut: string) => void;
  isActive: boolean;
}

function OptionCard({ title, icon, description, onClickCard, isActive }: OptionCardProps) {
  const classes = useStyles();
  const dataOut = title.toLowerCase().replace(' ', '_');
  const styleActive = isActive ? classes.containerActive : classes.container;

  return (
    <Box sx={styleActive} onClick={() => onClickCard(dataOut)}>
      <Typography sx={classes.title}>{title}</Typography>
      <Image src={icon} width={50} height={50} alt="" />
      <Typography sx={classes.description}>{description}</Typography>
    </Box>
  );
}

export default OptionCard;
