'use client';
import {
  Container,
  Flex,
  Box,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  MdOutlineEmail,
} from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {  value, id } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = JSON.stringify(formData);
    try {
      const response = await fetch('/api', {
        method: 'POST',
        body: data,
      })
      if (response.ok) {
        toast.success("Message sent! I will be in contact within 24 hours.")
      }
      else {
        toast.error("Unable to send. Please try again later.")}
    } catch (err) {
      toast.error("Unable to send. Please try again later.")
    }
  };

  return (
    <div>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <Container id="contact" bg="#ffffff" maxW="full" mt={0} centerContent overflow="hidden" style={{paddingTop: 80}}>
      <Flex>
        <Box
          bg="#F9F9F9"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
          style={{width: '80vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                  <Stack spacing={4}>
        <Text
          textTransform={'uppercase'}
          color={'blue.400'}
          fontWeight={600}
          fontSize={'sm'}
          bg={useColorModeValue('blue.50', 'blue.900')}
          p={2}
          alignSelf={'flex-start'}
          rounded={'md'}>
          Contact me
        </Text>

      </Stack>
          <Box p={4} style={{width: '100%'}}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}style={{width: '100%'}} >
            
              <WrapItem style={{width: '100%'}}>
                <Box bg="white" borderRadius="lg" className='box1' style={{width: '100%'}}>
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name" onChange={handleChange}>
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="email" onChange={handleChange}>
                        <FormLabel>E-Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="message" onChange={handleChange}>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button variant="solid" bg="#0D74FF" color="white" _hover={{}} onClick={handleSubmit}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
    </div>
  )
}
