import { useMediaQuery } from '@mui/material';

function useIsMobile() {
  const isMobile = useMediaQuery('(max-width:895px)');
  const tablet = useMediaQuery('(min-width:768px) and (max-width:834px)'); // Adjusted query for tablet
  const dashboardHideCategory = useMediaQuery('(max-width:1381px)');

  return {
    isMobile,
    dashboardHideCategory,
    tablet,
  };
}

export default useIsMobile;
