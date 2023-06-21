import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px' mb='25px'>
        <img src={Logo} alt='logo' width='200px' height='40px' />
        <Typography textAlign='center' fontSize='16px' color='brown' fontFamily='sans-serif' fontWeight='bold'>
          Made in Associayion with MOHFW, Indian 🇮🇳 Govt.<br />
          ©️ Copyright Gourav Kumar, 2023
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer