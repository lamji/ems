import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import useViewModel from './useViewModel';
import { MultiSelectTypes } from '@/src/utils/types/multiSelect';

export default function MultiSelect(props: MultiSelectTypes) {
  const { value, handleChange, label, id, name, type, formik } = useViewModel(props);
  const error = formik.errors[name] || '';
  const isError = Boolean(error);

  console.log('formik', formik);

  return (
    <div>
      <Box sx={{ minWidth: 120, my: 2 }}>
        <InputLabel id={id}>{label}</InputLabel>
        <FormControl fullWidth error={isError}>
          <Select
            labelId={id}
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={handleChange}
            displayEmpty
            renderValue={(selected) => {
              if (selected === '') {
                return 'Select';
              }
              return selected;
            }}
            placeholder="Select"
          >
            {/* <MenuItem value="">
              <p>Select</p>
            </MenuItem> */}
            <MenuItem value={'10'}>Ten</MenuItem>
            <MenuItem value={'20'}>Twenty</MenuItem>
            <MenuItem value={'30'}>Thirty</MenuItem>
          </Select>
          {isError && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
      </Box>
    </div>
  );
}
