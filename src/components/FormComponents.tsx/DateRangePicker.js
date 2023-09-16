import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';

export default function DateRangePicker({label,sx,...rest}) {
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
          zIndex:99999
        },
      };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker sx={{...defaultSx,...sx}} label={label} {...rest}/>
      </DemoContainer>
    </LocalizationProvider>
  );
}