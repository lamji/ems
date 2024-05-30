import { useState } from 'react';
import { useStyles } from './useStyles';
import { useAppDispatch } from '@/src/utils/redux/hooks';
import useFormikModel from '@/src/utils/formik';
import { ListSideNav2 } from '@/src/utils/constants';
import { setFundAmount, setTransferFrom } from '@/src/utils/redux/slices/common';

export default function useViewModel() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [selectedValueTo, setSelectedValueTo] = useState<string | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const open = Boolean(anchorEl);
  const dispatch = useAppDispatch();
  const { transferFundsValidation } = useFormikModel();

  const menuItem = [
    {
      label: 'Transfer From',
      name: 'transferFrom',
    },
    {
      label: 'Transfer To',
      name: 'transferTo',
    },
  ];

  const fundsItem = {
    label: 'Funds',
    icon: '/images/cat_icons/funds.png',
    amount: 10000,
  };

  const transferFromMenu =
    selectedValueTo === null
      ? [fundsItem, ...ListSideNav2]
      : [fundsItem, ...ListSideNav2].filter(
          (item) => item.label.toLowerCase() !== selectedValueTo.toLowerCase()
        );

  const transferToMenu =
    selectedValue === null
      ? ListSideNav2
      : ListSideNav2.filter((item) => item.label.toLowerCase() !== selectedValue.toLowerCase());

  function capitalizeWords(inputString: string) {
    const words = inputString.split(' ');
    const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    const resultString = capitalizedWords.join(' ');
    return resultString;
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
  };

  const handleMenuItemClick = (value: string, amt: string) => {
    setSelectedAmount(parseInt(amt));
    setSelectedValue(value);
    dispatch(setFundAmount(parseInt(amt)));
    dispatch(setTransferFrom(value));
    transferFundsValidation.setValues({
      ...transferFundsValidation.values,
      transferFrom: value,
    });
    handleClose();
  };

  const handleMenuItemClickTo = (val: string) => {
    setSelectedValueTo(val);
    transferFundsValidation.setValues({
      ...transferFundsValidation.values,
      transferTo: val,
    });
    handleClose();
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    transferFundsValidation.setValues({
      ...transferFundsValidation.values,
      transferAmount: parseFloat(e.target.value),
    });
  };

  const menuProps = {
    id: 'basic-menu1',
    anchorEl: anchorEl,
    open: Boolean(anchorEl),
    onClose: handleClose,
    style: { width: '100%' },
    sx: classes.muiPaperRoot,
    MenuListProps: {
      'aria-labelledby': 'basic-button',
    },
  };

  const helperPropsFrom = {
    sx: {
      ...classes.helper,
      //   display: transferFundsValidation?.errors?. ? 'block' : 'none',
    },
  };

  const helperPropsTo = {
    sx: {
      ...classes.helper,
      //   display: transferFundsValidation?.errors?.transferTo ? 'block' : 'none',
    },
  };

  const selectBoxPropsTo = {
    id: 'basic-button',
    'aria-controls': anchorEl2 ? 'basic-menu' : undefined,
    'aria-haspopup': 'true',
    'aria-expanded': anchorEl2 ? 'true' : undefined,
    onClick: handleClick2,
    sx: {
      ...classes.selectBox,
      //   borderColor: transferFundsValidation?.errors?.transferTo ? 'error.main' : 'inherit',
    },
  };

  const menuPropsTo = {
    id: 'basic-menu1',
    anchorEl: anchorEl2,
    open: Boolean(anchorEl2),
    name: 'transferTo',
    onClose: handleClose,
    style: { width: '100%' },
    sx: classes.muiPaperRoot,
    MenuListProps: {
      'aria-labelledby': 'basic-button',
    },
  };

  console.log('transferFundsValidation', transferFundsValidation);

  return {
    classes,
    transferFundsValidation,
    handleClick,
    handleClose,
    anchorEl,
    open,
    selectedValue,
    handleMenuItemClick,
    menuItem,
    menuProps,
    helperPropsFrom,
    helperPropsTo,
    selectBoxPropsTo,
    selectedValueTo,
    menuPropsTo,
    capitalizeWords,
    handleMenuItemClickTo,
    // iconGenerator,
    // budgetCategories,
    transferFromMenu,
    transferToMenu,
    selectedAmount,
    handleAmountChange,
  };
}
