import React from 'react';
import {motion} from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

type Props = {}

export default function Contact({}: Props) {
    return (
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
        className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-bruh-white text-xl -mr-[20px]'>Contact Me</h3>
            <div className='flex flex-col space-y-10'>
                <motion.div
                initial={{
                    opacity:0,
                    y:-100
                }}
                whileInView={{
                    opacity:1,
                    y:0
                }}
                transition={{
                    duration:0.4
                }}
                viewport={{
                    once: true
                }} className='space-y-6'>
                    <h4 className='text-3xl font-semibold text-center underline decoration-bruh-gray'>
                        Get in touch
                    </h4>
                    <div className='flex flex-items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-bruh-primary h-7 w-7 animate-pulse'/>
                        <p className='text-xl text-bruh-gray'>namanchandok1@gmail.com</p>
                    </div>
                    <div className='flex flex-items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-bruh-primary h-7 w-7 animate-pulse'/>
                        <p className='text-xl text-bruh-gray'>New Delhi, India</p>
                    </div>
                </motion.div>
                <motion.div
                initial={{
                    opacity:0,
                    y:100
                }}
                whileInView={{
                    opacity:1,
                    y:0
                }}
                transition={{
                    duration:0.4
                }}
                viewport={{
                    once: true
                }}
                className='flex flex-items-center space-x-4 justify-center text-bruh-white'>
                    <SocialIcon 
                        url="https://instagram.com/namanchandok" 
                        fgColor='currentColor' 
                        bgColor='#3d3b402a' 
                        className='hover:text-bruh-gray transition duration-200 ease-in-out'
                    />
                    <SocialIcon 
                        url="https://github.com/namanchandok" 
                        fgColor='currentColor' 
                        bgColor='#3d3b402a' 
                        className='hover:text-bruh-gray transition duration-200 ease-in-out'
                    />
                    <SocialIcon 
                        url="https://twitter.com/br0wot" 
                        fgColor='currentColor' 
                        bgColor='#3d3b402a' 
                        className='hover:text-bruh-gray transition duration-200 ease-in-out'
                    />
                    <SocialIcon 
                        url="https://discord.com/users/481518334509187089" 
                        fgColor='currentColor' 
                        bgColor='#3d3b402a' 
                        className='hover:text-bruh-gray transition duration-200 ease-in-out'
                    />
                    <SocialIcon 
                        url="https://open.spotify.com/user/gh04xw1wcz6kkx4icrbbxogb3?si=0b493b9fe369429f" 
                        fgColor='currentColor' 
                        bgColor='#3d3b402a' 
                        className='hover:text-bruh-gray transition duration-200 ease-in-out'
                    />
                    <SocialIcon
                        url='https://www.linkedin.com/in/naman-chandok-874b421b0/'
                        fgColor='currentColor'
                        bgColor='#3d3b402a'
                        className='hover:text-bruh-gray transition duration-200 ease-in-out'
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}