/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useStyles } from './useStyles';
import useFormikModel from '@/src/utils/formik';

export default function useViewModel() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const open = Boolean(anchorEl);
  const { addFundsValidation } = useFormikModel();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (value: any) => {
    setSelectedValue(value); // Set the selected value
    handleClose(); // Close the menu
  };

  return {
    classes,
    addFundsValidation,
    handleClick,
    handleClose,
    anchorEl,
    open,
    selectedValue,
    handleMenuItemClick,
  };
}
