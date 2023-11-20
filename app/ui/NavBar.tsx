import { Box, Flex, Heading, Link, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box
      bg="#F9F9F9"
      boxShadow="md"
      px={{ base: '4', md: '20' }}
      position="fixed"
      w="100%"
      zIndex="999"
    >
      <Flex
        maxW="7xl"
        mx="auto"
        h="20"
        alignItems="center"
        justifyContent="space-between"
      >
        {!isOpen && (
          <Heading as="h1" size="lg" color="#2D2E32">
            Dan Beaumont
          </Heading>
        )}
        <Box display={{ base: 'block', md: 'none' }}>
          {isOpen ? (
            <CloseIcon fontSize="24px" onClick={onToggle} />
          ) : (
            <HamburgerIcon fontSize="24px" onClick={onToggle} />
          )}
        </Box>
        <Flex
          display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
          alignItems="center"
          justifyContent={{ base: 'space-between', md: 'flex-end' }}
          flex={{ base: '1', md: 'auto' }}
          flexDirection={{ base: 'row', md: 'row' }}
          paddingRight={{base: 'rem', md: 0}}
          paddingLeft={{base: 'rem', md: 0}}
        >
          <Link
            href="#home"
            fontSize="md"
            fontWeight="semibold"
            color="#2D2E32"
            _hover={{ color: '#147efb' }}
            mr={{ base: '0', md: '8' }}
            mb={{ base: '4', md: '0' }}
          >
            Home
          </Link>
          <Link
            href="#about"
            fontSize="md"
            fontWeight="semibold"
            color="#2D2E32"
            _hover={{ color: '#147efb' }}
            mr={{ base: '0', md: '8' }}
            mb={{ base: '4', md: '0' }}
          >
            About
          </Link>
          <Link
            href="#projects"
            fontSize="md"
            fontWeight="semibold"
            color="#2D2E32"
            _hover={{ color: '#147efb' }}
            mr={{ base: '0', md: '8' }}
            mb={{ base: '4', md: '0' }}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            fontSize="md"
            fontWeight="semibold"
            color="#2D2E32"
            _hover={{ color: '#147efb' }}
            mb={{ base: '4', md: '0' }}
          >
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
