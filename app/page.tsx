'use client';
import About from './ui/About';
import Home from './ui/Home';
import NavBar from './ui/NavBar';
import Projects from './ui/Projects';
import Contact from './ui/Contact';
import { Box } from '@chakra-ui/react';

export default function Page() {
return  (   
    <Box w='100%'>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </Box>
)
}
