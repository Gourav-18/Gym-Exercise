import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [Search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async() => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExercisesData();
  }, [])
  

  const handleSearch = async () => {
    if(Search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      
      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(Search)
         || exercise.target.toLowerCase().includes(Search)
         || exercise.equipment.toLowerCase().includes(Search)
         || exercise.bodyPart.toLowerCase().includes(Search)
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack alignItems='center' mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb='50px' textAlign='center'>
        Awesome Exercises You<br></br> Should Know.
      </Typography>
      <Box position='relative' mb="72px">
        <TextField sx={{
          input: {
            fontWeight: '700',
            border: "none",
            borderRadius: '4px'
          },
          width: { lg: '1200px', xs: '350px' },
          backgroundColor: '#fff'
        }}
          height="76px"
          value={Search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className='Search-btn'
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: "absolute",
            right: '0'
          }}
          onClick={handleSearch}>
          Search</Button>
      </Box>
      <Box sx={{position: 'relative', width:'100%', p: '20px'}}>
          <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </Box>
    </Stack>
  )
}

export default SearchExercises
// from 46 min