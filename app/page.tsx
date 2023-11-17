'use client';
import About from './ui/About';
import Home from './ui/Home';
import NavBar from './ui/NavBar';
import Projects from './ui/Projects';
import Contact from './ui/Contact';

export default function Page() {
return  (   
    <div className='w-100'>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
)
}
