import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
        initial={{
            opacity: 0,
        }}
        animate={{
            scale: [1,2,2,3,1],
            opacity: [0.1,0.2,0.4,0.8,0.1,1.0],
            borderRadius: ['20%','20%','50%','80%','20%']
        }}
        transition={{
            duration:2.5
        }}
        className='relative flex justify-center items-center'>
        <div className='absolute bg-hero-pattern h-[185px] w-[338px] opacity-20  filter-grayscale mt-52 animate-ping' />
        <div className='absolute bg-hero-pattern h-[371px] w-[676px] opacity-40 mt-52 animate-pulse' />
        <div className='absolute bg-hero-pattern h-[371px] w-[676px] opacity-20  filter-grayscale mt-52 animate-ping' />
    </motion.div>
  )
}