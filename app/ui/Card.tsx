import { Box, Flex } from "@chakra-ui/react";
import { Link } from '@chakra-ui/next-js'

export default function Card({image, title, text, url, github, buttonColour, secondButtonColour}: {image: string; title: string; text: string; url: string; github: string; buttonColour?: string; secondButtonColour?: string;}) {
  return (
<Flex  _dark={{ bg: "#3e3e3e", }} p={50} w="full" alignItems="center" justifyContent="center" >
  <Box bg="white"_dark={{bg: "gray.800"}} mx={{lg: 8,}} display={{ lg: "flex", }} maxW={{ lg: "5xl", }} shadow={{ lg: "lg", }} rounded={{ lg: "lg", }} >
  <Box w={{ lg: "50%", }} > <Box h={{ base: 64, lg: "full", }} rounded={{ lg: "lg", }} bgSize="cover" style={{ backgroundImage: `url(${image})`, }} ></Box>
      </Box>
      <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl", }} w={{ lg: "50%", }} >
        <h2 className="text-2xl font-semibold">{title}
        </h2>
        <p>
          {text}
        </p>

        <Box mt={8} className="flex gap-x-2">
        <Link href={url} target="_blank" bg={buttonColour ? buttonColour : "gray.900"} color="gray.100" px={5} py={3} fontWeight="semibold" rounded="lg" _hover={secondButtonColour ? {bg: secondButtonColour} : { bg: "gray.800", }} >
            Live demo
          </Link>
        <Link href={github} target="_blacnk" bg={buttonColour ? buttonColour : "gray.900"}color="gray.100" px={5} py={3} fontWeight="semibold" rounded="lg" _hover={secondButtonColour ? {bg: secondButtonColour} : { bg: "gray.800", }} >
            Code
          </Link>
        </Box>
      </Box>
    </Box>
  </Flex> 
  )
}
