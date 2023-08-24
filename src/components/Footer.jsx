import React from 'react';
import {
  Box,
  Stack,
  VStack,
  Heading,
  HStack,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bg={'blackAlpha.900'} minH={'40'} color={'white'} padding={'16'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Subscribe to NewsLetter
          </Heading>
          <HStack borderBottom={'2px solid white'} p={'2'}>
            <Input
              placeholder="Enter Your Email"
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            Video Hub
          </Heading>
          <Text>&copy; all rights reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme="purple">
            <a href="https://www.youtube.com">Youtube</a>
          </Button>
          <Button variant={'link'} colorScheme="purple">
            <a href="https://www.instagram.com">Instagram</a>
          </Button>
          <Button variant={'link'} colorScheme="purple">
            <a href="https://www.github.com">GitHub</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
