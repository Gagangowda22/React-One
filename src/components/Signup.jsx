import {
  Container,
  VStack,
  Heading,
  Input,
  Button,
  Text,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          margin={'auto'}
          my={'16'}
        >
          <Heading textAlign={'center'}>Video Hub</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Input
            placeholder="Enter Your Name"
            type="text"
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder="Enter Your Email"
            type="email"
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder="Enter Your Password"
            type="password"
            required
            focusBorderColor={'purple.500'}
          />

          <Button colorScheme={'purple'} type="submit">
            Sign Up
          </Button>
          <Text textAlign={'right'}>
            Already Signed Up?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to="/login">Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
