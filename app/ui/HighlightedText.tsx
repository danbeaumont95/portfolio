import {
  Text,
  useColorModeValue,
  useBreakpointValue,
  Box,
} from '@chakra-ui/react'

export default function HighlightedText({ text}: { text: string;}) {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box style={isMobile ? {display: 'flex',justifyContent: 'center', alignItems: 'center'} : undefined}>
      <Text
        textTransform={'uppercase'}
        color={'blue.400'}
        fontWeight={600}
        fontSize={'sm'}
        bg={useColorModeValue('blue.50', 'blue.900')}
        p={2}
        alignSelf={isMobile ? 'center' : 'flex-start'}
        rounded={'md'}
        textAlign={isMobile ? 'center' : 'left'}
        width={'fit-content'}
      >
      {text}
    </Text>
  </Box>
  )
}
