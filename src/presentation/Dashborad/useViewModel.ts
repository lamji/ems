import { useIsMobile } from '@/src/utils/helper';
import useStyles from './useStyles';
import { useRouter } from 'next/navigation';

export default function useViewModel() {
  const router = useRouter();
  const classes = useStyles();
  const { isMobile, tablet, isMobilV1 } = useIsMobile();

  const handleAddTransaction = () => {
    router.push('/transaction');
  };
  return {
    classes,
    handleAddTransaction,
    isMobile,
    tablet,
    isMobilV1,
  };
}
