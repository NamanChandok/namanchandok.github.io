import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    imgUrl: string;
    name: string;
};

export default function Skill({ imgUrl, name }: Props) {
  return (
    <div className='group relative flex flex-col items-center cursor-pointer'>
        <div className='w-18 h-18 xl:w-24 xl:h-24 overflow-hidden'>
            <motion.img 
                src={imgUrl}
                className='object-cover w-full h-full transition duration-300 ease-in-out filter grayscale-[30%] opacity-90 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100'
            />
        </div>
        <p className='text-md uppercase font-bold tracking-wide text-bruh-gray text-center transition duration-300 ease-in-out group-hover:text-bruh-white opacity-90 group-hover:opacity-100 group-hover:translate-y-1'>{name}</p>
    </div>
  )
}