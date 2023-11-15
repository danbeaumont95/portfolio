'use client';

import {Providers} from './providers';
import About from './ui/About';
import Card from './ui/Card';
import Home from './ui/Home';
import NavBar from './ui/NavBar';
// import styles from '@/app/ui/home.module.css';
import Projects from './ui/Projects';
import Contact from './ui/Contact';
import { useState } from 'react';

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
