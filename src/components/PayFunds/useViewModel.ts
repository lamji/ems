import useFormikModel from '@/src/utils/formik';
import useStyles from './useStyles';

export default function useViewModel() {
  const { payFundsValidation } = useFormikModel();
  const classes = useStyles();
  return {
    classes,
    payFundsValidation,
  };
}
