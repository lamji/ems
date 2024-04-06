import useIsMobile from '@/src/utils/responsiveness';

export default function useStyles() {
  const { isMobile } = useIsMobile();
  return {
    root: {
      padding: '10px',
      height: isMobile ? 'auto' : '100vh',
    },
    dashBoard: {
      cursor: 'pointer',
      padding: '10px',
    },
  };
}
