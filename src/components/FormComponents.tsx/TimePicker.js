import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useTheme } from '@mui/material';
import { tokens } from '../../theme';

export default function TimePickerValue({label}) {
  const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));
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
      <DemoContainer components={['TimePicker', 'TimePicker']}>
        <TimePicker
        sx={defaultSx}
          label={label}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}