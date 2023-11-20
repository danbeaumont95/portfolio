
import SplitWithImage from './SplitWithImage';
import { aboutText } from '../lib/data';
import { Box } from '@chakra-ui/react';

export default function About() {
return (
  <Box
    id="about"
    bg={['#ffffff', null, null, null, null, '#ffffff']}
    minH="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <SplitWithImage
      image={'/about_image.webp'}
      title={'A dedicated full stack developer.'}
      text={aboutText}
    />
  </Box>
);
}
