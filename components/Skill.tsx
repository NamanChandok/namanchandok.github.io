import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
    imgUrl: string;
    name: string;
};

export default function Skill({ directionLeft, imgUrl, name }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
            src={imgUrl}
            className='rounded-full bg-[#A69C942A] border border-[#A69C94] object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#D9C9BA] h-24 w-24 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-md uppercase font-bold tracking-wide text-[#000] opacity-100 text-center'>{name}</p>
            </div>
        </div>
    </div>
  )
}