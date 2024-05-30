import { useState } from 'react';
import { useStyles } from './useStyles';
import { useIsMobile } from '@/src/utils/helper';
import { setTransaction } from '@/src/utils/redux/slices/common';
import { useAppSelector, useAppDispatch } from '@/src/utils/redux/hooks';

export default function useViewModel() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.common);
  const { isMobilV1 } = useIsMobile();
  const classes = useStyles();
  //   const categories = [];

  const [isActive, setIsActive] = useState({
    add_funds: true,
    transfer_funds: false,
    split_funds: false,
    spend: false,
    pay: false,
  });

  const transDescription = {
    addFunds: 'This transaction will add to main balance',
    transferFunds:
      'This transaction will transfer from balance or from category to another category',
    splitFunds: 'This transaction will split the funds into different category or savings',
    spend: 'This transaction will deduct funds depends in which category your going to spent',
    pay: 'This transaction will deduct funds to pay for your loan, etc',
  };

  function setActiveAction(action: keyof typeof isActive, transactionType: string) {
    const updatedState = {
      add_funds: false,
      transfer_funds: false,
      split_funds: false,
      spend: false,
      pay: false,
    };
    updatedState[action] = true;

    const typeDescription = () => {
      if (transactionType === 'add_funds') {
        return transDescription.addFunds;
      } else if (transactionType === 'transfer_funds') {
        return transDescription.transferFunds;
      } else if (transactionType === 'split_funds') {
        return transDescription.splitFunds;
      } else if (transactionType === 'spend') {
        return transDescription.spend;
      } else if (transactionType === 'pay') {
        return transDescription.pay;
      } else {
        return ''; // Return a default value if transactionType doesn't match any condition
      }
    };

    setIsActive(updatedState);
    dispatch(
      setTransaction({
        description: typeDescription(),
        active: updatedState,
      })
    );
  }

  const handleSelectTransaction = (transactionType: string) => {
    setActiveAction(transactionType as keyof typeof isActive, transactionType);
  };

  return {
    classes,
    handleSelectTransaction,
    isActive,
    isMobilV1,
    test: isActive.add_funds,
    state,
  };
}
