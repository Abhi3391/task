
import React, { useState } from 'react';
import { Box, Image, FormControl, FormLabel, Text, Input, Flex, Link, Button, Heading, Spacer, FormErrorMessage } from '@chakra-ui/react';
import { postMethod } from '../api/apiClient';
import { END_POINT } from '../api/endPoints';
import photo from '../assets/photo1.jpeg';
import { isEmail } from 'validator';

const NewsLetter: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [status, setStatus] = useState<number>(0)

  const sendData = async () => {
    if (email.trim() === '') {
      setError('Please enter an email address');
      return;
    }

    if (!isEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      const data = await postMethod(END_POINT + '/news-subscription', email);
      console.log('Data:', data);
      console.log('Data:1', data.statusCode);
      setStatus(data.statusCode)

    } catch (error) {
      console.error('Error fetching news:', error);

    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError('');
  };

  return (
    <Box w='100%' h='50rem'm='auto' display='flex'>
      <Flex w='100%'>
        <Image
          w='50%' h='100%'
          src={photo}
          alt='Dan Abramov'
        />

        {status ?
          <Box display='flex' alignItems='center' justifyContent="center" w='50%' p='10' bg='#EFE1D1'>
            <Heading as='h6'>Subscribed Successfully</Heading>
          </Box>
          :

          <Box display='flex' alignItems='center' justifyContent="center" w='50%' p='10' bg='#EFE1D1' >
            <Box py='auto'>
              <Heading as='h1' pb='10'>
                Sign Up For Email
              </Heading>
              <Text pb='10'>
                Sign up to receive NAMI emails and get first dibs on new arrival, sales, exclusive content, events and more!
              </Text>
              <Flex w='100%'>
                <Spacer />
                <FormControl borderColor='black' borderRadius='2px' isRequired isInvalid={error !== ''}>
                  <FormLabel>Email address</FormLabel>
                  <Input mb='7' type='email' onChange={handleInput} />
                  <FormErrorMessage color='red'>{error}</FormErrorMessage>

                  <Button w='100%' mb='4' onClick={sendData}>Submit</Button>
                  <Link w='100%'>
                    <Text as='u' px='auto'>No Thanks</Text>
                  </Link>
                </FormControl>
              </Flex>
            </Box>
          </Box>
        }
      </Flex>
    </Box>
  );
};

export default NewsLetter;
