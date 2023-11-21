'use client';

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react'
import HighlightedText from './HighlightedText';

interface FeatureProps {
  text: string
  iconBg: string
  icon?: any
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}
export default function SplitWithImage({image, title, text}: {image: string; title: string; text: string;}) {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW={'5xl'} py={12} 
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {isMobile ? <HighlightedText text={'About me'} /> : null}
      <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              image
            }
            objectFit={'cover'}
          />
        </Flex>
        <Stack spacing={4}>
        {!isMobile ? <HighlightedText text={'About me'} /> : null}
          <Heading>{title}</Heading>
          <Text  fontSize={'lg'}>
            {text}
          </Text>
        </Stack>
      
      </SimpleGrid>
    </Container>
  )
}
