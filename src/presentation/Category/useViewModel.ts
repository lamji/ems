/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import useStyles from './useStyles';
import { addDays } from 'date-fns';
import { useIsMobile } from '@/src/utils/helper';
import { useAppDispatch, useAppSelector } from '@/src/utils/redux/hooks';
import { openDialog, setDateRange } from '@/src/utils/redux/slices/common';

export default function useViewModel() {
  const classes = useStyles();
  const { isMobilV1 } = useIsMobile();
  const state = useAppSelector((state) => state.common);
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [checked, setChecked] = React.useState(true);
  const open = Boolean(anchorEl);

  const columns = [
    { id: 'type', label: 'Type' },
    { id: 'amount', label: 'Amount' },
    { id: 'description', label: 'Description' },
    { id: 'date', label: 'Date' },
  ];

  const rows = [
    {
      id: 1,
      type: 'Category 1',
      amount: 100,
      description: 'Description 1',
      date: '2024-04-01',
    },
    {
      id: 2,
      type: 'Category 2',
      amount: 200,
      description: 'Description 2',
      date: '2024-04-02',
    },
    {
      id: 3,
      type: 'Category 3',
      amount: 300,
      description: 'Description 3',
      date: '2024-04-03',
    },
  ];
  const handleChange = (item: any) => {
    dispatch(setDateRange([item.selection]));
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  const handleClick = () => {
    dispatch(openDialog(true));
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseDialog = () => {
    dispatch(openDialog(false));
    dispatch(
      setDateRange([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 0),
          key: 'selection',
        },
      ])
    );
  };

  const handleApplyFilter = () => {
    dispatch(openDialog(false));
  };

  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleClear = () => {
    dispatch(
      setDateRange([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 0),
          key: 'selection',
        },
      ])
    );
  };

  return {
    classes,
    handleChange,
    state,
    columns,
    rows,
    open,
    handleClose,
    handleClick,
    anchorEl,
    isMobilV1,

    handleCloseDialog,
    handleClickMenu,
    openDialog: state.dialog.isOpen,
    checked,
    handleChangeCheckBox,
    handleClear,
    handleApplyFilter,
  };
}
