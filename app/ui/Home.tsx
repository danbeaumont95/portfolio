import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faGithub, faJs, faLinkedin, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faNode } from '@fortawesome/free-brands-svg-icons/faNode';

export default function Home() {
  return (
    <div className='bg-[#F9F9F9] h-screen flex w-full justify-center flex-col items-center'>
      <div className="flex items-center px-4">
        <div className='mx-48 my-0 flex items-center justify-between'>
          <div>
            <h1 className='text-[#2d2e32] text-6xl font-bold'>Full Stack Developer</h1>
            <h3 className='w-3/4 text-xl mt-4'>Hi, Im Dan Beaumont. A passionate full-stack developer based in West Yorkshire, England. 📍</h3>
            <div className='mt-2'>
              <FontAwesomeIcon icon={faGithub} className='text-3xl m-2 ml-0' />
              <FontAwesomeIcon icon={faLinkedin} className='text-3xl m-2 ml-0' />
            </div>
          </div>
          <div className="circular_image">
            <Image
              className='circular_image'
              src="/dan.png"
              width={100}
              height={620}
              alt="Screenshots of the dashboard project showing mobile versions"
            />
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-28'>
        <FontAwesomeIcon icon={faJs} className='text-6xl m-2' />
        <FontAwesomeIcon icon={faPython} className='text-6xl m-2' />
        <FontAwesomeIcon icon={faNode} className='text-6xl m-2' />
        <FontAwesomeIcon icon={faReact} className='text-6xl m-2' />
        <FontAwesomeIcon icon={faAws} className='text-6xl m-2' />
      </div>
    </div>
  );
}
