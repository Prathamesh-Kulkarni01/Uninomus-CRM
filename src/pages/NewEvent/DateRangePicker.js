import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';

export default function ResponsiveDatePickers() {
    const theme=useTheme()
  const colors = tokens(theme.palette.mode);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DatePicker',
          'MobileDatePicker',
          'DesktopDatePicker',
          'StaticDatePicker',
        ]}
      >
        <DemoItem label="Static variant">
          <StaticDatePicker sx={{backgroundColor:colors.primary[100]}} defaultValue={dayjs('2022-04-17')} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}