import React from 'react';

import {motion} from 'framer-motion'

import { fadeIn } from '../variants';

import Img1 from '../assets/screen-shot-frontpage (1).png'
import Img2 from '../assets/Web capture_5-3-2023_203552_powerful-inlet-74359.herokuapp.com.jpeg';
import Img3 from '../assets/Web capture_1-5-2023_22820_calm-anchorage-14292.herokuapp.com.jpeg'


const Work = () => {
  return <section className='section' id='work'>
   <div className='=container mx-auto'>
    <div className='flex flex-col lg:flex-row gap-x-10'>
     <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
      <div>
        <motion.div
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
         className='flex-1 flex-col gap-y-10'></motion.div>
        <motion.h2 variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}  className='h2 leading-tight text-accent'>
         My Latest Work<br />
        </motion.h2>
        <motion.p  variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}} className='max-w-sm mb-16'>
          I am a full-stack web developer with expertise in building dynamic and responsive websites and web applications.
        </motion.p>
        <motion.button  variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={'show'}
        onClick={() => window.open('https://github.com/marii9')}
        viewport={{once: false, amount: 0.3}} className='btn btn-sm'>View all Projects</motion.button>
      </div>
      <div>
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl' style={{height: '435px'}}>
        <div className='group-hover:-translate-y-24 transition-all duration-300  '></div>
  <div style={{position: 'absolute', top: '5px', left: '20px', zIndex: 1, color: 'white'}}>
    <div className='text-white   absolute -bottom-full left-6 group-hover:-bottom-24 transition-all duration-500 z-50 opacity-1'>Front End Design</div>
    <div>
      <span className='text-gradient text-2xl  absolute -bottom-full  group-hover:-bottom-32 transition-all duration-500 z-50 opacity-1'>AstroMusic</span>
    </div>
  </div>
  <a href="https://github.com/Astro-Div/Astro-Music">
  <img  src={Img1} alt='' className='group-hover:scale-125 transition-all duration-500 w-1/2 mx-auto z-50 ' />
  </a>
</div>
     </div>
     <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl' style={{height: '435px'}}>
     <div className='group-hover:-translate-y-24 transition-all duration-300  '></div>
     <div style={{position: 'absolute', top: '5px', left: '20px', zIndex: 1, color: 'white'}}></div>
     <div className='text-white   absolute -bottom-full left-0 group-hover:bottom-20 transition-all duration-500 z-50 opacity-1'>Full Stack build, MySQL, Handlebars</div>
     <div>
      <span className='text-gradient text-2xl  absolute -bottom-full  group-hover:bottom-32 transition-all duration-500 z-50 opacity-1'>Gamers-Gauntlet</span>
    </div>
    <a href="https://github.com/GarrettAnderson/gamers-gauntlet">
      <img src={Img2} alt='' className='group-hover:scale-125 transition-all duration-500 w-1/2 mx-auto z-50 ' />
      </a>
     </div>
     <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl' style={{height: '435px'}}>
     <div className='group-hover:-translate-y-24 transition-all duration-300  '></div>
     <div style={{position: 'absolute', top: '5px', left: '20px', zIndex: 1, color: 'white'}}></div>
     <div className='text-white   absolute -bottom-full left-0 group-hover:bottom-20 transition-all duration-500 z-50 opacity-1'>React and Mongo, Tailwind.CSS</div>
     <div>
      <span className='text-gradient text-2xl  absolute -bottom-full  group-hover:bottom-32 transition-all duration-500 z-50 opacity-1'>Gamers-Gauntlet</span>
    </div>
    <a href="https://github.com/GarrettAnderson/react-gamers-gauntlet">
      <img src={Img3} alt='' className='group-hover:scale-125 transition-all duration-500 w-1/2 mx-auto z-50 ' />
      </a>
     </div>
     
     
     
     
     <div className='flex-1'>
      <div></div>
     </div>
    </div>
   </div>
   </div>
    </section>;
    
};

export default Work;
