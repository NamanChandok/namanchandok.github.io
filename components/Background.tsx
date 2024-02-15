import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function BackgroundCircles({}: Props) {

  return (
  <>
    <motion.div 
      initial={{
        backgroundSize: '150%',
      }}
      animate={{        
        backgroundSize: '100%',
      }}
    transition={{duration: 2.5, ease:'anticipate'}} className='absolute inset-0 bg-hero-bg bg-center bg-no-repeat'>
    </motion.div>
    <motion.div
        initial={{
            scale: 0,
        }}
        animate={{
            scale: 1.0,
        }}
        transition={{duration: 2.5, ease:'anticipate'}}
        className='absolute h-screen flex justify-center items-center'>
        <div className="rounded-full h-[50vh] w-[50vh] md:h-[70vh] md:w-[70vh] border-2 border-bruh-white/20 absolute animate-pulse heroBg"></div>
        <div className="rounded-full h-[40vh] w-[40vh] md:h-[60vh] md:w-[60vh] border-2 border-bruh-white/10 absolute animate-pulse heroBg"></div>
    </motion.div>
  </>
  )
}