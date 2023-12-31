import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import HeroBannerImg from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{mt: {lg: '212px', xs:'70px'},
    ml: {sm:'50px'}
    }} position='relative' p="20px">
      <Typography color="#FF2625" fontWeight="600" 
      fontSize='26px'>
        Fitness Club
      </Typography>
      <Typography fontWeight={700}
      sx={{fontSize: {lg:'44px', xs: '40px'}
      }}
      mb="23px" mt="30px">
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' 
      mb='14px'>
        Check out the most effective exercises
      </Typography>
      <Button variant='contained' color="error" href='#exercises' sx={{backgroundColor: '#ff2625', padding: '10px'}}
      >Explore Exercises</Button>
      <img src={HeroBannerImg} alt='banner' className='hero-banner-img'/> 
      <Typography
      fontWeight={600}
      color='#ff2625'
      textAlign='center'
      sx={{opacity:0.1,
      display: {lg:'block', xs:'none'}
    }} fontSize="220px">
        Exercise
      </Typography>
    </Box>
  )
}

export default HeroBanner