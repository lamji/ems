import { useState } from 'react';
import { useIsMobile } from '@/src/utils/helper';
import useStyles from './useStyles';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/src/utils/redux/hooks';

export default function useViewModel() {
  const router = useRouter();
  const classes = useStyles();
  const state = useAppSelector((state) => state.common);
  const { isMobile, tablet, isMobilV1 } = useIsMobile();
  const [formattedAmount, setFormattedAmount] = useState<string>('');

  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

  const handleAddTransaction = () => {
    router.push('/transaction');
  };

  const formatNumber = (value: string) => {
    return value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formattedValue = formatNumber(rawValue);
    setFormattedAmount(formattedValue);
  };

  return {
    classes,
    handleAddTransaction,
    isMobile,
    tablet,
    isMobilV1,
    state,
    handleAmountChange,
    formattedAmount,
    currencies,
  };
}
