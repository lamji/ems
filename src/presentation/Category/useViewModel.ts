/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import useStyles from './useStyles';
import { addDays } from 'date-fns';
import React from 'react';

export default function useViewModel() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: 'selection',
    },
  ]);

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
    setState([item.selection]);
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
  };
}
