import React from 'react'
import Link from 'next/link';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Background from "./Background";
import {delay, motion} from 'framer-motion';

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Front-End Developer",
      "Adobe Connoisseur",
      "Coffee Addict",
      "brain the just not working "
    ],
    loop: true,
    delaySpeed: 4000
  });  
  return (
    <div className='h-screen flex flex-col justify-center relative items-center text-center overflow-hidden bg-[#111]'>
      <Background />
      <div className="absolute bg-bruh-black/50 inset-0 z-0"></div>
      <div className='z-20 space-y-3'>
        <div>
          <motion.h2 initial={{
              clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
            }}
            animate={{
              clipPath: 'polygon(0px 100%, 100% 100%, 100% 0px, 0px 0px)'
            }}
            transition={{
              duration:2.5, 
              ease:'anticipate',
              delay: 1,
            }} className='text-lg uppercase text-gray-400 opacity-70 tracking-[5px]'>
            Hi there, I&apos;m
          </motion.h2>
          <motion.h1 initial={{
              clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
            }}
            animate={{
              clipPath: 'polygon(0px 100%, 100% 100%, 100% 0px, 0px 0px)'
            }}
            transition={{
              duration:2.5, 
              ease:'anticipate',
              delay: 1,
            }} className='text-3xl lg:text-6xl text-bruh-white font-semibold font-akira p-2 px-10'>
            Naman Chandok
          </motion.h1>
          <motion.p initial={{
              opacity:0,
              y:20
            }}
            animate={{
              opacity:1,
              y:0
            }}
            transition={{
              duration:2.5, 
              ease:'anticipate',
              delay: 1.5,
            }} className='text-lg text-gray-400 opacity-70'>
            <span>{text}</span>
            <Cursor cursorColor='#7c6aab' />
          </motion.p>
        </div>
      </div>
      <motion.div initial={{
              bottom:'-20vh',
            }}
            animate={{
              bottom:0,
            }}
            transition={{
              duration:2, 
              ease:'anticipate',
              delay: 1.5,
            }} className="custom-shape-divider-bottom-1687952567 heroTexture z-0">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"></path>
        </svg>
      </motion.div>
    </div>
  )
}