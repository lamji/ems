import useIsMobile from '@/src/utils/responsiveness';
import useStyles from './useStyles';

export default function ViewModel() {
  const { isMobile, tablet } = useIsMobile();
  const classes = useStyles();

  return {
    classes,
    isMobile,
    tablet,
  };
}
