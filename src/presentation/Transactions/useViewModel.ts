import { useIsMobile } from '@/src/utils/helper';
import useStyles from './useStyles';

export default function useViewModel() {
  const classes = useStyles();
  const { isMobilV1 } = useIsMobile();
  return {
    classes,
    isMobilV1,
  };
}
