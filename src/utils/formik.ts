/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useAppSelector } from './redux/hooks';
import { formatCurrencyTotal } from './helper';

export default function useFormikModel() {
  const state = useAppSelector((state) => state.common);
  const transferFundsValidationSchema = yup.object({
    transferTo: yup.string().required('Transfer To is required'),
    transferFrom: yup.string().required('Transfer From is required'),
    transferAmount: yup
      .number()
      .required('Amount is required')
      .test(
        'is-greater-than-100',
        `Insufficient balance from ${
          state.transferFrom
        }, Amount to transfer must be less than ${formatCurrencyTotal(
          state.transferFrom.fundAmount
        )}`,
        (value) => value < state.transferFrom.fundAmount
      ),
  });

  const addFundsValidation = useFormik({
    initialValues: {},
    validationSchema: yup.object({
      funds: yup.number().required('Funds is required'),
    }),
    onSubmit: (values: any) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const payFundsValidation = useFormik({
    initialValues: {},
    validationSchema: yup.object({
      payFunds: yup.number().required('Funds is required'),
      payFor: yup.string().required('Pay For is required'),
      payFrom: yup.string().required('Pay From is required'),
    }),
    onSubmit: (values: any) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const transferFundsValidation = useFormik({
    initialValues: {},
    validationSchema: transferFundsValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // const spendFundsValidation = useFormik({
  //   initialValues: {},
  //   validationSchema: transferFundsValidationSchema,
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  return {
    addFundsValidation,
    transferFundsValidation,
    payFundsValidation,
    // spendFundsValidation,
  };
}
