import {Providers} from './providers';
import Home from './ui/Home';
import NavBar from './ui/NavBar';
import styles from '@/app/ui/home.module.css';

export default function Page() {
return  (   
  <Providers>
    <div className='w-100'>
      <NavBar />
      <Home />
    </div>
  </Providers>
)
}
