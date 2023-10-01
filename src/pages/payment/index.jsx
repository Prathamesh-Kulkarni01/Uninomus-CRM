import React from 'react';
import { tokens } from '../../theme';
import { Box, useTheme } from '@mui/material';
import Header from '../../components/Header';
const Payment=()=>
{
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return(
    <>
     <Box m="20px">
      <Header title="payment" subtitle="payment details" />
      
     </Box>
    </>
  );
}
export default Payment;