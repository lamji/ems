import React from 'react';
import MultiSelect from '../MultiSelect';
import { Button, TextField } from '@mui/material';
import useViewModel from './useViewModel';

export default function PayFunds() {
  const { classes, payFundsValidation } = useViewModel();
  const error = payFundsValidation.errors.funds || '';
  return (
    <>
      <MultiSelect
        options={undefined}
        label="Pay For"
        formik={payFundsValidation}
        id="payFor"
        name="payFor"
        type="payFor"
      />

      <MultiSelect
        options={undefined}
        label="Pay From"
        formik={payFundsValidation}
        id="payFrom"
        name="payFrom"
        type="payFrom"
      />
      <TextField
        fullWidth
        id="payFunds"
        name="payFunds"
        type="payFunds"
        placeholder="Enter amount"
        value={payFundsValidation.values.payFunds}
        onChange={payFundsValidation.handleChange}
        onBlur={payFundsValidation.handleBlur}
        error={!!payFundsValidation.errors.payFunds} // Convert to boolean
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        helperText={error as any} // Display error if it exists
      />
      <Button
        color="primary"
        variant="contained"
        fullWidth
        onClick={() => payFundsValidation.handleSubmit()} // Corrected function invocation
        sx={classes.button}
      >
        Add Funds
      </Button>
    </>
  );
}
