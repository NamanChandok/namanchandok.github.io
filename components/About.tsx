import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import React from 'react';

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
        className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center overflow-x-hidden'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#A69C94] text-xl -mr-[20px]'>About</h3>
        <motion.img 
            initial={{
                x:-200,
                opacity:0
            }}
            transition={{
                duration: 0.8
            }}
            whileInView={{
                x:0, opacity:1
            }}
            viewport={{once:true}}
            src="./hello.jpg"
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover object-center md:rounded-lg md:w-64 md: h-95 xl:w-[300px] xl:h-[400px]'
            />
        <motion.div
            initial={{
                x:200,
                opacity:0
            }}
            transition={{
                duration: 0.8
            }}
            whileInView={{
                x:0, opacity:1
            }}
            viewport={{once:true}}
            className='space-y-5 px-0 md:px-10'>
            <h4 className='text-2xl font-semibold'>👋 Hi, I&apos;m <span className='underline decoration-[#D9C9BA]/70 tracking-wide'>Naman Chandok</span></h4>
            <p className='text-base text-[#D9C9BA]'>I&apos;m a 17 year old college student living in New Delhi, India. I&apos;m a front-end developer that uses React.js and Next.js. I&apos;m also proficient in programming in Python and Php.</p>
            <SocialIcon 
                url="https://instagram.com/namanchandok" 
                bgColor='currentColor' 
                fgColor='transparent'
                style={{height:40, width:40, marginRight: 10}} 
                className='hover:text-[#D9C9BA] text-[#A6775B] transition duration-200 ease-in-out'
            />
            <SocialIcon 
                url="https://github.com/namanchandok" 
                bgColor='currentColor' 
                fgColor='transparent'
                style={{height:40, width:40, marginRight: 10}} 
                className='hover:text-[#D9C9BA] text-[#A6775B] transition duration-200 ease-in-out'
            />
            <SocialIcon 
                url="https://twitter.com/br0wot" 
                bgColor='currentColor' 
                fgColor='transparent'
                style={{height:40, width:40, marginRight: 10}} 
                className='hover:text-[#D9C9BA] text-[#A6775B] transition duration-200 ease-in-out'
            />
            <SocialIcon 
                url="https://open.spotify.com/user/gh04xw1wcz6kkx4icrbbxogb3?si=0b493b9fe369429f" 
                bgColor='currentColor' 
                fgColor='transparent'
                style={{height:40, width:40, marginRight: 10}} 
                className='hover:text-[#D9C9BA] text-[#A6775B] transition duration-200 ease-in-out'
            />
            <SocialIcon
                url='https://www.linkedin.com/in/naman-chandok-874b421b0/'
                bgColor='currentColor'
                fgColor='transparent'
                style={{height:40, width:40, marginRight: 10}}
                className='hover:text-[#D9C9BA] text-[#A6775B] transition duration-200 ease-in-out'
            />
        </motion.div>
    </motion.div>
  )
}