import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='bg-bruh-dark-back fixed top-0 p-5 flex items-start justify-between w-full md:px-40 z-20'>
        <motion.div 
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{duration: 0.8}}
            className='flex flex-row items-center text-bruh-white'>
            <SocialIcon 
                url="https://instagram.com/namanchandok" 
                fgColor='currentColor' 
                bgColor='transparent' 
                className='hover:text-bruh-gray transition duration-200 ease-in-out'
            />
            <SocialIcon 
                url="https://github.com/namanchandok" 
                fgColor='currentColor' 
                bgColor='transparent' 
                className='hover:text-bruh-gray transition duration-200 ease-in-out'
            />
            <SocialIcon 
                url="https://twitter.com/br0wot" 
                fgColor='currentColor' 
                bgColor='transparent' 
                className='hover:text-bruh-gray transition duration-200 ease-in-out'
            />
            <SocialIcon 
                url="mailto:namanchandok1@gmail.com" 
                fgColor='currentColor' 
                bgColor='transparent' 
                className='hover:text-bruh-gray transition duration-200 ease-in-out'
            />
            <SocialIcon 
                url="https://open.spotify.com/user/gh04xw1wcz6kkx4icrbbxogb3?si=0b493b9fe369429f" 
                fgColor='currentColor' 
                bgColor='transparent' 
                className='hover:text-bruh-gray transition duration-200 ease-in-out'
            />
            <SocialIcon
                url='https://www.linkedin.com/in/naman-chandok-874b421b0/'
                fgColor='currentColor' 
                bgColor='transparent'
                className='hover:text-bruh-gray transition duration-200 ease-in-out'
            />
        </motion.div>

        <motion.div
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{duration: 0.8}}
            className='flex flex-row items-center text-bruh-white cursor-pointer hover:text-bruh-gray transition duration-200 ease-in-out'>
            <SocialIcon 
                url='https://discord.com/users/481518334509187089'
                fgColor='transparent'
                bgColor='currentColor' 
                style={{height: 30, width: 30, margin: 10}}
            />
            <p className='hidden md:inline-flex text-sm'>@br0wot#5186</p>
        </motion.div>
    </header>
  )
}