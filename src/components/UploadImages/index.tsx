/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import { useAppDispatch } from '@/src/utils/redux/hooks';
import { setUpload } from '@/src/utils/redux/slices/common';

const UploadForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleMultipleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setImages(fileArray);

      const previews: string[] = [];
      fileArray.forEach((file: File) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          previews.push(result);
          if (previews.length === fileArray.length) {
            setImagePreviews(previews);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  useEffect(() => {
    dispatch(
      setUpload({
        previews: imagePreviews,
        images: images,
      })
    );
  }, [dispatch, imagePreviews, images]);

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <div className="upload" style={{ marginBottom: '20px' }}>
      <Button
        component="label"
        role={undefined}
        startIcon={<AddPhotoAlternateIcon style={{ fontSize: '30px' }} />}
      >
        Upload Icon
        <VisuallyHiddenInput onChange={handleMultipleImage} type="file" />
      </Button>

      {/* <Button onClick={(e: any) => multipleImageUpload(e)}>Upload</Button> */}
    </div>
  );
};

export default UploadForm;
