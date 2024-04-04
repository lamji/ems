import { useIsMobile } from '@/src/utils/helper';
import useStyles from './useStyles';

export default function useViewModel() {
  const classes = useStyles();
  const { isMobile, tablet, isMobilV1 } = useIsMobile();

  const handleAddTransaction = () => {
    //  setOpenModal(true);
    //  setTransactionType('income');
  };
  return {
    classes,
    handleAddTransaction,
    isMobile,
    tablet,
    isMobilV1,
  };
}
