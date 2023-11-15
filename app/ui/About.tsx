
import SplitWithImage from './SplitWithImage';
import { aboutText } from '../lib/data';

export default function About() {
return  (   
<div id="about" className='bg-[#ffffff] h-screen flex w-full justify-center flex-col items-center'>
  <SplitWithImage
    image={"/about_image.webp"}
    title={'A dedicated full stack developer.'}
    text={aboutText}
  />
</div>
)
}
