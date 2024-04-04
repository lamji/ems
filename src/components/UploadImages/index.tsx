/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import Image from 'next/image';
import { Box } from '@mui/material';

const UploadForm: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const url = 'https://api.cloudinary.com/v1_1/dlax3esau/image/upload';

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

  // multiple image upload
  const multipleImageUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('response', imagePreviews, images);

    const formData = new FormData();

    images.forEach((item: File) => {
      formData.append('file', item);
      formData.append('upload_preset', 'luis7g15');
    });

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        return response.text();
      })
      .then((data: any) => {
        console.log('response', data);
      });
  };
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
    <div className="upload">
      <h2>Upload Image</h2>

      <Box>
        {imagePreviews?.map((preview, index) => (
          <Image key={index} src={preview} width={500} height={500} alt="Picture of the author" />
        ))}
      </Box>

      <Button
        component="label"
        role={undefined}
        endIcon={<AddPhotoAlternateIcon style={{ fontSize: '70px' }} />}
      >
        <VisuallyHiddenInput onChange={handleMultipleImage} type="file" />
      </Button>

      <Button onClick={(e: any) => multipleImageUpload(e)}>Upload</Button>
    </div>
  );
};

export default UploadForm;
