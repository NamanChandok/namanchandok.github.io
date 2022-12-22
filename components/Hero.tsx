import React from 'react'
import Link from 'next/link';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Background from "./Background";
import {motion} from 'framer-motion';

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Front-End Developer",
      "Adobe Connoisseur",
      "Coffee Addict",
      "brain the just not working"
    ],
    loop: true,
    delaySpeed: 4000
  });  
  return (
    <div className='h-screen flex flex-col justify-center items-center text-center overflow-hidden'>
      <Background />
      <div className='z-20 space-y-3'>
        <motion.div 
        initial={{
            opacity:0,
            y:-100
        }}
        animate={{
            opacity:1,
            y:0
        }}
        transition={{
            duration:0.4
        }} >
          <h2 className='text-sm uppercase text-bruh-white opacity-70 tracking-[5px]'>
            Hi, I&apos;m
          </h2>
          <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            Naman Chandok
          </h1>
          <h3 className='text-l text-bruh-gray'>
            <span>{text}</span>
            <Cursor cursorColor='#7c6aab' />
          </h3>
        </motion.div>

        <motion.div 
                initial={{
                    opacity:0,
                    y:100
                }}
                animate={{
                    opacity:1,
                    y:0
                }}
                transition={{
                    duration:0.4
                }} className='pt-2'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>Projects</button>
          </Link>
          <Link href="#contact">
            <button className='heroButton'>Contact</button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}