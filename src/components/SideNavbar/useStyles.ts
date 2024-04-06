import useIsMobile from '@/src/utils/responsiveness';
import { customTheme } from '@/src/utils/theme';

export default function useStyles() {
  const { isMobile } = useIsMobile();
  return {
    root: {
      padding: '10px',
      height: isMobile ? 'auto' : '100vh',
      backgroundColor: customTheme.palette.primary.light,
    },
    dashBoard: {
      cursor: 'pointer',
      padding: '10px',
    },
  };
}
