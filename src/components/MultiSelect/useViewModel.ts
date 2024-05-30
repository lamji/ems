import { useState } from 'react';
import useStyles from './useStyles';
import { SelectChangeEvent } from '@mui/material';
import { MultiSelectTypes } from '@/src/utils/types/multiSelect';

export default function useViewModel(props: MultiSelectTypes) {
  const classes = useStyles();

  const [value, setValue] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setValue(value as string);
    props.formik.setFieldValue(name, value as string);
  };
  return {
    classes,
    value,
    handleChange,
    label: props?.label,
    options: props.options,
    id: props.id,
    name: props.name,
    type: props.type,
    formik: props.formik,
  };
}
