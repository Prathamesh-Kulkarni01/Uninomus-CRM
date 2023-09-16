import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Typography } from '@material-ui/core';

function ImageUploadCard({label}) {
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
      };

      reader.readAsDataURL(selectedImage);
    }
  };

  const cardStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius:'inherit'
  };

  if (image) {
    cardStyle.backgroundImage = `url(${image})`;
  } 

  return (
    <Box
      component="label"
      variant="contained"
      sx={cardStyle}
    >
      <CloudUploadIcon fontSize="large" />
      <Typography variant='p'>{label}</Typography>
      <input
        style={{ visibility: 'hidden' }}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
    </Box>
  );
}

export default ImageUploadCard;
