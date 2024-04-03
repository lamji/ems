import { useMediaQuery } from '@mui/material';

/**
 * format number
 */
export function formatCurrencyTotal(total: number, currency = '₱') {
  const currencySymbol = currency;
  const formattedTotal = Math.abs(total).toFixed(2);
  const parts = formattedTotal.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  if (total < 0) {
    return `-${currencySymbol} ${parts.join('.')}`;
  } else {
    return `${currencySymbol} ${parts.join('.')}`;
  }
}

export const useIsMobile = () => {
  const isMobile = useMediaQuery('(max-width:460px)');
  const tablet = useMediaQuery('(min-width:768px) and (max-width:834px)'); // Adjusted query for tablet
  const dashboardHideCategory = useMediaQuery('(max-width:1381px)');

  return {
    isMobile,
    dashboardHideCategory,
    tablet,
  };
};

export const iconGenerator = (name: string) => {
  const res = name.toLowerCase();
  const icon = `/images/cat_icons/${res}.png`;
  return icon;
};

export const formatCurrency = (total: number, currency = '₱') => {
  const currencySymbol = currency;
  const formattedTotal = Math.abs(total).toFixed(2);
  const parts = formattedTotal.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  if (total < 0) {
    return `-${currencySymbol} ${parts.join('.')}`;
  } else {
    return `${currencySymbol} ${parts.join('.')}`;
  }
};
