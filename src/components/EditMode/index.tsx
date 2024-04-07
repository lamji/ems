/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
import Image from 'next/image';
import UploadForm from '@/src/components/UploadImages';

interface EditModeBoxProps {
  item?: {
    icon?: string | undefined;
    label?: string | undefined;
  };
  state: {
    uploadImagePreviews: {
      data: {
        previews: string[];
      };
    };
  };
  handleSave: () => void;
  handleCancel: () => void;
  isPending: boolean;
  type: 'edit' | 'add';
}

const EditModeBox: React.FC<EditModeBoxProps> = ({
  item,
  state,
  handleSave,
  handleCancel,
  isPending,
  type,
}) => {
  const [val, setVal] = useState('');

  useEffect(() => {
    type === 'edit' ? item?.label && setVal(item?.label) : setVal('');
  }, [item?.label, type]);

  return (
    <Box
      className="edit-mode-box"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography className="title" sx={{ textAlign: 'center', fontWeight: 700 }}>
        Icon
      </Typography>
      {type === 'edit' ? (
        <>
          <Image
            src={state.uploadImagePreviews.data.previews[0] ?? item?.icon}
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </>
      ) : (
        <Box></Box>
      )}

      <UploadForm />
      <Typography className="title" sx={{ textAlign: 'center', fontWeight: 700 }}>
        Expense Category
      </Typography>
      <TextField
        className="text-field"
        id="outlined-basic"
        size="small"
        variant="outlined"
        value={val}
        placeholder={type === 'edit' ? item?.label && item.label : 'Add Name'}
        onChange={(e: any) => setVal(e.target.value)}
      />
      <Box className="button-container">
        <Button onClick={handleSave} className="save-button">
          {isPending ? 'Saving ...' : 'Save'}
        </Button>
        <Button onClick={handleCancel} className="cancel-button">
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default EditModeBox;
