import { FaJs, FaPython, FaNode, FaReact, FaAws, FaHtml5, FaCss3Alt, FaSass } from 'react-icons/fa';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

export default function Home() {
  return (
    <Box w="100%" id="home" bg="#f9f9f9" minH={'100vh'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignContent={'center'}>
    <Box  display={'flex'} flexDirection={'column'} justifyContent={'center'} alignContent={'center'}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        paddingRight={{ base: '2rem', md: '12rem' }}
        paddingLeft={{ base: '2rem', md: '12rem' }}
      >
        <Box
          textAlign={{ base: 'center', md: 'left' }}
          marginRight={{ base: '0', md: '2rem' }}
          marginBottom={{ base: '2rem', md: '0' }}
          maxW={{ base: '100%', md: '100%' }}
          display={'flex'}
          flexDirection={'column'}
        >
        <Text fontSize={{ base: '4xl', md: '6xl' }} className='text-[#2d2e32] font-bold'>
          Full Stack Developer
        </Text>
        <Text maxWidth={{ base: '100%', md: '70%' }} fontSize={{ base: 'xl', md: 'xl' }} mt={{ base: 4, md: 0 }}>
          Hi, Im Dan Beaumont. A passionate full-stack developer based in West Yorkshire, England. 📍
        </Text>
          <Flex justifyContent={{ base: 'center', md: 'flex-start' }} marginTop="2rem">
            <FontAwesomeIcon icon={faGithub} className='text-3xl m-2 ml-0' />
            <FontAwesomeIcon icon={faLinkedin} className='text-3xl m-2 ml-0' />
          </Flex>
        </Box>
        <Box className="circular_image" textAlign="center" marginTop={{ base: '6rem', md: '0' }} order={{ base: '-1', md: '1' }}>
          <Image
            className='circular_image'
            src="/dan.png"
            width={100}
            height={620}
            alt="Screenshots of the dashboard project showing mobile versions"
          />
        </Box>
      </Flex>
    </Box>
      <Stack direction="row" spacing={4} justifyContent="center" marginTop={{base: 0, md: "8rem"}} width={{base: '80%', md: '100%'}}>
        <FaJs className='text-6xl' />
        <FaPython className='text-6xl' />
        <FaNode className='text-6xl' />
        <FaReact className='text-6xl' />
        <FaAws className='text-6xl' />
        <FaHtml5 className='text-6xl' />
        <FaCss3Alt className='text-6xl' />
        <FaSass className='text-6xl' />
      </Stack>
    </Box>
  );
}
