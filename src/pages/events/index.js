import React from 'react';
import { tokens } from '../../theme';
import { Box, useTheme } from '@mui/material';
import Header from '../../components/Header';
const Event=()=>
{
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return(
    <>
     <Box m="20px">
      <Header title="Event" subtitle="Event details" />
        
     </Box>
    </>
  );
}
export default Event;