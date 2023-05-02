import React from 'react';
import CountUp from 'react-countup'

import { useInView } from 'react-intersection-observer';

import{motion} from 'framer-motion'

import{fadeIn} from '../variants'


const About = () => {
  const [ref, inView]= useInView({
    threshold: 0.5,
  })
  return(
    <section className='section' id='about' ref={ref}>
     <div className='container mx-auto' >
       <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
        </motion.div>
        <motion.div
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
         className='flex-1'>
         </motion.div>
          <motion.h2 variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}  className='h2 text-accent'>About me.</motion.h2>
          <motion.h3 variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.4}}  className='h3 mb-4'>
             I Am a Fullstack Developer committed to delivering high quality work!
          </motion.h3>
          <motion.p  variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.5}} className='mb-6'>
          I am a full-stack web developer with expertise in building dynamic and responsive websites and web applications. With a promising background in programming languages such as JavaScript, HTML, CSS, and experience using popular frameworks like React, Node.js, and Express. 
          </motion.p>
          <div>
            <div>
              <motion.div  variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}} className='flex gap-x-8 items-center'>
                <button className='btn btn-lg'>Contact me</button>
                <a href='#' className='text-graddient btn-link'>
                My Portfolio
                </a>
              </motion.div>
              
            </div>
          </div>
        </div>
       </div>
    
    </section>
  )  
};


export default About;
