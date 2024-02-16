import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import React from 'react';

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
        className='py-16 flex relative flex-col text-center gap-6 md:text-left md:flex-row-reverse max-w-7xl px-10 mx-auto items-center overflow-x-hidden'>
        <motion.div 
            initial={{
                x:100,
                opacity:0
            }}
            transition={{
                duration: 2, ease:'anticipate'
            }}
            whileInView={{
                x:0, opacity:1
            }}
            viewport={{once:true}}
            className="flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px] bg-[url('/hello.jpg')] bg-cover bg-center"
            ></motion.div>
        <motion.div
            initial={{
                x:-100,
                opacity:0
            }}
            transition={{
                duration: 2, ease:'anticipate'
            }}
            whileInView={{
                x:0, opacity:1
            }}
            viewport={{once:true}}
            className='space-y-5 px-0 md:px-10 text-gray-300'>
            <h4 className='text-5xl font-semibold font-akira'>Hi, I&apos;m <span className='underline decoration-bruh-gray tracking-wide'>Naman Chandok</span></h4>
            <p className='text-lg text-gray-400'>I&apos;m a college student living in New Delhi, India. I am a front-end developer using React.js and Next.js. I am also proficient in programming in Python and Php. I also work with Adobe Software including Photoshop, Illustrator, After Effects and Premiere Pro.</p>
            <SocialIcon 
                url="https://instagram.com/namanchandok" 
                bgColor='currentColor' 
                fgColor='transparent'
                className='hover:text-bruh-gray h-10 w-10 mr-2 transition duration-200 ease-in-out'
            />
            <SocialIcon 
                url="https://github.com/namanchandok" 
                bgColor='currentColor' 
                fgColor='transparent'
                className='hover:text-bruh-gray h-10 w-10 mr-2 transition duration-200 ease-in-out'
            />
            <SocialIcon 
                url="https://twitter.com/br0wot" 
                bgColor='currentColor' 
                fgColor='transparent'
                className='hover:text-bruh-gray h-10 w-10 mr-2 transition duration-200 ease-in-out'
            />
            <SocialIcon
                url='https://www.linkedin.com/in/naman-chandok-874b421b0/'
                bgColor='currentColor'
                fgColor='transparent'
                className='hover:text-bruh-gray h-10 w-10 mr-2 transition duration-200 ease-in-out'
            />
            <SocialIcon 
                url="https://www.behance.net/naman-chandok" 
                bgColor='currentColor' 
                fgColor='transparent'
                className='hover:text-bruh-gray h-10 w-10 mr-2 transition duration-200 ease-in-out'
            />
            <SocialIcon
                url='https://discord.com/users/481518334509187089'
                bgColor='currentColor'
                fgColor='transparent'
                className='hover:text-bruh-gray h-10 w-10 mr-2 transition duration-200 ease-in-out'
            />
            <SocialIcon 
                url="https://open.spotify.com/user/gh04xw1wcz6kkx4icrbbxogb3?si=0b493b9fe369429f" 
                bgColor='currentColor' 
                fgColor='transparent'
                className='hover:text-bruh-gray h-10 w-10 mr-2 transition duration-200 ease-in-out'
            />
        </motion.div>
    </motion.div>
  )
}
