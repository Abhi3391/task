import { Box, Image, FormControl, FormLabel, FormHelperText, Input, Flex, Button } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { postMethod } from '../api/apiClient';
import { END_POINT } from '../api/endPoints';
import photo from '../assets/photo1.jpeg'

interface INewsLetterProps {
}

const NewsLetter: React.FunctionComponent = () => {
  const [news, setNews] = useState<INewsLetterProps[]>([]);
  
    const fetchData = async () => {
      try {
        const data = await postMethod(END_POINT + '/news-subscription');
        console.log("data", data)
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

  return (
    <Box w='100%' >
      <Flex>
        <Image
          w='50%' h='100%'
          src={photo}
          alt='Dan Abramov' />

        <Flex alignItems='center' w='50%' p='10' bg='#EFE1D1'>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            <Button onClick={fetchData()}>Submit</Button>
          </FormControl>
        </Flex>
      </Flex>
    </Box >
  );
};

export default NewsLetter;
