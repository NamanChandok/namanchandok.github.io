import React from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';

type Props = {}

export default function Contact({}: Props) {
    return (
        <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.8}}
            className='py-16 flex flex-col text-center md:text-left max-w-7xl px-10 space-y-8 mx-auto items-center'>

                <div className='space-y-4'>
                    <h3 className='text-4xl font-semibold font-akira text-center'>Get in Touch</h3>
                    <p className='text-center text-gray-400'>
                    I am glad to connect, so come say hello and have a chat →
                    </p>
                </div>

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
                    }} className='space-y-4 text-lg'>
                    <div className='group relative px-2 cursor-pointer w-max mx-auto'>
                        <Link href='mailto:namanchandok1@gmail.com' className='text-gray-300 z-20 relative group-hover:text-bruh-black transition duration-300' aria-label='email: namanchandok1@gmail.com'>namanchandok1@gmail.com</Link>
                        <div className='absolute bg-bruh-gray/70 transition-all duration-200 h-1.5 group-hover:h-4 bottom-1 inset-x-0 z-0'></div>
                    </div>
                    <div className='group relative px-2 cursor-pointer w-max mx-auto'>
                        <p className='text-gray-300 z-20 relative group-hover:text-bruh-black transition duration-300'>New Delhi, India</p>
                        <div className='absolute bg-bruh-gray/70 transition-all duration-200 h-1.5 group-hover:h-4 bottom-1 inset-x-0 z-0'></div>
                    </div>
                </motion.div>
        </motion.div>
    )
}