// components/GenericTextField.js
import React from 'react';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material';
import { tokens } from '../../theme';

const GenericTextField = ({ label, value, onChange, sx: customSx, ...props }) => {
    const theme=useTheme()
    const colors=tokens(theme.palette.mode)
    const defaultSx = {
        '& .MuiInputBase-input': {
          color: colors.grey[100],
          border:0,
          borderBottom:'none',
            outline:'none',
        },
        '& .MuiInputBase-root': {
            backgroundColor: colors.primary[900],
            borderBottom:'none',
            outline:'none',
            borderRadius:'10px',
          padding: '10px 15px',
          '&:hover': {
          },
        },
        '& .MuiInputLabel-root': {
            color: `${colors.grey[400]} !important`,
          margin: '10px 15PX',
          zIndex:1
        },
      };

  return (
    <TextField
      label={label}
      variant="standard"
      fullWidth
      value={value}
      onChange={onChange}
      InputProps={{
        disableUnderline: true,
        ...props.InputProps,
      }}
      InputLabelProps={{
        ...props.InputLabelProps,
      }}
      sx={{ ...defaultSx, ...customSx }} 
      {...props}
    />
  );
};

export default GenericTextField;
