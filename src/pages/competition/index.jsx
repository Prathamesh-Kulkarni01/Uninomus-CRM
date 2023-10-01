import React from 'react';
import { tokens } from '../../theme';
import { Box, useTheme } from '@mui/material';
import Header from '../../components/Header';
const Competition=()=>
{
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return(
    <>
     <Box m="20px">
      <Header title="Competition" subtitle="Competition details" />
      
     </Box>
    </>
  );
}
export default Competition;