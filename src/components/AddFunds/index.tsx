/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Button, TextField } from '@mui/material';
import useViewModel from './useViewModel';

export default function AddFunds() {
  const { addFundsValidation, classes } = useViewModel();

  const error = addFundsValidation.errors.funds || '';

  return (
    <div>
      <TextField
        fullWidth
        id="funds"
        name="funds"
        type="funds"
        placeholder="Enter amount"
        value={addFundsValidation.values.password}
        onChange={addFundsValidation.handleChange}
        onBlur={addFundsValidation.handleBlur}
        error={!!addFundsValidation.errors.funds} // Convert to boolean
        helperText={error as any} // Display error if it exists
      />
      <Button
        color="primary"
        variant="contained"
        fullWidth
        onClick={() => addFundsValidation.handleSubmit()} // Corrected function invocation
        sx={classes.button}
      >
        Add Funds
      </Button>
    </div>
  );
}
